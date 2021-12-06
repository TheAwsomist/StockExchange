const LoginCard = () => {
    return ( 
        <div className="logincard">
            <div className="cardsafespace">
                <h3>Login</h3>
                <form action="" className="loginform">
                    <div className="email">
                        <label htmlFor="email">Email</label>
                        <input type="text" className="logininput" placeholder="Enter Your Email"/>
                    </div>
                    <div className="password">
                        <label htmlFor="email">Password</label>
                        <input type="password" className="logininput" placeholder="Enter Your Password"/>
                    </div>
                    <div className="underbelly">
                        <div className="forgor">
                            <p>Forgot Password?</p>
                        </div>
                        <button className="loginbutton">Login</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default LoginCard;