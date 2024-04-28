import { Box } from "@mui/material";
import { TableContainer } from "componentsss/style";
import AboveHeaderComponent from "componentsss/AboveTableComponent";
import PrivatePlacesTable from "./table";

const PrivatePlacesPage = () => {
  return (
    <Box>
      <AboveHeaderComponent
        title="Administrators"
        buttonTitle="Add New Admin"
        onClick={() => {}}
      />
      <TableContainer item container marginY={"3rem"}>
        <PrivatePlacesTable data={places} />
      </TableContainer>
    </Box>
  );
};
export default PrivatePlacesPage;

const places = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    phoneNumber: "+1234567890",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    status: "inactive",
    phoneNumber: "+1987654321",
  },
  {
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    status: "active",
    phoneNumber: "+1122334455",
  },
  {
    name: "Bob Brown",
    email: "bob.brown@example.com",
    status: "active",
    phoneNumber: "+1555666777",
  },
  {
    name: "Emily Davis",
    email: "emily.davis@example.com",
    status: "inactive",
    phoneNumber: "+1444333222",
  },
];
