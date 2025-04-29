import { z } from "zod";

const login = z.object({
    body: z.object({
        email: z.string().email(),
        password: z.string()
    })
})


export const authValidation = {
    login
}