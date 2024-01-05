import Todo from "../models/todo.models.js";

// get all todos

export const getAllTodo = async (req, res) => {
  const todo = await Todo.find();
  res.send(todo);
};

// get todo by id

export const getTodoByID = async (req, res) => {
  const { _id } = req.body;

  const todo = await Todo.findById(_id);
  res.send(todo);
};

// add todo

export const addTodo = async (req, res) => {
  const { text, isCompleted } = req.body;

  Todo.create({ text, isCompleted })
    .then((data) => {
      console.log(`${data} added successfully...`);
      res.send(data);
    })
    .catch((err) => console.log("ecountered this error => ", err));
};

//update todo

export const updateTodo = async (req, res) => {
  const { _id, text, isCompleted, createdOn } = req.body;

  Todo.findByIdAndUpdate(_id, { text, isCompleted, createdOn })
    .then((data) => {
      console.log(`${data} updated successfully...`);
      res.send(data);
    })
    .catch((err) => console.log("ecountered this error => ", err));
};

//delete todo

export const deleteTodo = async (req, res) => {
  const { _id } = req.body;

  Todo.findByIdAndDelete(_id)
    .then((data) => {
      console.log(`${data} deleted successfully...`);
      res.send(data);
    })
    .catch((err) => console.log("ecountered this error => ", err));
};
