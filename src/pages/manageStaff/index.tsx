import { Box } from "@mui/material";
import { TableContainer } from "componentsss/style";
import AboveHeaderComponent from "componentsss/AboveTableComponent";
import StaffTable from "./table";
import { useAdminsQuery } from "data/userApi";
import { useState } from "react";
import ModalComponent from "componentsss/transitionsModal";

const StaffPage = () => {
  const { data } = useAdminsQuery();
  const [isAdd, setIsAdd] = useState<boolean>(false);

  return (
    <Box>
      <AboveHeaderComponent
        title="Administrators"
        buttonTitle="Add New Admin"
        onClick={() => setIsAdd(true)}
      />
      <TableContainer item container marginY={"3rem"}>
        <StaffTable data={data} />
      </TableContainer>

      {isAdd && (
        <ModalComponent
          isOpen={isAdd}
          onClose={() => setIsAdd(false)}
          title="Add New Admin"
        >
          <>
            Hello World
          </>
        </ModalComponent>
      )}
    </Box>
  );
};
export default StaffPage;
