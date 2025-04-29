import { Router } from "express";
import { AuthorRouter } from "../modules/author/author.router";

const router = Router()

const modules = [
    {
        path: '/author',
        route: AuthorRouter
    }
]


modules.forEach(module => router.use(module.path, module.route))

export default router