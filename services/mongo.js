import mongoose from "mongoose";

const connectMongo = async () => {
  const { connect, connection } = mongoose;
  const { DB_STRING } = process.env;
  const disconectedMsg = `database disconnected`;
  const connectionMsg = `database connection established succesfully`;
  connection
    .on("error", console.log)
    .on("disconnected", print(disconectedMsg))
    .on("close", print(disconectedMsg));
  //
  const dbConnect = await connect(DB_STRING);
  console.log(connectionMsg);
  return [true, dbConnect];
};

export { connectMongo };
