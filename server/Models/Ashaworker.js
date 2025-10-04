import mongoose from "mongoose";

const ashaWorkerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const AshaWorker = mongoose.model("AshaWorker", ashaWorkerSchema);
export default AshaWorker;