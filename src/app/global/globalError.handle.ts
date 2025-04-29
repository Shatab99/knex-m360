/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import handleZodError from "../globalTypes/zodError.types";
import { TErroSource } from "../globalTypes/error.interface";


const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Something went wrong !!";

    let errorSource: TErroSource = [
        {
            path: "",
            message: "Something went wrong !",
        },
    ];

    // Handle Zod Validation Error
    if (err instanceof ZodError) {
        const error = handleZodError(err);
        statusCode = error.statusCode;
        message = error.message;
        errorSource = error.errorSource;
    }


    // Return the formatted error response
    return res.status(statusCode).json({
        success: false,
        message,
        errorSource
    });
};

export default globalErrorHandler;