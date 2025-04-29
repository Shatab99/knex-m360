import { z } from "zod";

const create = z.object({
    body: z.object({
        name: z.string(),
        email: z.string().email(),
        password: z.string().min(6).max(20),
        bio: z.string().optional(),
        birthdate: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        }),
    })
});
const update = z.object({
    body: z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        password: z.string().min(6).max(20).optional(),
        bio: z.string().optional(),
        birthdate: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        }).optional()
    })
})

export const AuthorValidation = {
    create, update
}   