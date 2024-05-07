import { Grid } from "@mui/material";
import { TextInput } from "componentsss";

interface IProps {
  values: any;
  onChange: (name: string, value: any) => void;
  errors: any;
}

const AdminForm = ({ onChange, values, errors }: IProps) => {
  return (
    <Grid item container gap={2}>
      <Grid item container>
        <TextInput
          label="Email"
          placeholder="example@example.com"
          value={values?.email}
          handleChange={(val) => onChange("email", val)}
          error={errors?.email}
          errorText={errors?.email}
        />
      </Grid>
      <Grid item container>
        <TextInput
          label="Name"
          placeholder="Full Name"
          value={values?.name}
          handleChange={(val) => onChange("name", val)}
          error={errors?.name}
          errorText={errors?.name}
        />
      </Grid>
      <Grid item container>
        <TextInput
          label="Password"
          placeholder="********"
          value={values?.password}
          handleChange={(val) => onChange("password", val)}
          error={errors?.password}
          errorText={errors?.password}
        />
      </Grid>
    </Grid>
  );
};
export default AdminForm;
