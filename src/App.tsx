import React, { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";
import styled from "styled-components";
import { useTodo } from "./hooks/useTodo";

export type TodoState = {
  todo: string;
  isChecked: boolean;
};

function App() {
  const {
    inputText,
    incompleteTodos,
    completedTodos,
    handleChange,
    handleClickAdd,
    handleChecked,
    handleUnChecked,
    handleDeleteIncompleteTodo,
    handleDeleteCompletedTodo,
  } = useTodo();

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
  max-width: 80%;
  height: auto;
  margin: 1rem auto;
  box-shadow: 0 0 5px #999;
  border-radius: 10px;
  @media screen and (max-width: 767px) {
    padding: 1rem;
  }
`;
