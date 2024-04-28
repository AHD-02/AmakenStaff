import { Box } from "@mui/material";
import { TableContainer } from "componentsss/style";
import AboveHeaderComponent from "componentsss/AboveTableComponent";
import EventsTable from "./table";

const EventsPage = () => {
  return (
    <Box>
      <AboveHeaderComponent
        title="Events"
        buttonTitle="Add New Event"
        onClick={() => {}}
      />
      <TableContainer item container marginY={"3rem"}>
        <EventsTable data={events} />
      </TableContainer>
    </Box>
  );
};
export default EventsPage;

const events = [
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
