import React from "react";
import styled from "styled-components";
import { SButton } from "./InputTodo";

export const IncompleteTodos = () => {
  return (
    <SIncompleteTodosArea>
      <SFieldTitle className="fieldTitle">未完了のTODO</SFieldTitle>
      <SList>
        <SListItem>
          <SCheckbox type="checkbox" />
          <STodoName>TODOアプリ作成</STodoName>
          <SDeleteButton>削除</SDeleteButton>
        </SListItem>
        <SListItem>
          <SCheckbox type="checkbox" />
          <STodoName>React公式ドキュメント</STodoName>
          <SDeleteButton>削除</SDeleteButton>
        </SListItem>
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
