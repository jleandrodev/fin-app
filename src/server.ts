import express from "express";

const PORT = process.env.PORT || 3333;

const app = express();

app.get("/", (req, res) => {
    return res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
