import React from 'react'
import { useRouteError } from 'react-router-dom'
const Error = () => {
    const error = useRouteError();

    const m = error.message
    const s = error.statusText
    console.log(error)
  return (
     <div>
        <h1>An error occured</h1>
          <h2>Error:{m}</h2>
          <h2>{s}</h2>
     </div>
  );
}

export default Error
