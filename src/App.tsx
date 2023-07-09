import React, { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompletedTodos } from "./components/CompletedTodos";
import styled from "styled-components";

function App() {
  const [inputText, setInputText] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };
  return (
    <SBody>
      <SContainer>
        <InputTodo inputText={inputText} handleChange={handleChange} />
        <IncompleteTodos />
        <CompletedTodos />
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
