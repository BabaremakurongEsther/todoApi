import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectdb.js";
import { Todo } from "./schema/todoSchema.js";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;
app.use(cors());


connectDB();

app.get("/", async (req, res) => {
  const todos = await Todo.find();
  if (todos) {
    return res.status(200).json({
      success: true,
      data: todos,
      message: "Todos retrived successfully",
    });
  } else {
    return res.status(500).json({
      success: false,
      message: "Todos not retrived",
    });
  }
});

app.use(express.json());

app.post("/todos", async (req, res) => {
  const { title, description, date_time } = req.body;
  const todo = await Todo.create({
    title,
    description,
    date_time,
  });
  if (todo) {
    return res.status(200).json({
      success: true,
      data: todo,
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Todo not created",
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/todos", (req, res) => {
  res.json([{ name: "abc", age: 23 }]);
});

app.patch("/todo:id", (req, res) => {
  res.json({
    message: "Todo updated sucessfully",
  });
});

app.delete("/todos:id", (req, res) => {
  res.json({
    message: "Todo delete successfully",
  });
});
