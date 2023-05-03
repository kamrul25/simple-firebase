import React, { useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.init";

const Login = () => {
  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  //   console.log(auth);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user, setUser] = useState(null);
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => console.log("Error", error));
  };

  const handleSignOut = () => {
    signOut(auth)
    .then(result =>{
        console.log(result)
        setUser(null)
    })
    .catch((error) => console.log("Error", error));
  };

  const handleGitHubSignIn = () =>{
    signInWithPopup(auth, githubProvider)
    .then(result =>{
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
    })
    .catch(error => console.log("Error", error))
  }
  return (
    <div>
      {/* user? sign out : sign in */}
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
        <button onClick={handleGoogleSignIn}>Login By Google</button>
        <button onClick={handleGitHubSignIn}>Login By GitHub</button>
        </>
      )}

      {user && (
        <div>
          <h2>User Name : {user.displayName}</h2>
          <p>Email : {user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
