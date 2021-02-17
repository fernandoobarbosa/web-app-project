import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  table: {
    minWidth: 450,
    marginTop: 20,
  },
});

export default function DenseTable({ userResponse, showTable, changeTask }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = useStyles();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChange = (event) => {
    console.log(event);
  };
  if (userResponse.tasks !== undefined)
    return (
      <Paper className={classes.root}>
        <TableContainer component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell variant="head">Task</TableCell>
                <TableCell>To Do</TableCell>
                <TableCell>In Progress</TableCell>
                <TableCell>Done</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userResponse.tasks
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <TableRow key={row._id}>
                    <TableCell component="td" scope="row">
                      {index + 1}
                    </TableCell>
                    <TableCell component="td" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell component="td" scope="row">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={row.toDo}
                            onChange={handleChange}
                            name="toDo"
                            value={true}
                          />
                        }
                      />
                    </TableCell>
                    <TableCell component="td" scope="row">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={row.inProgress}
                            onChange={handleChange}
                            name="inProgress"
                          />
                        }
                      />
                    </TableCell>
                    <TableCell component="td" scope="row">
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={row.done}
                            onChange={handleChange}
                            name="done"
                          />
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={userResponse.tasks.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    );

  return <Alert severity="error">There's no tasks!</Alert>;
}
