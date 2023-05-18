import { redirect } from "react-router-dom";

export async function getVans(id) {
   const url = id
      ? `http://localhost:3005/vans/${id}`
      : "http://localhost:3005/vans";
   const res = await fetch(url);
   if (!res.ok) {
      throw {
         message: "Failed to fetch vans",
         statusText: res.statusText,
         status: res.status,
      };
   }
   const data = await res.json();
   return data;
}

export async function getHostVans(id) {
   const url = id
      ? `http://localhost:3005/HostVans/${id}`
      : "http://localhost:3005/HostVans";
   const res = await fetch(url);
   if (!res.ok) {
      throw {
         message: "Failed to fetch van detail",
         statusText: res.statusText,
         status: res.status,
      };
   }

   const data = await res.json();

   return data;
}

export async function requireAuth() {
   const isLoggedIn = localStorage.getItem('loggedIn');
   if (!isLoggedIn) {
      throw redirect("/login?message=You must log in first");
   }
   return null;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function authenticateUser(username, password) {
   await sleep(1000)
   const validUser = {
      username: "Emma",
      password: "123",
   };
   if (username === validUser.username && password === validUser.password) {
      return validUser;
   } else {
      throw new Error("Invalid credentials");
   }
}
