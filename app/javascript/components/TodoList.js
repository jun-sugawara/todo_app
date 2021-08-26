import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled, { ThemeConsumer } from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

const SearchAndButton = styled.div`
  display: :flex;
  justify-content: space-between;
  align-items: center;
`
const SearchForm = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`

const RemoveAllButton = styled.button`
  width: 16%;
  height: 40px;
  background: #f54242;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`

const TodoName = styled.span`
  font-size: 27px;
  ${({ is_completed }) => is_completed && `
    opacity: 0.4;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-size: 25px;
`

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`

const EditButton = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`
function TodoList() {
  const [todos, setTodos] = useState([])
  const [searchName, setSearchName] = useState('')

  useEffect(() => {
    axios.get('/api/v1/todos.json')
    .then(resp => {
      console.log(resp.data)
      setTodos(resp.data);
    })
    .catch(e => {
      console.log(e);
    })
  }, [])

  const removeAllTodos = () => {
    const sure window.confirm('Are you sure?');
    if (sure) {
      axios.delete('/api/v1/todos/destroy_all')
      .then(resp => {
        setTodos([])
      })
      .catch(e => {
        console.log(e)
      })
    }
  }

  return (
    <div>
      TodoList
    </div>
  )
}

export default TodoList
