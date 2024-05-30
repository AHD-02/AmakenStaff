import { Box } from "@mui/material";
import { TableContainer } from "componentsss/style";
import AboveHeaderComponent from "componentsss/AboveTableComponent";
import PrivatePlacesTable from "./table";
import { usePlacesQuery } from "data/privatePlace";

const PrivatePlacesPage = () => {
  const {data} = usePlacesQuery();

  return (
    <Box>
      <AboveHeaderComponent title="Private Places" />
      <TableContainer item container marginY={"3rem"}>
        <PrivatePlacesTable data={data} />
      </TableContainer>
    </Box>
  );
};
export default PrivatePlacesPage;
