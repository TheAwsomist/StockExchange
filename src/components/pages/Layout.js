import Navbar from "../Navbar";
import SearchBar from "../SearchBar";
import "../../style/Layout.css";

const Layout = () => {
    return ( 
        <>
        <div><Navbar/></div>
        <div className="searcharea"><SearchBar/></div>
        </>
     );
}
 
export default Layout;