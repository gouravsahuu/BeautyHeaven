import styles from "./loginpage.module.css";
import Login from "../components/login";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function LoginPage() {
   return <>
   <Navbar/>
        <div className={styles.mainDiv}>
            <Login />
        </div>
        <Footer/>
    </>
}

export default LoginPage;