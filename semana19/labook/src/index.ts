import { app } from "./controllers/app";
import { feedRouter } from "./routes/feedRouter";
import { friendshipRouter } from "./routes/friendshipRouter";
import { postRouter } from "./routes/postRouter";
import { userRouter } from "./routes/userRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/friendship", friendshipRouter);
app.use("/feed", feedRouter);
