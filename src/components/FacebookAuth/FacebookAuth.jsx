import React, { useEffect, useState } from "react";
import { FacebookLoginButton } from "react-social-login-buttons";
import { LoginSocialFacebook } from "reactjs-social-login";
import FacebookLogin from "react-facebook-login";

const FacebookAuth = ({ accessToken }) => {
  // curl -i -X GET "https://graph.facebook.com/v19.0/user_id/accounts?access_token=user_access_token"
  const baseUrl = "https://graph.facebook.com/v12.0";

  const [userdata, setUserData] = useState({});
  const [pageData, setPageData] = useState({});

  console.log(userdata);


  const getPage = async (accessToken, id) => {
    console.log(accessToken);
    const response = await fetch(
      `https://graph.facebook.com/v12.0/me/accounts?access_token=${accessToken}`
    );
    const data = await response.json();
    console.log(data);
  };

  // Function to handle successful login
  const responseFacebook = (response) => {
    if (response.status !== "unknown") {
      // setIsLoggedIn(true);
      console.log(response);
      setUserData(response);

      getPage(response.accessToken, response.id);
    } else {
      // setIsLoggedIn(false);
      setUserData({});
    }
  };

  return (
    <>
      {/* 6c60d5af8785a83aa7ffad2ca213aa72 */}
      {/* <LoginSocialFacebook
        appId="1147676282893437"
        accessToken="EAAQTzjUotH0BOzQqOZCEZCJNWf7VwCzszSXF8EkZAQDhtTPYZBR3QLNrcZBlN2T09aKuk02B4TDFDT6UhSGPSJ3G2Xx2lgZABvZCWA6dbXZAQWQoQxVEPwYgUTbHH9nlYV5NyQhYydePgGIJkTZCdftlcTbi3IRFCSIX99P2u8xpzPYajUYeHicZB3I7ZAZChjYCz80yLfjZBiZAkd6VnunhD8HwZDZD"
        onResolve={(res) => {
          console.log(res);
          setUserData(res.data);
        }}
        onReject={(error) => {
          console.log(error);
        }}
      >
        <FacebookLoginButton />
      </LoginSocialFacebook> */}

      <FacebookLogin
        appId="1116324972934585"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        icon="fa-facebook"
        textButton="Login with Facebook"
      />
    </>
  );
};

export default FacebookAuth;
