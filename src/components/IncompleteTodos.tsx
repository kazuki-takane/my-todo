import React from "react";
import styled from "styled-components";
import { SButton } from "./InputTodo";
import { TodoState } from "../App";

type Props = {
  incompleteTodos: Array<TodoState>;
  handleDelete: (i: number) => void;
  handleChecked: (i: number) => void;
};

export const IncompleteTodos = ({
  incompleteTodos,
  handleDelete,
  handleChecked,
}: Props) => {
  return (
    <SIncompleteTodosArea>
      <SFieldTitle className="fieldTitle">未完了のTODO</SFieldTitle>
      <SList>
        {incompleteTodos.map((incompleteTodo, i) => (
          <SListItem key={i}>
            <SCheckbox
              type="checkbox"
              checked={incompleteTodo.isChecked}
              onChange={() => handleChecked(i)}
            />
            <STodoName>{incompleteTodo.todo}</STodoName>
            <SDeleteButton onClick={() => handleDelete(i)}>削除</SDeleteButton>
          </SListItem>
        ))}
      </SList>
    </SIncompleteTodosArea>
  );
};

const SIncompleteTodosArea = styled.div`
  padding: 4px;
  margin-bottom: 1rem;
`;

export const SFieldTitle = styled.h2`
  margin: 0 0 0.4rem;
`;

export const SList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const SListItem = styled.li`
  margin-bottom: 0.2rem;
  padding: 0.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: fit-content;
`;

export const SCheckbox = styled.input`
  margin: 0;
  width: 1.2rem;
  height: 1.2rem;
  display: inline-block;
  margin-right: 0.5rem;
  line-height: 1rem;
`;

export const STodoName = styled.span`
  margin-right: 1rem;
`;

export const SDeleteButton = styled(SButton)`
  background-color: crimson;
`;
