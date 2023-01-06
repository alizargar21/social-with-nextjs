import { useFormik } from "formik";
import Input from "../common/Input";
import * as Yup from "yup";
import {MdWavingHand} from "react-icons/md"
const Login = ({handleFormState}) => {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid Email Format")
      .required("Email is Required"),
    password: Yup.string().required("Password is Required"),
  });
  const onSubmit = async (values) => {
    const { email, password } = values;
    const userData = {
      email,
      password,
    };

    try {
      console.log(userData);
    } catch (error) {
      console.log(error);

    }
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: false,
    enableReinitialize: false,
  });
  return (
    <section className="center py-10 w-full">
      <form
        onSubmit={formik.handleSubmit}
        className="my-3 mt-1 flex h-[80%] w-[30%] flex-col items-center justify-start rounded-lg bg-gray-100 text-gray-800 shadow-2xl dark:bg-gray-700 dark:text-gray-200 md:min-w-[50%]  sm:min-w-[80%]"
      >
        <div className="center h-[40px] w-full rounded-tr-lg rounded-tl-lg bg-blue-600 text-gray-300 ">
          Login
        </div>

        <p className="center mt-4 ">
          Hey
          <span className="ml-2 text-yellow-500"><MdWavingHand /></span>
        </p>

        <div className="mx-2 flex flex-col   items-center">
          <div className="mt-2 w-[80%] rounded-lg bg-gray-200 p-2 text-xs italic text-gray-800 dark:bg-gray-600 dark:text-gray-300">
            <span>
              Besides registering, you can also test the template with test
              account information(email: test@info.com - Password: 12345678)
            </span>
          </div>
        </div>
        <div className="my-5 flex w-[80%] flex-col items-start justify-center">
          <Input formik={formik} name="email" label="Email" type="email" />

          <Input
            formik={formik}
            name="password"
            label="Password"
            type="password"
          />

          <button
            className="btn-primary text-md mt-4 w-full rounded-md bg-blue-600 py-1 font-roboto font-bold hover:bg-blue-500"
            type="submit"
            disabled={!formik.isValid}
          >
            Login
          </button>
          <a className="cursor-pointer center mx-auto mt-3" onClick={handleFormState}> already user ?</a>

        </div>
      </form>
    </section>
  );
};

export default Login;
