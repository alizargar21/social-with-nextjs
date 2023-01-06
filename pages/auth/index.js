import { useState } from "react";
import Login from "../../components/form/Login";
import SignUp from "../../components/form/Signup";

const Auth = () => {
  const [formState, setFormState] = useState(true);
  const handleFormState = () => {
    setFormState(!formState);
  };
  return (
    <section className="min-h-screen w-full bg-black">
    
      <div>
        {formState ? (
          <SignUp handleFormState={handleFormState} />
        ) : (
          <Login handleFormState={handleFormState} />
        )}
      </div>
    </section>
  );
};

export default Auth;
