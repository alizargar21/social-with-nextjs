const Input = ({ label, formik, name, type = "text" }) => {
  return (
    <div className="group relative z-0 mt-6 w-full">
      <input
        // autoComplete="off"
        {...formik.getFieldProps(name)}
        type={type}
        name={name}
        id={name}
        className={
          formik.errors[name]
            ? "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-red-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-red-500"
            : "peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent py-2 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        }
        placeholder=" "
        required
      />
      {formik.errors[name] && formik.touched[name] && (
        <div className="mx-auto mt-2 text-center text-sm font-semibold italic text-red-500 duration-300">
          {formik.errors[name]}
        </div>
      )}

      <label
        htmlFor={name}
        className={
          formik.errors[name]
            ? "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-red-600 dark:text-gray-400 peer-focus:dark:text-red-600"
            : "absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 dark:text-gray-400 peer-focus:dark:text-blue-500"
        }
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
