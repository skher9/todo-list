import React from "react";
import Input from "./Input";
import Todo from "./Todo";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  height: 500px;
  width: 900px;
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  background-color: #c9d7dd;
`;

const Header = styled.div``;

const Heading = styled.h1``;

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Heading>PERSONAL TODO APP</Heading>
        </Header>
        <Input />
        <Todo />
      </Wrapper>
    </Container>
  );
};

export default Home;
