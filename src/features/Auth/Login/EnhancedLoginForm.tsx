import { withFormik } from "formik";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as Yup from "yup";
import { History } from "history";
import { AppThunk } from "../../../app/store";
import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_TOO_SHORT,
  EMAIL_NOT_LONG_ENOUGH,
  EMAIL_INVALID,
} from "../../../constants/formMessages";

import { login } from "../../../slices/authSlice";
import { LoginForm } from "./LoginForm";

interface IDispatchProps {
  login: (email: string, password: string, history: History) => AppThunk;
}

export interface EnhancedLoginFormValues {
  email: string;
  password: string;
}

export interface EnhancedLoginFormProps extends RouteComponentProps {
  email?: string;
  password?: string;
  login: (email: string, password: string, history: History) => void;
}
const EnhancedLoginForm = withFormik<
  EnhancedLoginFormProps,
  EnhancedLoginFormValues
>({
  mapPropsToValues: props => ({
    email: props.email ? props.email : "vaibhavgarg.exe@gmail.com",
    password: props.password ? props.password : "qwertyqwerty",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .min(3, EMAIL_NOT_LONG_ENOUGH)
      .max(255)
      .email(EMAIL_INVALID)
      .required(EMAIL_REQUIRED),
    password: Yup.string()
      .required(PASSWORD_REQUIRED)
      .min(6, PASSWORD_TOO_SHORT),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    const { login, history } = props;
    login(values.email, values.password, history);
    setSubmitting(false);
  },
  displayName: "LoginForm",
})(LoginForm);

const EnhancedLoginFormWithRouter = withRouter(EnhancedLoginForm);

export default connect<null, IDispatchProps>(null, { login })(
  EnhancedLoginFormWithRouter
);
