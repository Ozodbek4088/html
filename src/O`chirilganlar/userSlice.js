// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   users: JSON.parse(localStorage.getItem("users")) || [],
//   products: JSON.parse(localStorage.getItem("products")) || [],
//   basket: JSON.parse(localStorage.getItem("basket")) || [],
//   loggedIn: false,
// };
// const userSlice = createSlice({
//   name: "users",
//   initialState,
//   reducers: {
//     getAllProducts: (state, action) => {
//       state.products = action.payload;
//     },
//     addCountToProduct: (state, action) => {
//       const countAddedProducts = state.products.map((item) => {
//         if (item.id === action.payload.id) {
//           return {
//             ...item,
//             mahsulotSoni: action.payload.son,
//           };
//         } else return item;
//       });
//       state.products = countAddedProducts;
//     },
//     addUser: (state, action) => {
//       return (state = {
//         ...state,
//         users: [...state.users, action.payload],
//       });
//     },

//     addBasket: (state, action) => {
//       return (state = {
//         ...state,
//         basket: [...state.basket, action.payload],
//       });
//     },
//     deleteFromBasket: (state, action) => {
//       const filteredBasket = state.basket.filter(
//         (item) => item.id !== action.payload
//       );
//       state.basket = filteredBasket;
//     },
//   },
// });

// export const {
//   addUser,
//   addBasket,
//   deleteFromBasket,
//   getAllProducts,
//   addCountToProduct,
// } = userSlice.actions;

// export default userSlice.reducer;
