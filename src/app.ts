/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from "express";
import cors from "cors";
import router from "./app/router/index.router";
import globalErrorHandler from "./app/global/globalError.handle";

const app: Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1", router)

//global error handler


// Health check route
app.get("/", (_req, res) => {
  res.send("Bookstore API is running 🚀");
});

app.use(globalErrorHandler as any)

export default app;
