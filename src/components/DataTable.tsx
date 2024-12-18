"use client";

import {
  CSSProperties,
  ChangeEvent,
  MouseEvent,
  ReactElement,
  useState,
} from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { TableHead } from "@mui/material";
import { grey } from "@mui/material/colors";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export interface DataTableProps {
  columns: DataTableColumn[];
  data: DataTableRow[];
  totalRows: number;
  page: number;
  rowsPerPage: number;
  execute: (page: number, perPage: number) => void;
  // setPage: Dispatch<number>;
  // setRowsPerPage: Dispatch<number>;
}

export interface DataTableColumn {
  label: string;
  minWidth?: number;
  align?: "right" | "center" | "left";
  format?: (value: number) => string;
}

export interface DataTableRow {
  key: string;
  row: DataRowProps[];
}

export interface DataRowProps {
  value: string | number | ReactElement;
  align?: "right" | "center" | "left";
  style?: CSSProperties | undefined;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="primeira página"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="página anterior"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="próxima página"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="última página"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function DataTable({
  columns,
  data,
  page,
  rowsPerPage,
  totalRows,
  execute,
}: // setPage,
// setRowsPerPage,
DataTableProps) {
  const theme = useTheme();
  // Avoid a layout jump when reaching the last page with empty rows.
  const [actualPage, setActualPage] = useState(page);
  const [perPage, setPerPage] = useState(rowsPerPage);

  const emptyRows =
    actualPage > 0
      ? Math.max(0, (1 + actualPage) * rowsPerPage - totalRows)
      : 0;

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setActualPage(newPage);
    execute(newPage, perPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const perPage = +event.target.value;
    setPerPage(perPage);
    execute(actualPage, perPage);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="table" size="small">
        <TableHead sx={{ backgroundColor: grey, height: "60px" }}>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.label}
                align={column.align}
                style={{
                  minWidth: column.minWidth,
                  fontWeight: "bold",
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.key}>
              {row.row.map((value) => (
                <TableCell
                  key={Math.random().toString()}
                  style={value.style}
                  align={value.align}
                >
                  {value.value}
                </TableCell>
              ))}
            </TableRow>
          ))}
          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              labelRowsPerPage={"Quantidade por página"}
              colSpan={3}
              count={totalRows}
              rowsPerPage={perPage}
              page={actualPage}
              SelectProps={{
                inputProps: {
                  "aria-label": "quantidade por página",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
