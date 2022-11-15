// import React from "react";
// import { useSelector } from "react-redux";
// import "./Users.css";

// function Users() {
//   const users = useSelector((state) => state.users.users);
//   console.log(users);
//   return (
//     <div>
//       <h1>List of users</h1>
//       <br />
//       {users.length > 0 ? (
//         users.map((user) => (
//           <div key={user.id}>
//             <h1>
//               ("{user.name}" , "{user.email}")
//             </h1>
//           </div>
//         ))
//       ) : (
//         <h1>There is no user</h1>
//       )}
//     </div>
//   );
// }

// export default Users;