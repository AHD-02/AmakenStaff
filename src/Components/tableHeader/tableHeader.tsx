import { TableHead, TableRow, TableCell } from "@mui/material";
import { HeadCell } from "types";


type IProps = {
  headCells: HeadCell[];
};

const TableHeadComponent = ({ headCells }: IProps) => {
  return (
    <TableHead>
      <TableRow>
        {headCells?.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
          >
            {headCell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
export default TableHeadComponent;
