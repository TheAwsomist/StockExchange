import Navbar from "../Navbar";
import "../../style/Layout.css";
import CallCreationPage from "./CallCreationPage";

const Layout = () => {
    return ( 
        <>
        <div><Navbar/></div>
        <CallCreationPage/>
        </>
     );
}
 
export default Layout;