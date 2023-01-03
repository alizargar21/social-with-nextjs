import NavLink from "./NavLink";
const Navbar = () => {
  return (
    <div>
      <nav className="w-full h-16 center bg-black/80 drop-shadow-sm shadow-lg fixed  top-0 z-50">
        <NavLink />
      </nav>
    </div>
  );
};

export default Navbar;
