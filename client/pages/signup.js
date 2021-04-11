import { Title } from "../helpers/use-title";
import Link from "next/link";
import { useState, useEffect } from "react";
const Signup = () => {
  const [username, setUserName] = useState("");
  useEffect(() => {
    sessionStorage.setItem("username", username);
  }, [username]);
  return (
    <>
      <Title title="Slack:Connect with everyone." />

      <div class="signup-page">
        <div class="signup-page-top">
          <div className="login-page-logo logo">
            <Link href="/">
              <a>
                <span className="p-1">S</span>
                <span className="p-2">S</span>
                <span>Sla</span>
                <span>ck</span>
              </a>
            </Link>
          </div>
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
              <h3>Join Slack, it's free</h3>
              <h4>Choose your username:</h4>
              <form className="login-page-form">
                <div className="input-group">
                  <input
                    type="text"
                    class="form-login-input"
                    placeholder="Enter username"
                    value={username}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
                  />
                </div>
                <Link href="http://localhost:5000/chat.html">
                  <a target="_blank">
                    <input
                      className="form-signup-btn signup"
                      type="button"
                      value="Start Messaging"
                    />
                  </a>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
