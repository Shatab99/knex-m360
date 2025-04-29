import { z } from "zod";

const create = z.object({
    body: z.object({
        title: z.string(),
        description: z.string().optional(),
        author_id: z.number().int().positive(),
        published_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        }),
    })
});
const update = z.object({
    body: z.object({
        title: z.string().optional(),
        description: z.string().optional().optional(),
        author_id: z.number().int().positive().optional(),
        published_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
            message: "Invalid date format. Use YYYY-MM-DD",
        }).optional(),
    })
});

export const bookValidation = {
    create, update
}