import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();

const loggerMiddleware = morgan("dev");

const handleHome = (req, res) => {
    return res.send("home");
}

app.use(loggerMiddleware);
app.get("/", handleHome);

const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening);
