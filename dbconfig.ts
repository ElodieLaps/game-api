import { connect } from "mongoose";

const port: string = "mongodb://localhost:27017/carogame";

export const runDBConnect = async (): Promise<void> => {
  await connect(port, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected successfully at ${port}`);
};
