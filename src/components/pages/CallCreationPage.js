import SearchBar from "../SearchBar";
import "../../style/CallCreationPage.css";

const CallCreationPage = () => {
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
          <div className="cardleft"></div>
        </div>
      </div>
    </div>
  );
};

export default CallCreationPage;
