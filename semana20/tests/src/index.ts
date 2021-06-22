import { app } from "./controller/app";
import { postRouter } from "./routes/postRoutes";

app.use("/posts", postRouter);
