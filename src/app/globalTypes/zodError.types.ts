import { ZodError, ZodIssue } from "zod"
import { TGenericError } from "./genericError"
import { TErroSource } from "./error.interface"



const handleZodError = (err : ZodError) :TGenericError=>{

    const errorSource :TErroSource = err.issues.map((issue : ZodIssue)=>{
        return {
            path : issue?.path[issue.path.length-1],
            message: issue.message
        }
    })


    return{
        statusCode : 400,
        message : "Validation Error !!",
        errorSource
    }
}

export default handleZodError