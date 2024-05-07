import { Box } from "@mui/material";
import { TableContainer } from "componentsss/style";
import AboveHeaderComponent from "componentsss/AboveTableComponent";
import StaffTable from "./table";
import { useAdminsQuery, useCreateAdminMutation } from "data/userApi";
import { useState } from "react";
import ModalComponent from "componentsss/transitionsModal";
import AdminForm from "./adminForm";
import { useFormik } from "formik";
import {
  adminInitialValue,
  adminRequestValidationSchema,
} from "types/adminType";

const StaffPage = () => {
  const { data } = useAdminsQuery();
  const [isAdd, setIsAdd] = useState<boolean>(false);
  const [createAdmin] = useCreateAdminMutation();

  const formik = useFormik({
    initialValues: adminInitialValue,
    validationSchema: adminRequestValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      createAdmin(values)
        .unwrap()
        .then(() => {
          setIsAdd(false);
        });
    },
  });

  const { values, setFieldValue, errors, submitForm } = formik;

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
          primaryButtonTitle="Create"
          primaryButtonAction={submitForm}
        >
          <AdminForm values={values} onChange={setFieldValue} errors={errors} />
        </ModalComponent>
      )}
    </Box>
  );
};
export default StaffPage;
