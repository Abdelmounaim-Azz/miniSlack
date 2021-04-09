import { Title } from "../helpers/use-title";
const Signup = () => {
  return (
    <>
      <Title title="Slack:Connect with everyone." />

      <div class="signup-page">
        <div class="signup-page-top">
          <div className="login-page-logo logo">
            <span className="p-1">S</span>
            <span className="p-2">S</span>
            <span>Sla</span>
            <span>ck</span>
          </div>
          <button className="login">Log In</button>
        </div>
        <div className="container">
          <div className="signup-page-content m-auto">
            <div className="signup-page-content-left">
              <div className="content-left-images">
                <img src="cust1.jpg" alt="person love Slack" />
                <img src="cust2.jpg" alt="person love Slack" />
                <img src="cust3.jpg" alt="person love Slack" />
              </div>
              <h1>See for yourself why millions of people love Slack.</h1>
            </div>
            <div className="signup-page-content-right">
              <h3>Sign up for Slack, it's free</h3>
              <h4>Choose from two types of accounts:</h4>
              <form className="signup-page-form">
                <div className="input-group">
                  <input type="radio" name="checkbox" checked />
                  <div className="option">
                    <h3>Personal Account</h3>
                    <p></p>
                  </div>
                </div>
                <div className="input-group">
                  <input type="radio" name="checkbox" />
                  <div className="option">
                    <h3>Business Account</h3>
                    <p></p>
                  </div>
                </div>
                <button className="blue-btn">Continue</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
