import bcrypt from "bcrypt";
import knex from "../../../config/knex";
import catchAsync from "../../global/catchAsync";
import resSend from "../../global/resSend";


const createAuthor = catchAsync(async (req, res) => {

    const data = req.body;

    console.log(data);

    const author = await knex("authors").where({ email: data.email }).first()

    if (author) throw new Error("Author already exists")

    const hash = await bcrypt.hash(data.password, 10);
    data.password = hash

    await knex("authors")
        .insert(data)

    resSend(res, 200, "User created successfully", {});
})

const getAllAuthors = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;

    const authors = await knex("authors").select("*").limit(limit).offset(offset);

    const [{ count }] = await knex("authors").count("* as count");

    resSend(res, 200, "Authors fetched successfully", {
        meta: {
            page,
            limit,
            total: Number(count),
            totalPages: Math.ceil(Number(count) / limit),
        },
        data: authors,
    });
});


const getAuthorById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const author = await knex("authors").where({ id }).first();
    if (!author) throw new Error("Author not found")
    resSend(res, 200, "Author fetched successfully", author);
})

const updateAuthor = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const author = await knex("authors").where({ id }).first();
    if (!author) throw new Error("Author not found")
    await knex("authors").where({ id }).update(data);
    resSend(res, 200, "Author updated successfully", {});
})

const deleteAuthor = catchAsync(async (req, res) => {
    const { id } = req.params;

    console.log(id)
    console.log(typeof (id))
    const author = await knex("authors").where({ id }).first();
    if (!author) throw new Error("Author not found")
    await knex("authors").where({ id }).delete();
    resSend(res, 200, "Author deleted successfully", {});
})

export const AuthorController = {
    createAuthor, getAllAuthors, getAuthorById, updateAuthor, deleteAuthor
}
