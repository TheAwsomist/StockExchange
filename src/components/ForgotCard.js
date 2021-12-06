const ForgotCard = () => {
  return (
    <div className="logincard">
      <div className="cardsafespace">
        <h3>Forgot Password</h3>
        <p className="statement">
          Enter your registered email below to receive password reset
          Instruction.
        </p>
        <form action="" className="loginform">
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="logininput"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="forgotunderbelly">
            <button className="loginbutton">Login</button>
          </div>
        </form>
        <p className="statement" style={{ fontSize: "20px",marginTop:"2.63em"}}>
          Did not receive the email? Check Your Spam Filter, or <br /> <a style={{fontWeight:"600",color:"#358BEE"}}>Resend Email</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotCard;
