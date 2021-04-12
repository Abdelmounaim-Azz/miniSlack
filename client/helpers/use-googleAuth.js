import { useGoogleLogin } from "react-google-login";
import { useGoogleLogout } from "react-google-login";
import { useRouter } from "next/router";
import { refreshTokenSetup } from "./use-refreshToken";

const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;

export function Login() {
  const router = useRouter();
  const onSuccess = (res) => {
    localStorage.setItem("username", res.profileObj.name);
    localStorage.setItem("avatar", res.profileObj.imageUrl);
    refreshTokenSetup(res);
    router.push("/slack-it");
  };

  const onFailure = (res) => {
    console.log("Login failed");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <button onClick={signIn} className="button-google">
      <img src="/google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign in with Google</span>
    </button>
  );
}

export function Logout() {
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <button onClick={signOut} className="button-google">
      <img src="google.svg" alt="google login" className="icon"></img>

      <span className="buttonText">Sign out</span>
    </button>
  );
}
