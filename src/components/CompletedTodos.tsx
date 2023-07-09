import React from "react";
import styled from "styled-components";
import {
  SCheckbox,
  SDeleteButton,
  SFieldTitle,
  SList,
  SListItem,
  STodoName,
} from "./IncompleteTodos";
import { TodoState } from "../App";

type Props = {
  completedTodos: Array<TodoState>;
  handleDeleteCompletedTodo: (i: number) => void;
  handleUnChecked: (i: number) => void;
};

export const CompletedTodos = ({
  completedTodos,
  handleDeleteCompletedTodo,
  handleUnChecked,
}: Props) => {
  return (
    <SCompletedTodosArea>
      <SFieldTitle className="fieldTitle">完了したTODO</SFieldTitle>
      <SList>
        {completedTodos.map((completedTodo, i) => (
          <SListItem key={i}>
            <SCheckbox
              type="checkbox"
              checked={completedTodo.isChecked}
              onChange={() => handleUnChecked(i)}
            />
            <SCompletedTodoName>{completedTodo.todo}</SCompletedTodoName>
            <SDeleteButton onClick={() => handleDeleteCompletedTodo(i)}>
              削除
            </SDeleteButton>
          </SListItem>
        ))}
      </SList>
    </SCompletedTodosArea>
  );
};

const SCompletedTodosArea = styled.div``;

const SCompletedTodoName = styled(STodoName)`
  text-decoration: line-through;
`;
