import "../../style/Orders.css";

const Orders = () => {

    
    const MainSelector = (key) => {
        const mainselect = document.getElementById(key)
        const selections = document.getElementsByClassName('selection')
        const arrayselections = Array.from(selections)
        arrayselections.map((selection) => (selection.checked = mainselect.checked))
      }

    return ( 
    <div>
        <div className="OrdersPage">
            <div className="tableoptions">
                <button>Executed</button>
                <div className="filters">
                    <div className="filtericon"></div>
                    <h4>Filters</h4>
                </div>
            </div>
            <div>
                <table>
                    <tr className="tableheading">
                        <th><input type="checkbox" name="all" id="all" onClick={(e) => MainSelector(e.target.id)}/> All</th>
                        <th>Mobile No.</th>
                        <th>Stock Name</th>
                        <th>Current Price</th>
                        <th>Buy Price</th>
                        <th>Sell Price</th>
                        <th>Status</th>
                        <th>Qnt.</th>
                        <th>Total Amount</th>
                        <th>Time</th>
                    </tr>
                    <tr className="tablerow">
                        <td><input type="checkbox" name="selection1" id="" className="selection"/> Alena Kenter</td>
                        <td>+12842918715</td>
                        <td className="stockname">TATA Motors</td>
                        <td><StockDirection positive={true} number={1560.80}/></td>
                        <td className="fancyentry">₹1,550.60</td>
                        <td className="fancyentry">₹1,680.60</td>
                        <td className="ordered">Ordered</td>
                        <td className="quantity">10</td>
                        <td className="fancyentry">₹15,600.80</td>
                        <td className="date">25 Sep. 2021 <br />12:37 PM</td>
                    </tr>
                    <tr className="tablerow">
                        <td><input type="checkbox" name="selection1" id="" className="selection"/> Alena Kenter</td>
                        <td>+12842918715</td>
                        <td className="stockname">TATA Motors</td>
                        <td><StockDirection positive={true} number={1560.80}/></td>
                        <td className="fancyentry">₹1,550.60</td>
                        <td className="fancyentry">₹1,680.60</td>
                        <td className="ordered">Ordered</td>
                        <td className="quantity">10</td>
                        <td className="fancyentry">₹15,600.80</td>
                        <td className="date">25 Sep. 2021 <br />12:37 PM</td>
                    </tr>
                    <tr className="tablerow">
                        <td><input type="checkbox" name="selection1" id="" className="selection"/> Alena Kenter</td>
                        <td>+12842918715</td>
                        <td className="stockname">TATA Motors</td>
                        <td><StockDirection positive={true} number={1560.80}/></td>
                        <td className="fancyentry">₹1,550.60</td>
                        <td className="fancyentry">₹1,680.60</td>
                        <td className="ordered">Ordered</td>
                        <td className="quantity">10</td>
                        <td className="fancyentry">₹15,600.80</td>
                        <td className="date">25 Sep. 2021 <br />12:37 PM</td>
                    </tr>
                </table>
            </div>
        </div>
    </div> );
}

const StockDirection = ({positive,number}) => {
    return ( <p className={positive?"positive":"negative"} style={{margin:"0"}}>{positive?"↑":"↓"} {number}</p> );
}

 
 
export default Orders;