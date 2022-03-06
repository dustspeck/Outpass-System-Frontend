import { withFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { AppThunk } from "../../../app/store";
import {
  EMAIL_REQUIRED,
  PASSWORD_REQUIRED,
  PASSWORD_TOO_SHORT,
  EMAIL_NOT_LONG_ENOUGH,
  EMAIL_INVALID,
  ADDRESS_REQUIRED,
  DAYS_REQUIRED,
  DATE_REQUIRED,
  DATE_INVALID,
  TRANSPORT_REQUIRED,
  REASON_REQUIRED,
  PARENT_CONTACT_REQUIRED,
  END_CANNOT_BE_BEFORE_START,
  REASON_MAX_LENGTH,
} from "../../../constants/formMessages";

// import { login } from "../../../slices/authSlice";
import { AddOutpassForm } from "./AddOutpassForm";

interface IDispatchProps {
  // login: (email: string, password: string, history: History) => AppThunk;
}

export interface EnhancedAddOutpassFormValues {
  from: Date;
  to: Date;
  address: string;
  reason: string;
  transport: string;
  isParentConsent: boolean;
}

export interface EnhancedAddOutpassFormProps {
  // login: (email: string, password: string, history: History) => void;
}

const EnhancedAddOutpassForm = withFormik<
  EnhancedAddOutpassFormProps,
  EnhancedAddOutpassFormValues
>({
  mapPropsToValues: props => ({
    from: new Date(),
    to: new Date(),
    address: "",
    reason: "",
    transport: "",
    isParentConsent: false,
  }),
  validationSchema: Yup.object().shape({
    from: Yup.date().required(DATE_REQUIRED).min(new Date(), DATE_INVALID),
    to: Yup.date()
      .min(Yup.ref("from"), END_CANNOT_BE_BEFORE_START)
      .required(DATE_REQUIRED),
    address: Yup.string().required(ADDRESS_REQUIRED),
    reason: Yup.string().required(REASON_REQUIRED).max(50, REASON_MAX_LENGTH),
    transport: Yup.string().required(TRANSPORT_REQUIRED),
    isParentConsent: Yup.boolean().required(PARENT_CONTACT_REQUIRED),
  }),
  handleSubmit: (values, { setSubmitting, props }) => {
    console.log(values);
  },
  displayName: "AddOutpassForm",
})(AddOutpassForm);

export default connect<null, IDispatchProps>(null, {})(EnhancedAddOutpassForm);
