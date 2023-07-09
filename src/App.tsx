import React, { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";
import styled from "styled-components";

export type TodoState = {
  todo: string;
  isChecked: boolean;
};

function App() {
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

  return (
    <SBody>
      <SContainer>
        <InputTodo
          inputText={inputText}
          handleChange={handleChange}
          handleClickAdd={handleClickAdd}
        />
        <IncompleteTodos
          incompleteTodos={incompleteTodos}
          handleDelete={handleDeleteIncompleteTodo}
          handleChecked={handleChecked}
        />
        <CompletedTodos
          completedTodos={completedTodos}
          handleDeleteCompletedTodo={handleDeleteCompletedTodo}
          handleUnChecked={handleUnChecked}
        />
      </SContainer>
    </SBody>
  );
}

export default App;

const SBody = styled.div`
  background-color: #fff;
  color: #333;
`;

const SContainer = styled.div`
  padding: 2rem;
  width: 600px;
  height: auto;
  margin: 1rem auto;
  box-shadow: 0 0 5px #999;
  border-radius: 10px;
`;
