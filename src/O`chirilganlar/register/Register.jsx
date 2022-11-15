// import React, {  useState } from "react";
// import "./register.css";
// import { Link } from "react-router-dom";
// import { nanoid } from "nanoid";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { addUser } from "../../redux/userSlice";

// function Register() {
//   const [newUser, setNewUser] = useState({
//     name: "",
//     email: "",
//     parol: "",
//     id:nanoid()
//   });
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setNewUser({
//       ...newUser,
//       [e.target.name]: e.target.value,
//       id: nanoid(),
//     });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(addUser(newUser));
//     navigate("/login");
//   };
//   return (
//     <div className="register">
//       <h1>Ro`yhatdan o`tish</h1>
//       <form action="" onSubmit={handleSubmit}>
//         <br />
//         <br />
//         <br />
//         <input
//           name="name"
//           onChange={handleChange}
//           type="text"
//           placeholder="ism kiriting"
//         />
//         <br />
//         <br />
//         <input
//           name="email"
//           onChange={handleChange}
//           type="email"
//           placeholder="email kiriting"
//         />
//         <br />
//         <br />
//         <input
//           name="parol"
//           onChange={handleChange}
//           type="password"
//           placeholder="parol kiriting"
//         />
//         <br />
//         <br />
//         <button type="submit">Sing up</button>
//       </form>
//       <br />
//       <br />
//       <span>
//         Saytdan oldin ro`yhatdan o`tmaganmisiz?{" "}
//         <Link className="link" to="/login">
//           Login
//         </Link>
//       </span>
//     </div>
//   );
// }

// export default Register;
