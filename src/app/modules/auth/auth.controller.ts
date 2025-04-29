/* eslint-disable @typescript-eslint/ban-ts-comment */
import catchAsync from "../../global/catchAsync";
import bcrypt from "bcrypt";
import { createToken } from "./auth.utils";
import resSend from "../../global/resSend";
import knex from "../../../config/knex";
import "dotenv/config"
import config from "../../../config/config";

const login = catchAsync(async (req, res) => {
    const { email, password } = req.body;
    const author = await knex("authors").where({ email }).first()
    if (!author) throw new Error("Author not found")
    const isMatch = await bcrypt.compare(password, author.password)
    if (!isMatch) throw new Error("Invalid password")
    const token = createToken({ email: author.email, id: author.id }, (config.jwtSecret as string), "10d")
    console.log(config.jwtSecret)
    resSend(res, 201, "Login successful", { token });
})

const getMe = catchAsync(async (req, res) => {
    //@ts-ignore
    const { email } = req.user
    console.log(config.jwtSecret)
    const data = await knex("authors").where({ email }).select("*")

    resSend(res, 200, "Auhor fetched successully", data)

})

export const authController = {
    login,
    getMe
}