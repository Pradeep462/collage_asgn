import React,{ useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css";

export default function Login() {
    
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e)=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).
        then((auth)=>{
            if(auth){
                history.push("/")
            }

        }).catch(error=>alert(error.message))
    }
     
  const register = (e)=>{
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email,password)
      .then((auth)=>{
          //it successfully created a new user with email ans password
         if(auth){
             history.push('/');
         }
      })
      .catch(error=>alert(error));
  }

    return (
        <div className="login">
            <h2 className="login__logo">Find Your Vacation Trip</h2>
            <div className="login__container">
                <h1>Sign-in</h1>
                <form>
                    <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input ttype="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="btn btn-success btn-block" onClick={signIn}>Sign In</button>
                </form>
                <p>
                    By signing-in you agree to  Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>
                <button onClick={register} className="btn btn-dark btn-block">Create your account</button>


            </div>


        </div>
    )
}