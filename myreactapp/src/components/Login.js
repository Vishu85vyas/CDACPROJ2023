import React from 'react'
import { useState , useEffect } from 'react';

const colors = {
    primary: "#060606",
    background: "#E0E0E0",
    disabled: "#E9E9E9"
}

function Login() {
    const [username ,setUsername] = useState('');
    const [Password ,setPassword] = useState('');
    const [error ,setError] = useState('');
    
    const handleLogin = () => {
        var helper = new XMLHttpRequest();
        helper.setRequestHeader('Content-Type', 'application/json');
        helper.onreadystatechange = () => {
            //debugger;
            if(helper.readyState == 4 && helper.status == 200)
            {
              //  debugger;
                alert('Login successful');
            }
        }
        helper.open("POST","http://localhost:8080/customer");
        helper.send();
    }

    return (
        <div class="coabtainer mt-5">
            <div class="row justify-content-left">
                <div class="col-md-6">
                    <h2>Login</h2>
                    <form action="#" method="POST">
                        <div class="form-group">
                            <label for="username">Email:</label>
                            <input type="text" class="form-control" id="username" name="username" placeholder='vishu1999vyas@gmail.com' autoComplete='off' value={username} onChange={(e)=> setUsername(e.target.value)} required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" class="form-control" id="password" name="password" autoComplete='off' placeholder='**************' value={Password} onChange={(e)=> setPassword(e.target.value)} required />
                        </div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Login
