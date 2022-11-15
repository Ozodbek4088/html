// import React from "react";
// import "./Basket.css";
// import { useSelector } from "react-redux";
// import BasketCard from "./BasketCard";

// function Basket() {
//   const basket = useSelector((state) => state.users.basket);
//   const price =
//     basket.length > 0
//       ? basket.map((item) => item.price)?.reduce((a, b) => a + b)
//       : "";

//   return (
//     <div>
//       <h1>Basket sahifaga qo`shilganlar</h1>

//       {basket.length > 0 ? (
//         <div className="basket_list">
//           {basket.map((item) => (
//             <BasketCard {...item} key={item.id} />
//           ))}
//         </div>
//       ) : (
//         <h1>hali mahsulot qoshilmagan</h1>
//       )}
//       {price && <h1>Jami : {price}$</h1>}
//     </div>
//   );
// }

// export default Basket;
