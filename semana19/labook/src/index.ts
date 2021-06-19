import { app } from "./controllers/app";
import { friendshipRouter } from "./routes/friendshipRouter";
import { postRouter } from "./routes/postRouter";
import { userRouter } from "./routes/userRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/friendship", friendshipRouter);
