import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, EDIT_TODO, SET_VISIBILITY_FILTER, CLEAR_COMPLETED } from './todoTypes';

export const addTodo = (text) =>({
    type:ADD_TODO,
    payload:text,
})

export const deleteTodo = (text) =>({
    type:DELETE_TODO,
    payload:text,
})

export const toggleTodo = (text) =>({
    type:TOGGLE_TODO,
    payload:text,
})

export const editTodo = (text) =>({
    type:EDIT_TODO,
    payload:text,
})

export const setVisibilityTodo = (text) =>({
    type:SET_VISIBILITY_FILTER,
    payload:text,
})

export const clearTodo = (text) =>({
    type:CLEAR_COMPLETED,
    payload:text,
})

