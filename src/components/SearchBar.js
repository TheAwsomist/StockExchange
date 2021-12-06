import "../style/SearchBar.css"

const SearchBar = () => {
    return ( 
        <div className="search">
            <div className="searchicon"></div>
            <input type="text"  placeholder="Search for anything"/>
            <div className="crossicon"></div>
        </div>
     );
}
 
export default SearchBar;