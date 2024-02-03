import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { deleteTodo } from "../redux/Todos/todoAction";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import ToggleOffOutlinedIcon from "@mui/icons-material/ToggleOffOutlined";
import ToggleOnOutlinedIcon from "@mui/icons-material/ToggleOnOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

const Container = styled.div``;

const LI = styled.li`
  height: 35px;
  margin-top: 10px;
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

const Task = styled.p`
  margin-left: 5px;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
`;

const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: flex-end;
`;

const ToggleButton = styled.button`
  height: 30px;
  width: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #365486;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TrashButton = styled.button`
  height: 30px;
  width: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #d04848;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TickButton = styled.button`
  height: 30px;
  width: 40px;
  align-items: center;
  text-align: center;
  justify-content: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isDone }) => (isDone ? "#FFC47E" : "#527853")};
`;

const Div = styled.div`
  width: 130px;
  height: 35px;
`;

const TodoItem = ({ name, id }) => {
  const [toggle, setToggle] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const dispatch = useDispatch();

  const toggleStyle = {
    color: "white",
  };

  const tickStyle = {
    color: "white",
  };

  const trashStyle = {
    color: "white",
  };

  const handleClick = (e) => {
    setToggle(!toggle);
    setIsDone(!isDone);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container>
      <LI>
        <Task isDone={isDone}> {name}</Task>
        <ButtonContainer>
          <Div>
            <ToggleButton style={toggleStyle} onClick={(e) => handleClick()}>
              {toggle ? <ToggleOnOutlinedIcon /> : <ToggleOffOutlinedIcon />}
            </ToggleButton>
            <TrashButton
              onClick={(e) => {
                handleDelete(id);
              }}
            >
              <DeleteIcon style={trashStyle} />
            </TrashButton>
            <TickButton
              isDone={isDone}
              style={tickStyle}
              onClick={(e) => handleClick()}
            >
              {isDone ? <ClearOutlinedIcon /> : <DoneOutlinedIcon />}
            </TickButton>
          </Div>
        </ButtonContainer>
      </LI>
    </Container>
  );
};

export default TodoItem;
