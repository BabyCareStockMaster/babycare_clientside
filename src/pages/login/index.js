import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./login.module.css";
import { useState } from "react";
import { useRouter } from "next/router";


const Login = () => {
  
    // Router
    const router = useRouter();
    
    // States
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    // Submit Form
    const SubmitForm = async (e) => {
        e.preventDefault();

        // Send Request Store Cart
        const reqOption = {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({email, password})
        }   
        
        // Request
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/admin/login`, reqOption);
        const result = await response.json();
        console.log("here", result);
        if(result.error)
        {
            // To Login
            router.replace('/')
        }

        // Add Token
        if(localStorage.getItem('token') == null && result.token)
        {
            localStorage.setItem('token', result.token);

            // To Dashboard
            router.replace('/dashboard')
        }   

        // Set Clear All
        // setPassword("");
        // setEmail("");
    }

  return (
      <div className={styles.container}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo />
            <div className={styles['logo-explain']}>Babycare Dashboard</div>
          </div>

          {/* login form */}
          <div className={styles["form-container"]} >
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo />
              </div>
              <h1>Login</h1>
              <p>Please enter email and password to login</p>
            </div>
            <div>
              <Input
              onSubmit = {SubmitForm}
                inputContainerStyle={{ padding: "15px 30px" }}
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                name="email"
                label={"Email"}
              />
              <FullButton type="submit" label={"Login"} />

              <p className="tc-grey t-center">
                Dont have an account?{" "}
                <Link className="link" href={`/signup`}>Signup for free</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
  );
};

export default Login;
