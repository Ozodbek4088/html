// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { deleteFromBasket } from "../../redux/userSlice";
// import "./BasketCard.css";

// function BasketCard({ id, title, image, price, mahsulotSoni }) {
//   console.log(mahsulotSoni);
//   const dispatch = useDispatch();
//   const basket = useSelector((state) => state.users.basket);
//   const navigate = useNavigate();
//   const deleteBtn = () => {
//     dispatch(deleteFromBasket(id));
//     if (basket.length === 1) navigate("/home");
//   };
//   return (
//     <div className="basket-card">
//       <img src={image} alt="" />
//       <h3>{title}</h3>
//       <p>Narxi: {price}$</p>
//       <h3>mahsulotSoni: {mahsulotSoni}</h3>
//       <br />
//       <button onClick={deleteBtn}>delete</button>
//     </div>
//   );
// }

// export default BasketCard;
