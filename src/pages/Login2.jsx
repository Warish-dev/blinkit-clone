import React from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";

// import { AiOutlineEyeInvisible } from 'react-icons/ai';
// import resturant from '../assets/logo3.png'


const preventRefresh = (e) => {
	e.preventDefault();
};

export default function Login() {
	return (
		<div className={styles.main}>
				<div className={`${styles.wrapped} ${styles.signIn}`}>
					
					<div className={styles.form2}>
						<div className={styles.heading2}>LOGIN</div>
						<button className={styles.btn2} type=''>Admin</button>
						<button className={styles.btn2} type=''>Warehouse</button>

						<form>
							<div className={styles.input_container}>
								<label htmlFor="name">
								</label>
								<input className={styles.input} type="text" id="name" placeholder="Enter your name" />
							</div>
							<div>
								<label htmlFor="e-mail">E-Mail</label>
								<input className={styles.input} type="email" id="e-mail" placeholder="Enter you mail" />
							</div>
							<button className={styles.btn} type="submit" onClick={preventRefresh}>
								Submit
							</button>
						</form>
						<p>
							Don't have an account ? <Link to="/signup2"> Sign up </Link>
						</p>
					</div>
				</div>
			</div>

			
	);
}
