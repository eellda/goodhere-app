import React from 'react';
import './login.css';
import axios from 'axios';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import NaverLogin from './NaverLogin';
import SocialKakao from './KakaoLogin';
axios.defaults.withCredentials = true;

function Login() {

  const userLogin = function() {

    const form = document.querySelector('#login-form');
    const formData = new FormData(form);

    axios.post('http://localhost/web/auth/login', formData)
      .then(response => {
        // console.log(response.data.status);
        if (response.data.status === 'success') {
          window.location.href = '/';
        } else {
          alert('로그인 실패!');
        }
      })
      .catch(error => {
        alert('로그인 오류!');
        console.log(error);
      });
  };

  // ---------------------------------페이스북 로그인-----------------------------------
  function facebookLogin(accessToken) {
    const data = {
      "accessToken": accessToken
    };

    axios.post("http://localhost/web/auth/facebookLogin", data)
      .then(response => {
        console.log(response);
        if (response.data.status === 'success') {
          window.location.href = '/';
          alert('페이스북 로그인 성공!');
        } else {
          alert('페이스북 로그인 실패!');
        }
      })
      .catch(exception => {
        alert("페이스북 로그인 오류!");
        console.log(exception);
      });
  }

  // ---------------------------------구글 로그인-----------------------------------
  function googleLogin(credential) {
    const data = {
      "credential": credential
    }

    console.log(credential);

    axios.post("http://localhost/web/auth/googleLogin", data)
      .then(response => {
        console.log(response);
        if (response.data.status === 'success') {
          window.location.href = '/';
          alert('구글 로그인 성공!');
        } else {
          alert('구글 로그인 실패!');
        }
      })
      .catch(exception => {
        alert("구글 로그인 오류!");
        console.log(exception);
      });
  }

  //--------

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault(); // 이벤트의 기본 동작을 막음
      userLogin();
    }
  };




  return (
    <div className="loginB">
      <div className="login-body">
        <div className="login-form-img">
          <img src='../img/logo2.png'></img>
        </div>
        <form id="login-form" action="login" method="post" className="login-form">
          <h2>로그인</h2>
          <table>
            <tr>
              <th className="email-th">Email</th>
              <td><input type='email' className='email' name='email'></input></td>
            </tr>
            <tr>
              <th className="password-th">password</th>
              <td><input type='password' className='password' name='password' onKeyDown={handleKeyDown}></input></td>
            </tr>
          </table>

          <div>
            {/* <input type='checkbox' className='checkbox'>ID 저장</input> */}
            <button id="btn-login" type="button" className="btn-login" onClick={userLogin} >Login</button>
          </div>

          <div className="under-line">
            <p className="line1"></p>
            <p className="line2">Or</p>
            <p className="line3"></p>
          </div>
          <div className="login-other">
            <FacebookLogin
              appId="126327150409089"
              initParams={{
                cookie: true,
                xfbml: true,
                version: 'v16.0',
              }}
              style={{
                backgroundColor: '#4267b2',
                color: '#fff',
                fontSize: '15px',
                padding: '12px 24px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              onSuccess={(response) => {
                console.log('Login Success!');
                console.log(response);
                facebookLogin(response.accessToken);
              }}
              onFail={(error) => {
                console.log('Login Failed!');
                console.log('status: ', error.status);
              }}
              onProfileSuccess={(response) => {
                console.log('Get Profile Success!');
                console.log('name: ', response.name);
                console.log(response);
              }}
            />
            <GoogleOAuthProvider clientId="1087840897429-akb84m84c0i06q9p3a81tbglgtqsn28j.apps.googleusercontent.com">
              <GoogleLogin
                scope="https://www.googleapis.com/auth/userinfo.profile"
                onSuccess={(response) => {
                  //console.log(response)
                  googleLogin(response.credential);
                }}
                onFailure={(error) => {
                  console.log(error);
                }}
                size= "large"
                width= "210px"
              />
            </GoogleOAuthProvider>

            <div className="NaverLogin"><NaverLogin /></div>

            <SocialKakao />

          </div>

        </form>
      </div>
    </div>
  );
}

export default Login;