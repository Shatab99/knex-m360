import { Router } from "express";
import { AuthorRouter } from "../modules/author/author.router";
import { BookRouter } from "../modules/books/book.router";
import { AuthRouter } from "../modules/auth/auth.router";

const router = Router()

const modules = [
    {
        path: '/author',
        route: AuthorRouter
    },
    {
        path: '/book',
        route: BookRouter
    },
    {
        path: '/auth',
        route: AuthRouter
    },
]


modules.forEach(module => router.use(module.path, module.route))

export default router