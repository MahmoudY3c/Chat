import React from 'react';
import FormData from '../../JSON/Forms/login.json'
import FormLayout from '../../Layouts/FormLayout';

function Login(props) {
  const auth =[
    {
      image: "google.png",
      title: "Login With Google",
      alt: "Login With Google"
    },
    {
      image: "twitter.png",
      title: "Login With Twitter",
      alt: "Login With Twitter"
    }
  ]
  return (
    <header>
      <FormLayout FormData={FormData} title="Login Page" auth={auth} key="login" />
    </header>
  );
}

export default Login;