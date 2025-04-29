/* eslint-disable @typescript-eslint/ban-ts-comment */
import jwt, { JwtPayload } from "jsonwebtoken";
import "dotenv/config";
import catchAsync from "../global/catchAsync";
import knex from "../../config/knex";
import config from "../../config/config";

const auth = () => {
    return catchAsync(async (req, res, next) => {
        // Get token from the Authorization header
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            throw new Error("Please log in!");
        }

        // Extract token from the header
        const token = authHeader.split(" ")[1]; // "Bearer <token>"

        // Verify the token
        const decoded = jwt.verify(token, config.jwtSecret as string) as JwtPayload;

        const { email } = decoded;

        // Check if the user exists
        const user = await knex("authors").where({ email }).first();

        if (!user) {
            throw new Error("This user does not exist");
        }

        // @ts-ignore
        req.user = decoded;

        next();
    });
};

export default auth;
