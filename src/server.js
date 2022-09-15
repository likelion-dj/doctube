import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/GlobalRouter";
import userRouter from "./routers/UserRouter";
import videoRouter from "./routers/VideoRouter";

const PORT = 4000;

const app = express();

// middlewares
const logger = morgan("dev");
app.use(logger);

// routers
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/video", videoRouter);

// listen
const handleListening = () => console.log(`Server listening on http://localhost:${PORT} 🚀`)
app.listen(PORT, handleListening);
