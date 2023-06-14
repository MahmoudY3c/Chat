import React from 'react';
import FormData from "../../JSON/Forms/register.json";
import FormLayout from '../../Layouts/FormLayout';

function Register(props) {
  const auth =[
    {
      image: "google.png",
      title: "Signup With Google",
      alt: "Signup With Google"
    },
    {
      image: "twitter.png",
      title: "Signup With Twitter",
      alt: "Signup With Twitter"
    }
  ]
  return (
    <header>
      <FormLayout FormData={FormData} title="Create Account" auth={auth} key="register" />
    </header>
  );
}

export default Register;