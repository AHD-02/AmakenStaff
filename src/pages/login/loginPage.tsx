import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Formik, useFormik } from "formik";

import {
  Button,
  FormHelperText,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useLoginMutation } from "data/userApi";
import { signInInitialValues, signInValidationSchema } from "types";
import { getIsAuthenticated } from "state";
import { setIsLoading } from "state/app";
import { setTokens } from "state/user";
import { useAppDispatch, useTypedSelector } from "state/store";
import AuthWrapper from "componentsss/auth/AuthWrapper";
import IconButton from "componentsss/@extended/IconButton";
import AnimateButton from "componentsss/@extended/AnimateButton";

const Login = () => {
  const [
    signIn,
    { data, isSuccess, error, isLoading: isSignInInProgress, isError },
  ] = useLoginMutation();


  const formik = useFormik({
    initialValues: signInInitialValues,
    validationSchema: signInValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: (values) => {
      signIn({ email: values.email, password: values.password });
    },
  });

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const isAuthenticated = useTypedSelector(getIsAuthenticated);
  const { submitForm } = formik;

  useEffect(() => {
    function handleKeyDown(event: { key: string }) {
      if (event.key === "Enter") {
        submitForm();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (data?.token) {
      dispatch(
        setTokens({
          refreshToken: "data.refreshToken",
          accessToken: data.token,
        })
      );
    }
  }, [data, error]);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    if (isSignInInProgress) {
      dispatch(setIsLoading(true));
    } else {
      dispatch(setIsLoading(false));
    }
  }, [isSuccess, isError, isSignInInProgress]);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="baseline"
            sx={{ mb: { xs: -0.5, sm: 0.5 } }}
          >
            <Typography variant="h3">{"Lets Sign You In"}</Typography>
          </Stack>
        </Grid>

        <Grid item xs={12}>
          <Formik
            initialValues={signInInitialValues}
            validationSchema={signInValidationSchema}
            onSubmit={async (values) => {
              signIn({ email: values.email, password: values.password });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values,
            }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="email-login">{"email"}</InputLabel>
                      <OutlinedInput
                        id="email-login"
                        type="email"
                        value={values.email}
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        fullWidth
                        error={Boolean(touched.email && errors.email)}
                      />
                    </Stack>
                    {touched.email && errors.email && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-email-login"
                      >
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Stack spacing={1}>
                      <InputLabel htmlFor="password-login">
                        {"Password"}
                      </InputLabel>
                      <OutlinedInput
                        fullWidth
                        error={Boolean(touched.password && errors.password)}
                        id="-password-login"
                        type={showPassword ? "text" : "password"}
                        value={values.password}
                        name="password"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                              edge="end"
                              color="secondary"
                            >
                              {showPassword ? (
                                <EyeOutlined />
                              ) : (
                                <EyeInvisibleOutlined />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </Stack>
                    {touched.password && errors.password && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-password-login"
                      >
                        {errors.password}
                      </FormHelperText>
                    )}
                  </Grid>

                  {/* {isError && (
                    <Grid item xs={12}>
                      <FormHelperText error>
                        {t("signInPage.authError")}
                      </FormHelperText>
                    </Grid>
                  )} */}
                  <Grid item xs={12}>
                    <AnimateButton>
                      <Button
                        disableElevation
                        disabled={isSubmitting}
                        fullWidth
                        size="large"
                        type="submit"
                        variant="contained"
                        color="primary"
                      >
                        {"Sign In"}
                      </Button>
                    </AnimateButton>
                  </Grid>
                </Grid>
              </form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Login;
