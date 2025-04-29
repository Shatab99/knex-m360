import knex from "../../../config/knex";
import catchAsync from "../../global/catchAsync";
import resSend from "../../global/resSend";

const createBook = catchAsync(async (req, res) => {
    const data = req.body;


    const author = await knex("authors").where({ id: data.author_id }).first()
    if (!author) throw new Error("Author not found")

    await knex('books').insert(data);
    resSend(res, 200, "Book created successfully", {});
})

const getAllBooks = catchAsync(async (req, res) => {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const offset = (page - 1) * limit;
    const search = (req.query.search as string)?.toLowerCase() || "";

    const query = knex("books")
        .join("authors", "books.author_id", "authors.id")
        .select(
            "books.*",
            "authors.name as author_name"
        )
        .limit(limit)
        .offset(offset);

    if (search) {
        query.where(function () {
            this.whereRaw("LOWER(books.title) LIKE ?", [`%${search}%`])
                .orWhereRaw("LOWER(authors.name) LIKE ?", [`%${search}%`]);
        });
    }

    // For total count with same filters
    const totalQuery = knex("books")
        .join("authors", "books.author_id", "authors.id")
        .count("* as count");

    if (search) {
        totalQuery.where(function () {
            this.whereRaw("LOWER(books.title) LIKE ?", [`%${search}%`])
                .orWhereRaw("LOWER(authors.name) LIKE ?", [`%${search}%`]);
        });
    }

    const books = await query;
    const [{ count }] = await totalQuery;

    resSend(res, 200, "Books fetched successfully", {
        meta: {
            page,
            limit,
            total: Number(count),
            totalPages: Math.ceil(Number(count) / limit),
        },
        data: books,
    });
});


const getBookById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const book = await knex("books").where({ id }).first();
    if (!book) throw new Error("Book not found")
    resSend(res, 200, "Book fetched successfully", book);
})

const updateBook = catchAsync(async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    if (data.author_id) {
        const author = await knex("authors").where({ id: data.author_id }).first()
        if (!author) throw new Error("Author not found")
    }

    const book = await knex("books").where({ id }).first();
    if (!book) throw new Error("Book not found")
    await knex("books").where({ id }).update(data);
    resSend(res, 200, "Book updated successfully", {});
})

const deleteBook = catchAsync(async (req, res) => {
    const { id } = req.params;
    const book = await knex("books").where({ id }).first();
    if (!book) throw new Error("Book not found")
    await knex("books").where({ id }).delete();
    resSend(res, 200, "Book deleted successfully", {});
})


export const BookController = {
    createBook,
    getAllBooks,
    getBookById,
    updateBook,
    deleteBook
}