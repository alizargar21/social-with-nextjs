import Link from "next/link";
const NavLink = () => {
  return (
    <ul className="center w-full text-white  ">
      <Link href={"/"}>
        <li className="md:text-md  font-arial mx-9  italic md:mx-6  sm:mx-4">
          Home
        </li>
      </Link>
      <Link href={"/auth"}>
        <li className="md:text-md  font-arial mx-9  italic md:mx-6  sm:mx-4">
          Sign Up
        </li>
      </Link>
      <li className="md:text-md  font-arial mx-9  italic md:mx-6  sm:mx-4">
        My Posts
      </li>
      <Link href={"/users"}>
        <li className="md:text-md  font-arial mx-9  italic md:mx-6  sm:mx-4">
          Users
        </li>
      </Link>
    </ul>
  );
};

export default NavLink;
