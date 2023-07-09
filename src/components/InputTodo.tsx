import React, { useState } from "react";
import styled from "styled-components";

type Props = {
  inputText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickAdd: () => void;
};

export const InputTodo = ({
  inputText,
  handleChange,
  handleClickAdd,
}: Props) => {
  return (
    <SInputTodoArea>
      <SInput
        type="text"
        placeholder="TODOを入力"
        value={inputText}
        onChange={handleChange}
      />
      <SButton onClick={handleClickAdd}>追加</SButton>
    </SInputTodoArea>
  );
};

const SInputTodoArea = styled.div`
  text-align: center;
  margin-bottom: 1rem;
`;

const SInput = styled.input`
  font-size: 18px;
  padding: 0.2rem;
  margin-right: 1rem;
  border: none;
  border-bottom: 2px solid #ddd;
  transition: all 0.4s;
  &:focus {
    outline: none;
    border-bottom: 2px solid #333;
  }
`;

export const SButton = styled.button`
  font-size: 14px;
  padding: 0.2rem 0.4rem;
  background-color: slateblue;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 1px 1px 3px #999;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: translate(1px, 1px);
    box-shadow: none;
  }
`;
