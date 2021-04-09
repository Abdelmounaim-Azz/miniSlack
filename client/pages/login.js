import { Title } from "../helpers/use-title";
import Link from "next/link";

const Login = () => {
  return (
    <>
      <Title title="Slack:Connect with everyone." />
      <div className="login-page">
        <div className="login-page-content">
          <div className="login-page-logo logo">
            <span className="p-1">S</span>
            <span className="p-2">S</span>
            <span>Sla</span>
            <span>ck</span>
          </div>
          <form className="login-page-form">
            <input
              type="text"
              className="form-login-input"
              placeholder="Enter Email"
            />
            <input
              type="password"
              className="form-login-input"
              placeholder="Enter Password"
            />
            <input type="button" className="form-login-btn" value="Log In" />
            <a href="#" className="form-login-link">
              Having trouble logging in?
            </a>
            <span>or</span>
            <Link href="/signup">
              <input
                type="button"
                className="form-signup-btn signup"
                value="Sign Up"
              />
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
