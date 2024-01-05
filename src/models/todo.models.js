import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// 'todo' will be the collection name inside mongodb and appname is inside .env file

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
