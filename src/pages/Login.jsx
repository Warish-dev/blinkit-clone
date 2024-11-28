// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from "../styles/login_signup.module.css";
// import { IoMdMail } from "react-icons/io";
// import { RiLockPasswordFill } from "react-icons/ri";
// import image from'../assets/images/logo.png';
// import axios from 'axios'



// const preventRefresh = (e) => {
//   e.preventDefault();
// };

// export default function Login() {
 
//   const [selectedRole, setSelectedRole] = useState('');
//   const [isMobile, setIsMobile] = useState(false);

//   const handleRoleSelect = (role) => {
//     setSelectedRole(role);
//   };

  
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

   
//     handleResize();

    
//     window.addEventListener('resize', handleResize);

   
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <div className={styles.main}>
//       <div className={`${styles.wrapped} ${styles.signIn}`}>
//         <div className={styles.form2}>
          
//           {isMobile ? (
//             <img src={image} alt="Logo" className={styles.logo} />
//           ) : (
//             <div className={styles.heading2}>LOGIN</div>
//           )}

//           <div className={styles.btnbox}>
           
//             <p 
//               className={`${styles.btn2} ${selectedRole === 'Admin' ? styles.selected : styles.unselected}`} 
//               onClick={() => handleRoleSelect('Admin')}
//             >
//               Warehouse
//             </p>
            
//             <p 
//               className={`${styles.btn2} ${selectedRole === 'Warehouse' ? styles.selected : styles.unselected}`} 
//               onClick={() => handleRoleSelect('Warehouse')}
//             >
//               Admin
//             </p>
//           </div>

//           <form>
//             <div className={styles.input_container}>
//               <label className={styles.lbl} htmlFor="name">
//                 <IoMdMail />
//               </label>
//               <input 
//                 className={styles.input} 
//                 type="email" 
//                 required  
//                 id="name" 
//                 placeholder="Enter your E-Mail" 
//               />
//             </div>
//             <div>
//               <label className={styles.lbl} htmlFor="e-mail">
//                 <RiLockPasswordFill />
//               </label>
//               <input 
//                 className={styles.input} 
//                 type="Password" 
//                 required  
//                 id="e-mail" 
//                 placeholder="Enter your password" 
                
//               />
//             </div>
//             <button className={styles.btn} type="submit"  onClick={preventRefresh}>
//               Submit
//             </button>
//           </form>
//           <p>
//             Don't have an account? <Link to="/signup2">Sign up</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from "../styles/login_signup.module.css";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";
import image from '../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { callAPI } from '../services/callAPIFunction';
import { adminEndPoints, warehouseEndPoints } from '../services/apiEndPoints';
import toast from 'react-hot-toast';

const { VITE_API_BASE_URL } = import.meta.env;



export default function Login() {

  const [selectedRole, setSelectedRole] = useState('Admin');
  const [isMobile, setIsMobile] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  // Handle role selection
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  // Hook to track window size for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);




  // Login function
  // const login = async (e) => {
  //   e.preventDefault();

  //   // Validation
  //   if (!email || !password || !selectedRole) {
  //     alert('Please fill in all fields and select a role.');
  //     return;
  //   }

  //   // Determine API endpoint
  //   const endpoint =
  //     selectedRole === 'Admin'
  //       ? 'https://bijlimart-backend.onrender.com/api/admin/login'
  //       : 'https://bijlimart-backend.onrender.com/api/warehouse/login'; // Replace with Warehouse endpoint if different.

  //   setLoading(true);
  //   try {
  //     const response = await axios.post(
  //       endpoint,
  //       { email, password },
  //       { withCredentials: true } // Send cookies to the server
  //     );

  //     console.log(`${selectedRole} login successful:`, response.data);
  //     //store the response in localStorage
  //     localStorage.setItem('userData',JSON.stringify(response.data.admin));
  //     alert (`${selectedRole} login successful`);
      
  //     //Redirect to admin dashboard after successful login
  //     if (selectedRole == 'Admin'){
  //       navigate('/admin/dashboard');
  //     }else {
  //       navigate('/warehouse/dashboard');
  //     }

  //     // Redirect logic or further processing can go here.
  //   } catch (error) {
  //     console.error(`${selectedRole} login failed:`, error.response?.data || error.message);
  //     alert(`${selectedRole} login failed. Please check your credentials.`);
  //   } finally {
  //     setLoading(false);
  //   }
  // };


  const login = async (e) => {
    e.preventDefault();
    try {
      const data = {
        email,
        password
      }

      if (selectedRole === 'Admin'){
        const response = await callAPI('post', `${VITE_API_BASE_URL}${adminEndPoints.login}`, data)
        if(response.status == 200){
          localStorage.setItem("user", JSON.stringify(response?.data?.admin));
          toast.success('Login Succesful', {
            duration: 1500
          });
          navigate('/admin/dashboard');
        }

      }else{
        const response = await callAPI('post', `${VITE_API_BASE_URL}${warehouseEndPoints.warehouseLogin}`, data);
        console.log(response)
        if (response.status == 200){
          localStorage.setItem("user", JSON.stringify(response?.data?.user));
          toast.success('Login Succesfull', {
            duration: 1500
          });
          navigate('/warehouse/dashboard');
        }
      }
      
    } catch (error) {
      console.log(error)
      console.log(error.message);
    }
  }


  return (
    <div className={styles.main}>
      <div className={`${styles.wrapped} ${styles.signIn}`}>
        <div className={styles.form2}>
          {/* Conditional rendering of the logo or heading */}
          {isMobile ? (
            <img src={image} alt="Logo" className={styles.logo} />
          ) : (
            <div className={styles.heading2}>LOGIN</div>
          )}

          <div className={styles.btnbox}>
            {/* Admin button */}
            <p
              className={`${styles.btn2} ${
                selectedRole === 'Admin' ? styles.selected : styles.unselected
              }`}
              onClick={() => handleRoleSelect('Admin')}
            >
              Admin
            </p>
            {/* Warehouse button */}
            <p
              className={`${styles.btn2} ${
                selectedRole === 'Warehouse' ? styles.selected : styles.unselected
              }`}
              onClick={() => handleRoleSelect('Warehouse')}
            >
              Warehouse
            </p>
          </div>

          <form onSubmit={login}>
            <div className={styles.input_container}>
              <label className={styles.lbl} htmlFor="email">
                <IoMdMail />
              </label>
               <input
                className={styles.input}
                type="email"
                id="email"
                placeholder="Enter your E-Mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
           </div>
            <div>
              <label className={styles.lbl} htmlFor="password">
                <RiLockPasswordFill />
              </label>
              <input
                className={styles.input}
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button className={styles.btn} type="submit" disabled={loading}>
              {loading ? 'Loading...' : 'Submit'}
            </button>
          </form>
          <p>
            Don't have an account? <Link to="/signup2">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

