import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { TableHeadComponent } from "componentsss";
import IconButtonComponent from "componentsss/iconButton/iconButton";
import { StyledWizardTableData } from "componentsss/style";
import { HeadCell } from "types";
import { PrivatePlaceResponse } from "types/privatePlaceType";
import { TableIconContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { EyeOutlined } from "@ant-design/icons";

const headCells: HeadCell[] = [
  {
    id: "placeName",
    align: "center",
    disablePadding: false,
    label: "Place Name",
  },
  {
    id: "ownerName",
    align: "center",
    disablePadding: false,
    label: "Owner Name",
  },
  {
    id: "location",
    align: "center",
    disablePadding: false,
    label: "Location",
  },
  {
    id: "cateogry",
    align: "center",
    disablePadding: true,
    label: "Cateogry",
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

interface IProps {
  data?: Array<PrivatePlaceResponse>;
}

const PrivatePlacesTable = ({ data }: IProps) => {
  const navigate = useNavigate();

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
          {Array.isArray(data) &&
            data?.map((i) => {
              return (
                <TableRow
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  key={i?.place?.placeId ?? "--"}
                >
                  <TableCell component="th" scope="row" align="left">
                    <Grid item container alignItems={"center"} gap={"1rem"}>
                      <StyledWizardTableData>
                        {i.place?.placeName ?? "--"}
                      </StyledWizardTableData>
                    </Grid>
                  </TableCell>
                  <TableCell align="center">
                    <StyledWizardTableData>
                      {i.place?.userEmail ?? "--"}
                    </StyledWizardTableData>
                  </TableCell>
                  <TableCell align="center">
                    <StyledWizardTableData>
                      {i.place?.longitude ?? "--"}
                    </StyledWizardTableData>
                  </TableCell>
                  <TableCell align="center">
                    <StyledWizardTableData>
                      {i.place?.categoryID ?? "--"}
                    </StyledWizardTableData>
                  </TableCell>
                  <TableCell align="center">
                    {i.place?.status ?? "--"}
                  </TableCell>
                  <TableCell>
                    <Grid item container justifyContent={"center"} gap={"1rem"}>
                      <TableIconContainer
                        item
                        container
                        width={"40px"}
                        height={"40px"}
                      >
                        <IconButtonComponent
                          icon={<EyeOutlined />}
                          onClick={() => {
                            navigate(`/private_places/${i.place.placeId}`);
                          }}
                        />
                      </TableIconContainer>
                    </Grid>
                  </TableCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PrivatePlacesTable;
