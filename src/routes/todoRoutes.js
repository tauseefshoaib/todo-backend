import { Router } from "express";
import {
  getAllTodo,
  addTodo,
  updateTodo,
  deleteTodo,
  getTodoByID,
} from "../controllers/todoController.js";

const router = Router();

router.get("/getAllTodo", getAllTodo);
router.post("/getTodoByID", getTodoByID);
router.post("/addTodo", addTodo);
router.post("/updateTodo", updateTodo);
router.post("/deleteTodo", deleteTodo);

export default router;
