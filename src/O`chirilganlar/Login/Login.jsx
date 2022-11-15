// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link, useNavigate } from "react-router-dom";
// import "./Login.css";

// function Login() {
//   const navigate = useNavigate();
//   const users = useSelector((state) => state.users.users);
//   const [User, setUser] = useState({
//     email: "",
//     parol: "",
//   });
//   const handleChange = (e) => {
//     setUser({
//       ...User,
//       [e.target.name]: e.target.value,
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(User);
//     const Check = users.some(
//       (item) => item.parol === User.parol && item.email === User.email
//     );
//     console.log(Check);
//     if (Check) {
//       navigate("/home");
//     } else alert("name yoki email xato");
//   };

//   return (
//     <main>
//       <h1>Tekshirish</h1>
//       <br />
//       <br />
//       <form onSubmit={handleSubmit}>
//         <input
//           name="email"
//           required
//           onChange={handleChange}
//           type="email"
//           placeholder="email kiriting..."
//         />
//         <br />
//         <input
//           name="parol"
//           onChange={handleChange}
//           required
//           type="password"
//           placeholder="parol kiriting..."
//         />
//         <br />
//         <button type="submit">Tasdiqlash</button>
//       </form>
//       <br />
//       <br />
//       <span>
//         Saytdan oldin ro`yhatdan o`tmaganmisiz?{" "}
//         <Link className="link" to="/register">
//           Register
//         </Link>
//       </span>
//     </main>
//   );
// }

// export default Login;
