// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addBasket, addCountToProduct } from "../../redux/userSlice";

// import "./Homee.css";

// function Homee({ title, image, price, item, id }) {
//   const [son, setSon] = useState(1);
//   const dispatch = useDispatch();
//   const basket = useSelector((state) => state.users.basket);

//   const AddBtn = () => {
//     const check = basket.some((product) => product.id === id);
//     if (check) {
//       alert("bu mahsulotni qoshgansiz");
//       return;
//     }
//     dispatch(addBasket(item));
//     const payload = {
//       id,
//       son,
//     };
//     dispatch(addCountToProduct(payload));
//   };
//   const minusBtn = () => {
//     if (son > 1) setSon((p) => p - 1);
//     else setSon(1);
//   };
//   return (
//     <div className="homee">
//       <div className="kiyimlar">
//         <img width={"250px"} height={"300px"} src={image} alt="" />
//         <h1>{title}</h1>
//         <br />
//         <h2>price: {price}$</h2>
//         <br />
//         <div className="btn">
//           <button onClick={minusBtn} className="plus">
//             -
//           </button>
//           <em>{son}</em>
//           <button onClick={() => setSon((prev) => prev + 1)} className="plus">
//             +
//           </button>
//         </div>
//         <button className="Ad_To_Basket" onClick={AddBtn}>
//           Ad To Basket
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Homee;
