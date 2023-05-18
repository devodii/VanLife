import React from 'react'
import { Form } from "react-router-dom"

export function TestAction({ request }) {
    // const formData = await request.formData()
    const formData = new URL(request.url);
    const name = new URLSearchParams(formData.search).get('name');
    const password = new URLSearchParams(formData.search).get('password');
    console.log({name, password});
    return null
}
const TestLogin = () => {
    
    return ( 
        <div>
            <Form method='post'>
              Name  <input type="text" name='name' /> <br /><br />
                Password <input type="password" name='password' /> <br />
                <button type='submit' role='submit'>Submit</button>
            </Form>
        </div>
    )
}

export default TestLogin
