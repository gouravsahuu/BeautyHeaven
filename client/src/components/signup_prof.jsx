import styles from "./Signup.module.css";
import { Link } from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignupProfessional () {
    const baseURL = "https://beauty-heaven.onrender.com";
    const [nameData,setNameData] = useState("");
    const [emailData, setEmailData] = useState("");
    const [numData,setNumData] = useState("");
    const [passData,setPassData] = useState("");
    const navigate = useNavigate();

    console.log("fuck")

    function formSubmit(e) {
        e.preventDefault();
        const userData = {
            professionalName:nameData,
            email:emailData,
            phoneNumber:numData,
            password:passData
         }
         const res = formCheck(userData);
         if(res){
            fetch(`${baseURL}/professions/register`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify(userData)
             })
             .then((res) => {
                return res.json();
             })
             .then((data) => {
                 console.log(data);
                 if(data.message === "registration successfull"){
                    alert(data.message);
                    navigate("/professional/login");
                 }
                 else{
                    alert("Something went wrong, Registration Failed");
                 }
             })
             .catch((err) => {
                console.log(err);
             })
         }
         else{
            alert("Some Fields Are Missing");
         }
    }

    function formCheck(obj) {
        let check = false;
        if(obj.professionalName != "" && obj.email != "" && obj.phoneNumber != "" && obj.password != ""){
        check = true;
    }
    return check;
    }

    return <>
    <div style={{padding: "20px"}}></div>
        <form id="signup" onSubmit={(e) => {
        formSubmit(e);
    }} className={styles.signupForm}>
                <div>
                    <h4>SIGNUP AS PROFESSIONAL</h4>
                    <p>**All fields are required</p>
                </div>
                <p>Please sign-up below to create an account</p>
                <input type="text" id="name" value={nameData} onChange={(e) => setNameData(e.target.value)} placeholder="Enter Full Name" />
                <input type="email" id="email" value={emailData} onChange={(e) => setEmailData(e.target.value)} placeholder="Enter your E-mail" />
                <input type="number" id="num" value={numData} onChange={(e) => setNumData(e.target.value)} placeholder="Enter Contact Number" />
                <input type="password" id="pass" value={passData} onChange={(e) => setPassData(e.target.value)} placeholder="Choose a strong password" />
                <input type="submit" value="SIGNUP" />
                <Link to={"/professional/login"}><p style={{ fontWeight: "600", textAlign: "center" }}>Already a user ? <span style={{ fontWeight: "600", textDecoration: "underline" }}>Login here</span></p></Link>
            </form>
            <div style={{padding: "50px"}}></div>
    </>
}

export default SignupProfessional;