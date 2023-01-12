import React, { useState } from "react";
import axios from "axios";

// import css
import styles from "../styles/ForgotPWD.module.css";

// import footer
import Footerloginsignup from "../Components/Footer-login-signup";
import titlebar from "../utility/WebDinamis";

// import images
import bg_left_forgotpwd from "../asset/forgotpwd_bgleft.png";
import icon_coffee from "../asset/icon_titlebar.png";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast , ToastContainer } from "react-toastify";

const ForgotPWD = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loadingMail, setLoadingMail] = useState(false);
  const [loadingResend, setLoadingResend] = useState(false);
  const [isChangePwd, setIsChangePwd] = useState(false);

  const sendMail = (e) => {
    setLoadingMail(true);
    e.preventDefault();
    if (!email) return setLoadingMail(false);
    axios
      .patch(`${process.env.REACT_APP_BACKEND_HOST}/users/forgot/${email}`)
      .then((res) => {
        console.log(res.data.result.msg);
        setLoadingMail(false);
        toast.success(res.data.result.msg, {
         position: toast.POSITION.TOP_RIGHT,
      })
        setTimeout(() => {
          setIsChangePwd(true)
        }, 4000);
      })

      .catch((err) => {
        console.log(err);
        setLoadingMail(false);
      });
  };

  const valueEmail = (e) => {
    setEmail(e.target.value);
  };


  const [password, setPassword] = useState('')
  const [otp, setOtp] = useState()

  const valuePassword = (e) => {
    setPassword(e.target.value)
  }

  const valueOTP = (e) => {
    setOtp(e.target.value)
  }

  const ResetPassword = (e) => {
   setLoadingResend(true)
    e.preventDefault()
    if(!otp || !password) return (toast.error("Data don't empty", {
      position: toast.POSITION.TOP_RIGHT,
   }),setLoadingResend(false))
    axios.patch(`${process.env.REACT_APP_BACKEND_HOST}/users/changePwd`, {otp, password})
    .then((res) => {
      
      toast.success(res.data.result.msg, {
        position: toast.POSITION.TOP_RIGHT,
     })
     setLoadingResend(false)
      navigate('/login')
    })
    .catch((err)=> {
      toast.error("code otp expired please send email again in forgot password", {
      position: toast.POSITION.TOP_RIGHT,
      })
      setLoadingResend(false)
      setIsChangePwd(false)
    })
  }

  titlebar("Janjigacoffee | Forgot Password");
  return (
    <>
    <ToastContainer />
      <main className={styles["container"]}>
        <aside className={styles["left-heading"]}>
          <img
            src={bg_left_forgotpwd}
            width="100%"
            height="100%"
            alt="homepage"
          />
        </aside>
        <aside className={styles["right-heading"]}>
            <div className={styles["icon-coffee"]}>
              <img src={icon_coffee} alt="icon_coffee" />
              <p>Janjigacoffee</p>
            </div>
        {!isChangePwd ? (
          
            <form className={styles.register}>
              <div className={`${styles["forgot-text"]} text-center`}>
                <h3 className={styles.text_one}>Forgot your password?</h3>
                <p className={styles.text_two}>
                  Don't worry, we got your back!
                </p>
              </div>
              <div className={styles.input}>
                <input
                  type="text"
                  onChange={valueEmail}
                  placeholder="Enter your email address to get link"
                />
              </div>

              <div className={styles.button}>
                {loadingMail ? (
                  <div className="d-flex justify-content-center align-items-center mx-auto">
                    <Spinner animation="border" variant="info" />
                  </div>
                ) : (
                  <button onClick={sendMail}>Send</button>
                )}
              </div>
              {/* <div className={`${styles["send-text"]} text-center`}>
                {notif ? (
                  <p className={styles.send_one}>
                    Please Check your email to get otp
                  </p>
                ) : null}
              </div> */}
            </form>
        ) : (
         <form className={styles.register}>
         <div className={`${styles["forgot-text"]} text-center`}>
            <h3 className={styles.text_one}>Reset Password</h3>
         </div>
         <div className={styles.input}>
           <label className={styles.label_input} htmlFor="">OTP</label>
            <input
               type="text"
               onChange={valueOTP}
               placeholder="Please input code otp from email automatic"
            />
            <label className={styles.label_input} htmlFor="">New Password</label>
            <input
               type="password"
               onChange={valuePassword}
               placeholder="Input new password"
            />
         </div>

         <div className={styles.button}>
           {loadingResend ? <div className="d-flex justify-content-center align-items-center mx-auto">
               <Spinner animation="border" variant="info" />
            </div> : <button onClick={ResetPassword}>Confirm Reset Password</button>}
         </div>
         <div className={styles.button}>
                {loadingMail ? (
                  <div className="d-flex justify-content-center align-items-center mx-auto">
                    <Spinner animation="border" variant="info" />
                  </div>
                ) : (
                  <button onClick={sendMail}>resend OTP</button>
                )}
              </div>

      </form>
        )}
        <Footerloginsignup />
          </aside>
      </main>
    </>
  );
};

export default ForgotPWD;
