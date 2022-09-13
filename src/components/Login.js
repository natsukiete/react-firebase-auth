import React from 'react';
import { provider }  from '../firebase'
import { getAuth,signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from 'firebase/auth';
import { Link ,useNavigate } from 'react-router-dom';
import {useState} from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [error,setError] = useState('');
  const auth = getAuth();
  const handleLogin = async() => {
      try{await auth.signInWithPopup(provider)       
        // await GoogleAuthProvider.credentialFromResult(result);
    }catch(error) {
        console.log(error);
        setError(error.message);
        navigate("/");
    };
  }


  return( 

    <div>
      <h1>ログイン</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogin}>Googleログイン</button>
        <div>
          ユーザ登録は<Link to={'/signup'}>こちら</Link>から
        </div>
</div>
   )
      }
      export default Login;

  // const navigate = useNavigate();
  // const [error,setError] = useState('');
  //   const handleSubmit = async(e) =>{
  //   e.preventDefault();
  //   const auth = getAuth();
  //   const{ email, password }=e.target.elements;
  //   try{
  //     await signInWithEmailAndPassword(auth,email.value,password.value);
  //   navigate("/");
  // }catch(error){
  //   console.log(error.code);
  //   if (error.code === "auth/invalid-email") {
  //     setError("The email address is badly formatted.")
  //   } else {setError(error.message);}
  // }}
  

  
  
  {/*
  <div>
  <h1>ログイン画面</h1>
  {error && <p style={{ color: 'red' }}>{error}</p>}
    <form onSubmit={handleSubmit}>
      <div>
      <label>メールアドレス</label>
          <input name="email" type="email" placeholder="email" />
        </div>
        <div>
          <label>パスワード</label>
          <input name="password" type="password" placeholder="password" />
        </div>
        <div>
          <button>ログイン</button>
        </div>
        <div> 
          </form>
   </div>
    </div> 
   )
};
        */}
       
   
  
  

