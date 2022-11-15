// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import Homee from "./Homee";
// import "./Home.css";
// // import { useDispatch } from "react-redux";
// // import { getAllProducts } from "../../redux/productSlice";

// function Home() {
//   const [data, setData] = useState([]);
//   // const dispatch=useDispatch()
//   const Api = "https://fakestoreapi.com/products";
//   useEffect(() => {
//     axios.get(Api).then((res) =>{
//       setData(res.data)
//     // dispatch(getAllProducts(res.data))
//     }) 
//   }, []);
//   return (
//     <div className="home">
//       {data.map((item) => (
//         <Homee key={item.id} item={item} {...item} />
//       ))}
//     </div>
//   );
// }

// export default Home;
