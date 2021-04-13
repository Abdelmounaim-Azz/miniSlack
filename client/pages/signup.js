import { Title } from "../helpers/use-title";
import Link from "next/link";
import { Login } from "../helpers/use-googleAuth";

const Signup = () => {
  return (
    <>
      <Title title="Slack:Connect with everyone." />

      <div className="signup-page">
        <div className="signup-page-top">
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
              <h4>Your data is not stored anywhere.</h4>
              <Login />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Signup;
