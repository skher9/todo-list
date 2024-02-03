import React, { useState } from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styled from "styled-components";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Container = styled.div`
  height: 65%;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const CategoriesDiv = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;

const ButtonDiv = styled.div`
  flex: 1;
  height: 90%;
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  height: 35px;
  width: 100%;
  background-color: #7077a1;
  font-size: 15px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const SearchDiv = styled.div`
  flex: 2;
  height: 90%;
  width: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Input = styled.input`
  height: 25px;
  margin-left: 30%;
  &:focus {
    outline: none;
  }
`;

const SearchBtn = styled.button`
  margin-left: 5px;
  height: 30px;
  background-color: #7077a1;
  border-radius: 10px;
  border: none;
  cursor: pointer;
`;

const FilterDiv = styled.div`
  flex: 1;
  height: 90%;
  width: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Filter = styled.div`
  margin-left: 10px;
  height: 20px;
  background-color: white;
  width: 65%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  margin-top: 20px;
`;

const DefaultBtn = styled.button`
  height: 20px;
  background-color: white;
  width: 100%;
  border: 1px solid;
`;

const FilterBtn = styled.button`
  height: 20px;
  background-color: white;
  width: 65%;
  border: 1px solid;
  margin-left: 10px;
`;

const FilterBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const Todo = () => {
  const [filter, setFilter] = useState(false);

  const iconStyle = {
    color: "white",
  };

  const list = useSelector((state) => state.list);

  const handleFilter = () => {
    setFilter(!filter);
  };

  return (
    <Container>
      <CategoriesDiv>
        <FilterDiv>
          <Filter>
            <DefaultBtn onClick={(e) => handleFilter(e)}>Default</DefaultBtn>
          </Filter>
          <FilterBtnContainer show={filter}>
            <FilterBtn>Completed</FilterBtn>
            <FilterBtn>Incomplete</FilterBtn>
          </FilterBtnContainer>
        </FilterDiv>
        <ButtonDiv>
          <Button>Mark All Completed</Button>
        </ButtonDiv>
        <SearchDiv>
          <Input placeholder="Search Todos."></Input>
          <SearchBtn style={iconStyle}>
            <SearchOutlinedIcon />
          </SearchBtn>
        </SearchDiv>
      </CategoriesDiv>
      <Wrapper>
        {list.map((item) => {
          return <TodoItem name={item.name} id={item.id} />;
        })}
      </Wrapper>
    </Container>
  );
};

export default Todo;
