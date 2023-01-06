import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup";
const SignUp = ({handleFormState}) => {

      const initialValues = {
            name: "",
            email: "",
            phoneNumber: "",
            password: "",
            passwordConfirm: "",
          };
          const validationSchema = Yup.object({
            name: Yup.string().required("Name is Required"),
            email: Yup.string()
              .email("Invalid Email Format")
              .required("Email is Required"),
            phoneNumber: Yup.string()
              .required("Phone Number is Required")
              .matches(/^[0-9]{11}/, "Invalid Phone Number"),
            password: Yup.string().required("Password is Required"),
            passwordConfirm: Yup.string()
              .required("Password is Required")
              .oneOf([Yup.ref("password"), null], "Password Must Match"),
          });

      const onSubmit = async (values) => {
            const { name, email, password, phoneNumber, passwordConfirm } =
              values;
            const userData = {
              name,
              email,
              phoneNumber,
              password,
              passwordConfirm,
            };
        
            console.log(userData);
          };
        
          const formik = useFormik({
            initialValues,
            onSubmit,
            validationSchema,
            // validateOnBlur: true,
            validateOnMount: true,
            enableReinitialize: true,
          });
  return (
    <section className=" center flex-col ">
      <form
        className="my-10 flex h-[80%] w-[30%] flex-col items-center justify-start rounded-lg bg-white text-gray-800  shadow-2xl dark:bg-gray-700 dark:text-gray-200 md:min-w-[50%] sm:min-w-[80%]  "
        onSubmit={formik.handleSubmit}
      >
        <div className="center h-10  w-full rounded-tl-lg rounded-tr-lg bg-green-500 text-xl text-gray-200 ">
          Sign Up
        </div>
        <div className="flex w-[80%] flex-col items-start justify-center">
          <Input formik={formik} name="name" label="Name" />
          <Input formik={formik} name="email" label="Email" type="email" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="Phone Number"
            type="tel"
          />
          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />
          <Input
            formik={formik}
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
          />

          <button
            className={
              !formik.isValid
                ? "my-5 w-full cursor-not-allowed rounded-md bg-gray-500 py-1 font-Ubuntu text-sm font-bold text-gray-300"
                : "my-5 w-full rounded-md bg-green-500 py-1 font-Ubuntu  text-sm font-bold text-white    "
            }
            disabled={!formik.isValid}
            type="submit"
          >
            SIGN UP
          </button>
          <a className="cursor-pointer center mx-auto mb-3" onClick={handleFormState}> already user ?</a>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
