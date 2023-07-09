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

export const CompletedTodos = () => {
  return (
    <SCompletedTodosArea>
      <SFieldTitle className="fieldTitle">完了したTODO</SFieldTitle>
      <SList>
        <SListItem>
          <SCheckbox type="checkbox" />
          <SCompletedTodoName>OXゲームアプリ作成</SCompletedTodoName>
          <SDeleteButton>削除</SDeleteButton>
        </SListItem>
      </SList>
    </SCompletedTodosArea>
  );
};

const SCompletedTodosArea = styled.div``;

const SCompletedTodoName = styled(STodoName)`
  text-decoration: line-through;
`;
