import { MoreHoriz } from "@mui/icons-material";
import {
  Avatar,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { TableHeadComponent } from "componentsss";
import MenuComponent from "componentsss/menu/menu";
import { StyledWizardTableData } from "componentsss/style";
import { HeadCell } from "types";
import { AdminType } from "types/adminType";
import { stringAvatar } from "utils/globalUtils";

const headCells: HeadCell[] = [
  {
    id: "userName",
    align: "center",
    disablePadding: false,
    label: "Name",
  },
  {
    id: "email",
    align: "center",
    disablePadding: false,
    label: "Email",
  },
  {
    id: "status",
    align: "center",
    disablePadding: true,
    label: "Status",
  },
  {
    id: "action",
    align: "center",
    disablePadding: true,
    label: "Action",
  },
];

const actions = [
  { value: 1, label: "Edit" },
  { value: 3, label: "Block Staff" },
  { value: 3, label: "Remove Staff" },
];

interface IProps {
  data?: Array<AdminType>;
}

const StaffTable = ({ data }: IProps) => {
  return (
    <TableContainer
      sx={{
        width: "100%",
        overflowX: "auto",
        position: "relative",
        display: "block",
        maxWidth: "100%",
        "& td, & th": { whiteSpace: "nowrap" },
      }}
    >
      <Table aria-labelledby="tableTitle">
        <TableHeadComponent headCells={headCells} />
        <TableBody>
          {data && data?.map((i) => {
            return (
              <TableRow
                hover
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={i?.email}
              >
                <TableCell component="th" scope="row" align="left">
                  <Grid item container alignItems={"center"} gap={"1rem"}>
                    <Grid item xs={"auto"}>
                      <Avatar {...stringAvatar(i.name ?? "")} />
                    </Grid>
                    <StyledWizardTableData>{i.name}</StyledWizardTableData>
                  </Grid>
                </TableCell>
                <TableCell align="center">
                  <StyledWizardTableData>{i.email}</StyledWizardTableData>
                </TableCell>
                {/* <TableCell align="center">
                  <StyledWizardTableData>{i.phoneNumber}</StyledWizardTableData>
                </TableCell> */}
                <TableCell align="center">
                  <StyledWizardTableData>{i.status}</StyledWizardTableData>
                </TableCell>
                <TableCell align="center">
                  <MenuComponent
                    items={actions}
                    icon={<MoreHoriz />}
                    onClick={() => {}}
                  />
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default StaffTable;
