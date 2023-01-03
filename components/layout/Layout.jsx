import Navbar from "./Navigation/Navbar";
const Layout = ({children}) => {
    return ( 
    <main className="bg-black w-full min-h-screen flex flex-col justify-center relative">
        <Navbar />
        {children}
    </main>
     );
}
 
export default Layout;