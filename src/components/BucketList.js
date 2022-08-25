import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BucketList = () => {
  const bucket_list = useSelector((state) => state.bucket.list);
  const navigate = useNavigate();

  return (
    <ListStyle>
      {bucket_list.map((list, index) => {
        return (
          <ItemStyle
            key={Math.random()}
            completed={list.completed}
            onClick={() => {
              navigate("/detail/" + index);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => (props.completed ? "#fff" : "#333")};
  background-color: ${(props) => (props.completed ? "#673ab7" : "aliceblue")};
`;

export default BucketList;
