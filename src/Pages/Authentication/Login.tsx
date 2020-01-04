import React from 'react';
// import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';

interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form className="av-tooltip tooltip-label-bottom">
      <div className="form-group has-float-label">
        <label>Email</label>
        <Field type="email" name="email" className="form-control" />
        {touched.email && errors.email && <div>{errors.email}</div>}
      </div>
      <div className="form-group has-float-label">
        <label>Password</label>
        <Field type="password" name="password" className="form-control" />
        {touched.password && errors.password && <div>{errors.password}</div>}
      </div>

      <div className="d-flex justify-content-end align-items-center">
        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary btn-lg"
        >
          Login
        </button>
      </div>
    </Form>
  );
};

interface LoginformProps {
  intitialEmail?: string;
  message: string;
}

const Loginform = withFormik<LoginformProps, FormValues>({
  mapPropsToValues: props => {
    return {
      email: props.intitialEmail || '',
      password: ''
    };
  },
  //   validate: (values: FormValues) => {
  //     let errors: FormikErrors = {};
  //     if (!values.email) {
  //       errors.email = 'Required';
  //     } else if (!isValidEmail(values.email)) {
  //       errors.email = 'Invalid email address';
  //     }
  //   },
  handleSubmit: values => {
    // do something
  }
})(InnerForm);

const Login = () => {
  return (
    <div className="mx-auto my-auto col-12 col-md-10">
      <div className="auth-card card">
        <div className="position-relative image-side">
          <p className="text-white h2">Managing Store made easy!</p>
          <p>
            Use your store credentials to login <br />
          </p>
        </div>
        <div className="form-side">
          <div className="d-flex flex-row align-items-center mb-4">
            <img
              src="https://res.cloudinary.com/reeversedev/image/upload/v1562266145/Grommerce_dtdki6.jpg"
              alt="Grommerce"
              height="30"
            />
            <h4 className="mb-0 ml-2">Grommerce</h4>
          </div>

          <div className="card-title">
            <span>Login</span>
          </div>
          <Loginform message="Something went wrong" />
        </div>
      </div>
    </div>
  );
};

export default Login;
