import React from "react";
import { useRef } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import BucketList from "./components/BucketList";
import Detail from "./components/Detail";
import NotFound from "./components/NotFound";
import { createBucket } from "./redux/modules/bucket";

const App = () => {
  const text = useRef(null);
  const dispatch = useDispatch();

  const addBucketList = () => {
    dispatch(createBucket(text.current.value));
  };
  return (
    <div className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <Routes>
          <Route path="/" element={<BucketList />} />
          <Route path="/detail/:index" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>

      <Input>
        <input type="text" ref={text} />
        <button onClick={addBucketList}>추가하기</button>
      </Input>
    </div>
  );
};

const Input = styled.div`
  max-width: 350px;
  min-height: 10vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  background-color: #fff;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
  border: 1px dotted #ddd;
`;

export default App;
