import SearchBar from "../SearchBar";
import "../../style/CallCreationPage.css";

const CallCreationPage = () => {

  const MainSelector = (key) => {
    const mainselect = document.getElementById(key)
    const selections = document.getElementsByClassName('selection')
    const arrayselections = Array.from(selections)
    arrayselections.map((selection) => (selection.checked = mainselect.checked))
  }

  return (
    <div>
      <div className="searcharea">
        <SearchBar />
      </div>
      <div className="Callsafespace">
        <div className="call-right">
          <div className="cardright">
            <h2
              style={{
                fontWeight: "600",
                fontSize: "27px",
                lineHeight: "33px",
                /* identical to box height */

                color: "#333333",
              }}
            >
              TATA Motors
            </h2>
            <h2
              style={{
                fontWeight: "bold",
                fontSize: "27px",
                lineHeight: "33px",
                /* identical to box height */

                color: "#358BEE",
              }}
            >
              Rs.1,560.80
            </h2>
            <p className="negative">-589.20 (-27.40%)</p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "28px",
                lineHeight: "34px",
                /* identical to box height */

                color: "#1153A9",
                borderBottom: "3px solid #1153A9",
              }}
            >
              Details
            </p>
            <div className="details">
              <p>
                <span className="detailheading">Open : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">High : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">Low : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">Close : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">ATP : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">Volume : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">LCL : </span>Rs.1,950.00
              </p>
              <p>
                <span className="detailheading">UCL : </span>Rs.1,950.00
              </p>
            </div>
          </div>
        </div>
        <div className="call-left">
          <div className="radio-options">
            <div className="radiobuttondiv">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Cash
              </label>
            </div>
            <div className="radiobuttondiv">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Future
              </label>
            </div>
            <div className="radiobuttondiv">
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              ></input>
              <label class="form-check-label" for="flexRadioDefault1">
                Options
              </label>
            </div>
          </div>
          <div className="cardleft">
            <form action="">
              <div className="radio-options">
                <div className="radiobuttondiv">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  ></input>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Buy
                  </label>
                </div>
                <div className="radiobuttondiv">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault2"
                  ></input>
                  <label class="form-check-label" for="flexRadioDefault1">
                    Sell
                  </label>
                </div>
              </div>
              <div className="callform" style={{ marginTop: "2.3em" }}>
                <label htmlFor="BuyPrice">Buy Price:</label>
                <input type="text" />
              </div>
              <div className="callform">
                <label htmlFor="TargetPrice">Target Price:</label>
                <input type="text" />
              </div>
              <div className="callform">
                <label htmlFor="StopLoss">Stop Loss:</label>
                <input type="text" />
              </div>

              {/* checkboxes */}

              <div className="callformtags">
                <label htmlFor="" className="maintag">
                  Tags:
                </label>
                <div className="tags">
                  <p className="editbutton">Edit</p>
                  <div class="form-check">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        class="form-check-input taginput"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                        className="tagslabels"
                      >
                        Short Term
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        class="form-check-input taginput"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                        className="tagslabels"
                      >
                        Long Term
                      </label>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <input
                        class="form-check-input taginput"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label
                        class="form-check-label"
                        for="flexCheckDefault"
                        className="tagslabels"
                      >
                        F & O
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* RadioButton */}

              <div className="callformtags">
                <label htmlFor="" className="maintag">
                  Risk:
                </label>
                <div className="risks">
                  <div class="form-check">
                    <div className="radio-options riskradio">
                      <div className="radiobuttondiv">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Low Risk
                        </label>
                      </div>
                      <div className="radiobuttondiv">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          Medium Risk
                        </label>
                      </div>
                      <div className="radiobuttondiv">
                        <input
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault2"
                        ></input>
                        <label class="form-check-label" for="flexRadioDefault1">
                          High Risk
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              {/* USERTYPES */}

              <div className="usertype">
                  <label htmlFor="useroption" className="userselectionlabel">User Type:</label>
                  <select name="useroption" id="usertype" placeholder="Select User">
                    <option value="null">Select User</option>
                    <option value="option 1">Option 1</option>
                    <option value="option 2">Option 2</option>
                    <option value="option 3">Option 3</option>
                  </select>
              </div>
              <div className="usertable">
                <SearchBar/>
                <div style={{marginTop:"0.9em"}}>
                  <table className="usernametable">
                    <tr className="head">
                      <th><input type="checkbox" name="SelectAll" id="SelectAll" onClick={(e) => MainSelector(e.target.id)}/></th>
                      <th className="username">UserName</th>
                      <th className="mobilenumber">Mobile Number</th>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="select" id="select" className="selection"/></td>
                      <td className="username">Jon Doe</td>
                      <td className="mobilenumber">42109853</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="select" id="select" className="selection"/></td>
                      <td className="username">Jon Doe</td>
                      <td className="mobilenumber">42109853</td>
                    </tr>
                    <tr>
                      <td><input type="checkbox" name="select" id="select" className="selection"/></td>
                      <td className="username">Jon Doe</td>
                      <td className="mobilenumber">42109853</td>
                    </tr>
                  </table>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCreationPage;
