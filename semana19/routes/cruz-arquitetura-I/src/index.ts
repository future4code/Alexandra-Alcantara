import { app } from "./controller/app";
import { userRouter } from "./routes/userRouter";
import { taskRouter } from "./routes/taskRouter";

app.use("/users", userRouter);
app.use("/tasks", taskRouter);

app.use((req, res) => {
  res.status(404).send(`Route not found: ${req.method} ${req.path}`);
});
