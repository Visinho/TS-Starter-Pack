import MessageResponse from './interfaces/MessageResponse';
import express from "express";

const app = express();

app.get<{}, MessageResponse>("/", (req, res) => {
    res.json({
        message: "Hi"
    });
});

export default app;