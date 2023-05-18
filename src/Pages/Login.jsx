import React, { useState } from "react";
import {
   useLoaderData,
   useNavigation,
   Form,
   redirect,
   useActionData,
} from "react-router-dom";
import styled from "styled-components";
import { authenticateUser } from "../api";

export function loader({ request }) {
   return new URL(request.url).searchParams.get("message");
}

export async function loginAction({ request }) {
   const formData = await request.formData();
   const name = formData.get("name");
   const password = formData.get("password");
   try {
      const data = await authenticateUser(name, password);
      localStorage.setItem("loggedIn", true);
      return redirect("/host");
   } catch (error) {
      console.log(error);
      localStorage.setItem("loggedIn", false);
      return error.message;
   }
}

const Login = () => {
   const [error, setError] = React.useState(null);
   const errorMessage = useActionData();
   const { state } = useNavigation();
   const data = useLoaderData();

   return (
      <Container>
         <h2>Sign into your account</h2>
         {error && <h4>{error?.message}</h4>}
         {data && <p>{data}</p>}
         {errorMessage && <h4>{errorMessage}</h4>}
         <Form method="post" replace>
            <input type="text" placeholder="Enter your name" name="name" />
            <input
               type="password"
               placeholder="Enter your password"
               name="password"
            />

            <button type={"submit"} disabled={state === "submitting"}>
               {state === "submitting" ? "Logging in" : "Log in"}
            </button>
         </Form>
      </Container>
   );
};

const Container = styled.div`
   width: min(100%, 400px);
   margin: 0 auto;
   border: 0.8px solid green;
   margin-top: 4rem;
   padding: 10px 20px;
   h2 {
      text-align: center;
   }
   form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }
   input {
      width: 100%;
      border: none;
      outline: none;
      background-color: #87cfeb4a;
      padding: 5px 10px;
      margin-bottom: 10px;
   }

   button {
      width: min(100%, 150px);
      cursor: pointer;
   }
`;
export default Login;
