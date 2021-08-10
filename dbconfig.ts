import { connect } from "mongoose";

const database: string = "mongodb://localhost:27017/carogame";

export const runDBConnect = async (): Promise<void> => {
  await connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`MongoDB connected successfully at ${database}`);
};
