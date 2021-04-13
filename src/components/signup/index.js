import React,{Component} from "react";
import "./signup.css";


class Signup extends Component {
    render(){
        return(
            <div>
                <div className = "container">
                    <div id = "title-div">
                    <h3> Signup </h3>
                    </div>
                    <div id="signup">
                        <form action ="" name ="su" method ="" onSubmit = {this.props.onSubmit}>
                            <div>
                            <input className ="signup-form-input"
                            type = "text"
                            id="first" 
                            placeholder="First Name" 
                            required = "required"
                            />
                            </div>

                            <div>
                            <input className ="signup-form-input"
                            type="text" 
                            id="last" 
                            placeholder="Last Name" 
                            required = "required"
                            />
                            </div>

                            <div>
                            <input className ="signup-form-input"
                            type="email" 
                            id="email" 
                            placeholder="Email" 
                            required = "required"
                            />
                            </div>

                            <div>
                            <input className ="signup-form-input"
                            type="password" 
                            id="password" 
                            placeholder="Password" 
                            required = "required"
                            />
                            </div>

                            <div>
                            <input className ="signup-form-input"
                            type="password" 
                            id="confirm" 
                            placeholder="Confirm Password" 
                            required = "required"
                            />
                            </div>

                            <div>
                            <input className ="signup-form-input"
                            type="submit"
                            value= "Signup" 
                            id="submitbtn" 
                            />
                            </div>

                            
                            {this.props.pass?(
                                <p className= "alert">Password and confirm password doesn't match</p>
                            ):(
                                ""
                            )}
   
                        </form>
                        </div>
                    </div>
                    </div>
                    

                
                        
        );
    }
    

    
}

export default Signup;
