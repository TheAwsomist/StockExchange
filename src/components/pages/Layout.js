import Navbar from "../Navbar";
import "../../style/Layout.css";
import CallCreationPage from "./CallCreationPage";
import Orders from "./Orders";
import Executed from "./Executed";

const Layout = ({children}) => {
    return ( 
        <>
        <div><Navbar/></div>
        <main>{children}</main>
        {/* <Orders/> */}
        {/* <Executed/> */}
        </>
     );
}
 
export default Layout;