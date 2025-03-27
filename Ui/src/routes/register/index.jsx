import {
  LogoWrapper,
  Wrapper,
  Content,
  Title,
  SecondaryAction,
} from "./styles";
import { useApi } from "../../hooks/use-api";
import { useAppContext } from "../../context";
import { actions } from "../../constants/actions";
import { useFormik } from "formik";
import * as Yup from "yup";
import get from "lodash/get";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { useState } from "react";
import { Card } from "../../components/card";
import { Logo } from "../../components/logo";
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Error } from "../../components/error";

const RegisterRoute = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useAppContext();
  const { loading, postRequest } = useApi();
  const theme = useTheme();
  const [error, setError] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      setError(false);

      try {
        const response = await postRequest("/auth/register", { ...values });
        // TODO : check this
        if (response?.data === 200) {
          dispatch({
            type: actions.UPDATE_USER,
            payload: {
              details: response.data.user,
              token: response.data.token,
            },
          });
          navigate("/");
        }
      } catch (error) {
        const errorMessage = get(
          error,
          "response.data.message",
          "An error has occurred"
        );
        setError(errorMessage);
      }
    },
  });
  return (
    <Wrapper>
      <Card maxWidth={theme.sizes.md}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title> Create new account</Title>
        {error && <Error>{error}</Error>}
        <form>
          <Content>
            <Input
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              placeholder="Enter your name"
            />
            <Input
              id="email"
              type="email"
              name="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
              placeholder="Enter your Email"
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
              placeholder="Enter your Password"
            />
            <Button
              type="submit"
              onClick={formik.handleSubmit}
              isLoading={false}
            >
              Create an Account
            </Button>
          </Content>
        </form>
      </Card>
      <SecondaryAction to="/login">
        Already have an account? Login Now
      </SecondaryAction>
    </Wrapper>
  );
};
export default RegisterRoute;
