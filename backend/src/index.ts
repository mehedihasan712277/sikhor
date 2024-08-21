import { app } from "./app";
import { connectDB } from "./db/index";


const port = process.env.PORT;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
});
