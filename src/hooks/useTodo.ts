import React, { useState } from "react";
import { TodoState } from "../App";

export const useTodo = () => {
  const [inputText, setInputText] = useState<string>("");
  const [incompleteTodos, setIncompleteTodos] = useState<Array<TodoState>>([]);
  const [completedTodos, setCompletedTodos] = useState<Array<TodoState>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleClickAdd = () => {
    if (inputText === "") {
      return;
    }
    setIncompleteTodos([
      ...incompleteTodos,
      { todo: inputText, isChecked: false },
    ]);
    setInputText("");
  };

  const handleChecked = (i: number) => {
    const newCheckedTodos = [...incompleteTodos];
    newCheckedTodos[i].isChecked = true;
    setCompletedTodos([...completedTodos, newCheckedTodos[i]]);
    newCheckedTodos.splice(i, 1);
    setIncompleteTodos(newCheckedTodos);
  };

  const handleUnChecked = (i: number) => {
    const newUnCheckedTodos = [...completedTodos];
    newUnCheckedTodos[i].isChecked = false;
    setIncompleteTodos([...incompleteTodos, newUnCheckedTodos[i]]);
    newUnCheckedTodos.splice(i, 1);
    setCompletedTodos(newUnCheckedTodos);
  };

  const handleDeleteIncompleteTodo = (i: number) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(i, 1);
    setIncompleteTodos(newIncompleteTodos);
  };

  const handleDeleteCompletedTodo = (i: number) => {
    const newCompletedTodos = [...completedTodos];
    newCompletedTodos.splice(i, 1);
    setCompletedTodos(newCompletedTodos);
  };
  return {
    inputText,
    incompleteTodos,
    completedTodos,
    handleChange,
    handleClickAdd,
    handleChecked,
    handleUnChecked,
    handleDeleteIncompleteTodo,
    handleDeleteCompletedTodo,
  };
};
