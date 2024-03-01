// Desc: Login Page
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@aio/components/Logo";
import { Input, Button } from "@chakra-ui/react"; // Import Chakra UI components
import FullButton from "@aio/components/FullButton";
import styles from "./login.module.css";

const Login = () => {
    // Router
    const router = useRouter();
    
    // States
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const SubmitForm = async (e) => {
      e.preventDefault();
  
      // Send Request Store Cart
      const reqOption = {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({email, password})
      }   
      
      // Request
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/admin/login`, reqOption);
      const result = await response.json();
      console.log("here", result);
  
      // Check if there's no error and token exists
      if(!result.error && result.token) {
          localStorage.setItem('token', result.token);
          // To Dashboard
          router.replace('/dashboard');
      } else {
          // Handle error here if necessary
          console.error("Login failed:", result.error);
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
              <div className={styles["logo-explain"]}>Babycare Dashboard</div>
          </div>

          {/* login form */}
          <form className={styles["form-container"]} onSubmit={SubmitForm}>
              <div className="t-center" style={{ margin: "15px 0" }}>
                  <div className={styles["sm-brand-container"]}>
                      <Logo />
                  </div>
                  <h1>Login</h1>
                  <p>Please enter email and password to login</p>
              </div>
              <div>
                  <Input
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
                      name="password"
                      label={"Password"}
                  />
                  <FullButton type="submit" label={"Login"}/>

                  <p className="tc-grey t-center">
                      Don't have an account?{" "}
                      <Link className="link" href={`/signup`}>
                          Signup for free
                      </Link>
                  </p>
              </div>
          </form>
      </section>
  </div>
    );
};

export default Login;
