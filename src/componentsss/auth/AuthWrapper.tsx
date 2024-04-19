import { ReactNode } from "react";
import { Grid } from "@mui/material";
import AuthCard from "./AuthCard";

interface Props {
  children: ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
  return (
    <Grid item container xs={12} sx={{ minHeight: "100vh" }}>
      <Grid item container xs={12} height="100vh">
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            minHeight: {
              xs: "calc(100vh - 210px)",
              sm: "calc(100vh - 134px)",
              md: "calc(100vh - 112px)",
            },
          }}
        >
          <Grid item>
            <AuthCard>{children}</AuthCard>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default AuthWrapper;
