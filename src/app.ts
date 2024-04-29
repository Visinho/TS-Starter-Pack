import MessageResponse from './interfaces/MessageResponse';
import * as middlewares from "../middleware";
import express from "express";
import routes from "./routes";

const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
    res.json({
        message: "Hi"
    });
});

app.use("/api/v1", routes);
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;