import { useState } from "react";
import React from "react";

import {
  Button,
  TextField,
  ListItem,
  Typography,
  Box,
  List,
  ListItemText,
} from "@mui/material";

function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, inputValue]);
    setInputValue("");
  }
  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Typography align="center" variant="h1">
          ToDos
        </Typography>
        <TextField
          type="text"
          value={inputValue}
          onChange={handleChange}
          label="ToDo"
          variant="outlined"
          placeholder="Введите значение"
        />
      </Box>
        <Button onClick={handleSubmit} className="addToDo" variant="contained">
          Добавить задачу
        </Button>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map((todo,index) => (
          <ListItem
            key={index}
            // disableGutters
            secondaryAction={
              <Button onClick={() => handleDelete(index)}>Delete</Button>
            }
          >
            <ListItemText primary={`Line item ${todo}`} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ToDoList;
