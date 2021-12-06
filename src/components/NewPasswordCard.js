const NewPasswordCard = () => {
  return (
    <div className="logincard">
      <div className="cardsafespace">
        <h3>Forgot Password</h3>
        <p className="statement" style={{textAlign:"start",width:"70%"}}>
            Your new password Must be different
            From your previous password.
        </p>
        <form action="" className="loginform">
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="logininput"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="password">
            <label htmlFor="confirmed_password">Confirmed Password</label>
            <input
              type="password"
              className="logininput"
              placeholder="Enter Your Password"
            />
          </div>
          <div className="forgotunderbelly">
            <button className="loginbutton">Reset Password</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPasswordCard;
