import { useAuth0 } from "@auth0/auth0-react";
/* import react from "react";
 */import "./Styling/profile.css";
 import "./Styling/Footer.css";
 import "./Styling/Header.css";
 import Header from "./Header";

function Profile() {
  const { user } = useAuth0();

  /* TODO: render information about the developers */
  return (
    <div className="profile">
            <Header />

      <img className="pic" src={user.picture} alt={user.name} />
      <h2>User name : {user.name}</h2>
      <p>Contact me at : {user.email}</p>
      <p>Nick name : {user.nickname}</p>
      <p>User ID : {user.sub}</p>

    </div>
  );
}

export default Profile;