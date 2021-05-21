import React, { useRef } from "react";
import { useAuth } from '../../contexts/AuthContext'
import "./signup.css";

export default function Signup() {
    const emailRef = useRef()
    const pwRef = useRef()
    const pwcRef = useRef()
   const { signup } = useAuth()

    function handleSubmit(e) {
        e.preventDefault()

        signup(emailRef.current.value, pwRef.current.value)
    }

  return (
    <div>
      <div className="container">
        <div id="title-div">
          <h3> Signup </h3>
        </div>
        <div id="signup">
          <form action="" name="su" method="POST" onSubmit="">
            <div>
              <input
                className="signup-form-input"
                type="text"
                id="first"
                placeholder="First Name"
              />
            </div>

            <div>
              <input
                className="signup-form-input"
                type="text"
                id="last"
                placeholder="Last Name"
              />
            </div>

            <div>
              <input
                className="signup-form-input"
                type="email"
                id="txtemail"
                placeholder="Email"
                required="required"
                ref={emailRef}
              />
            </div>

            <div>
              <input
                className="signup-form-input"
                type="password"
                id="txtpw"
                placeholder="Password"
                required="required"
                ref={pwRef}
              />
            </div>

            <div>
              <input
                className="signup-form-input"
                type="password"
                id="confirm"
                placeholder="Confirm Password"
                required="required"
                ref={pwcRef}
              />
            </div>

            <div>
              <input
                className="signup-form-input"
                type="submit"
                value="Signup"
                id="submitbtn"
              />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

















// import React,{Component} from "react";
// import "./signup.css";
// import firebase from "firebase/app"
// import "firebase/auth"

// class Signup extends Component {

//     render(){

//         return(
//             <div>
//                 <div className = "container">
//                     <div id = "title-div">
//                     <h3> Signup </h3>
//                     </div>
//                     <div id="signup">
//                         <form action ="" name ="su" method ="POST" onSubmit = "">
//                             <div>
//                             <input className ="signup-form-input"
//                             type = "text"
//                             id="first"
//                             placeholder="First Name"

//                             />
//                             </div>

//                             <div>
//                             <input className ="signup-form-input"
//                             type="text"
//                             id="last"
//                             placeholder="Last Name"

//                             />
//                             </div>

//                             <div>
//                             <input className ="signup-form-input"
//                             type="email"
//                             id="txtemail"
//                             placeholder="Email"
//                             required = "required"
//                             />
//                             </div>

//                             <div>
//                             <input className ="signup-form-input"
//                             type="password"
//                             id="txtpw"
//                             placeholder="Password"
//                             required = "required"
//                             />
//                             </div>

//                             <div>
//                             <input className ="signup-form-input"
//                             type="password"
//                             id="confirm"
//                             placeholder="Confirm Password"
//                             required = "required"
//                             />
//                             </div>

//                             <div>
//                             <input className ="signup-form-input"
//                             type="submit"
//                             value= "Signup"
//                             id="submitbtn"
//                             />
//                             </div>

//                             {this.props.pass?(
//                                 <p className= "alert">Password and confirm password doesn't match</p>
//                             ):(
//                                 ""
//                             )}

//                         </form>
//                         </div>
//                     </div>
//                     </div>

//         );
//     }

// }

// export default Signup;
