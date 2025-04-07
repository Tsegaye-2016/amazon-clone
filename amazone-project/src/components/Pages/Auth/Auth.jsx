import React, { useContext, useState } from 'react'
import classes from './SignUp.module.css';
import logo2 from '../../../assets/logo2.png';
import { Link } from 'react-router-dom';
import { auth } from '../../../Utility/firbase';
import { signInWithEmailAndPassword ,createUserWithEmailAndPassword} from 'firebase/auth';
import {DataContext} from '../../../components/DataProvider/DataProvider'
import { Type } from '../../../Utility/action.type';

function Auth() {
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [error ,setError] = useState("");
    const [{user}, dispatch] = useContext(DataContext);
    console.log(user);
    // console.log(password,email);
    const authHandler =async(e) =>{
        e.preventDefault();
        // console.log(e.target.name);
        if(e.target.name == "signin"){
          signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{
            // console.log(userInfo);
            dispatch({
                type:Type.SET_USER,
                user:userInfo.user
            });
          }).catch((err)=>{
            // console.log(err);
            setError(err.message);
          })
        }else{
          createUserWithEmailAndPassword(auth, email ,password).then((userInfo)=>{
            // console.log(userInfo)
            dispatch({
              type:Type.SET_USER,
              user:userInfo.user
          });
          }).catch((err)=>{
            // console.log(err.message);
              setError(err.message);
          })
        }
    }
  return (
        <section className={classes.login}>
            <Link>
            <img src={logo2} alt="Logo" />
            </Link>
            <div className={classes.login_cintainer}>
            <h1>Sign-in</h1>
            <form action="">
              <div>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} 
                type="email" id='email' />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" id='password' />
              </div>
              <button type='submit'
                      name='signin'
                      onClick={authHandler} 
                      className={classes.login_signinButton}>Sign In</button>
            </form>
            <p>
                By signing in you agree to the AMAZON FAKE CLONE Conditions of use & 
                sale. Please Our Privacy Notice, our Cookies Notice and Our 
                Interset-Based Ads Notice.
            </p>
            <button 
                type='submit'
                name='signup' 
                onClick={authHandler} 
                className={classes.login_registorButton}>
                  Create Your Amazone Account
            </button>
            {
              error && <small>{error}</small>
            }
            </div>
        </section>
  )
  
}

export default Auth;
