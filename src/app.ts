import MessageResponse from './interfaces/MessageResponse';
import express from "express";
import routes from "./routes";

const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
    res.json({
        message: "Hi"
    });
});

app.use("/api/v1", routes);

export default app;