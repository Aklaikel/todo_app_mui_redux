import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../actions";

function TodoTable({ setTodoId }) {
  const todolist = useSelector((state) => state.allReducers.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell> Title </TableCell>
              <TableCell> Task </TableCell>
              <TableCell> Due Date </TableCell>
              <TableCell> Update </TableCell>
              <TableCell> Delete </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              todolist.map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell> {todo.data.title} </TableCell>
                  <TableCell> {todo.data.task} </TableCell>
                  <TableCell> {todo.data.dueDate} </TableCell>
                  <TableCell>
                    <Link to="/">
                    <BorderColorIcon onClick={() => setTodoId(todo.id)} />
                    </Link>
                  </TableCell>
                  <TableCell>
                    <DeleteOutlineIcon onClick={() => dispatch(deleteTodo(todo.id))} />
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      <Link to="/">
        <Box
          component={Paper}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mt: 2,
            minHeight: "2rem",
          }}
        >
          <AddIcon />
          ADD TODO
        </Box>
      </Link>
    </div>
  );
}

export default TodoTable;
