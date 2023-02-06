import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import {useSelector, useDispatch}  from 'react-redux';
import { setToDoAction } from '../../store/actions/todoAction';

const StyledDiv = styled.div`
display: flex;
`

export const ToDo = () => {
   const dispatch = useDispatch();
   const toDo = useSelector(state=> state.toDo.toDo)
    const refInput = useRef();

  const addToDo = ()=>{
    dispatch(setToDoAction(refInput.current.value))
  }
  useEffect(()=>{
    console.log(toDo)
  },[toDo])

  return (
    <StyledDiv>
        <input type="text" ref={refInput} />
        <button onClick={addToDo}>add</button>
    </StyledDiv>
  )
}
