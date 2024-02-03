import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/Todos/todoAction";

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const InputDiv = styled.div`
  height: 30px;
  width: 90%;
`;

const TodoInput = styled.input`
  width: 100%;
  height: 100%;
  font-size: larger;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  height: 35px;
  width: 35px;
  margin-left: 20px;
  font-size: x-large;
  background-color: #7077a1;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Input = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    dispatch(addTodo(input));
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <Container>
      <Wrapper>
        <InputDiv>
          <TodoInput
            type="text"
            placeholder="Add Task."
            value={input}
            onChange={(e) => {
              handleChange(e);
            }}
            onKeyDown={(e) => handleKeyPress(e)}
          ></TodoInput>
        </InputDiv>
        <Button
          onClick={(e) => {
            handleClick();
          }}
        >
          +
        </Button>
      </Wrapper>
    </Container>
  );
};

export default Input;
