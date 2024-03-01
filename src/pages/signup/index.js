import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./signup.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

const Signup = () => {
   // Router
   const router = useRouter();
  // States
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [username, setUsername] = useState("");
  
  // Submit Form
  const SubmitForm = async (e) => {
      e.preventDefault();

      // Send Request Store Cart
      const reqOption = {
          method: "POST",
          headers: {"Content-Type" : "application/json"},
          body: JSON.stringify({ first_name, username, email, password, last_name, address})
      }   
      
      // Request
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/register`, reqOption);
      const result = await response.json();

      // To Dashboard
      router.replace('/login')

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

                {/* Registration form */}
                <div className={styles["form-container"]}>
                    <div className="t-center" style={{ margin: "15px 0" }}>
                        <div className={styles["sm-brand-container"]}>
                            <Logo />
                        </div>
                        <h1>Signup</h1>
                        <p>Create a new Account</p>
                    </div>
                    <form onSubmit={SubmitForm}>
                        <div>
                            <Input
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="text"
                                placeholder="First Name"
                                onChange={(e) => setFirstName(e.target.value)}
                                label={"First Name"}
                            />
                            <Input
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="text"
                                placeholder="Last Name"
                                onChange={(e) => setLastName(e.target.value)}
                                label={"Last Name"}
                            />
                            <Input 
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="text"
                                placeholder="Username"
                                onChange={(e) => setUsername(e.target.value)}
                                label={"Username"}
                            />
                            <Input
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="text"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                label={"Email"}
                            />
                            <Input
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="password"
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                                label={"Password"}
                            />
                            <Input
                                inputContainerStyle={{ padding: "15px 30px" }}
                                type="text"
                                placeholder="Address"
                                onChange={(e) => setAddress(e.target.value)}
                                label={"Address"}
                            />
                            <FullButton label={"Register"} />
                            <p className="tc-grey t-center">
                                If you already have an account.{" "}
                                <Link className="link" href={`/login`}>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
  );
};

export default Signup;
