import { useState } from "react";
import { DataTableRow } from "../DataTable";

export const useTable = () => {
  const [rows, setRows] = useState<DataTableRow[]>([]);
  const [page, setPage] = useState(0);
  const [totalRows, setTotalRows] = useState(0);

  return { rows, page, totalRows, setRows, setPage, setTotalRows };
};
