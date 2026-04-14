// import React from 'react'
// import RestrauntCard from './components/RestrauntCard.jsx';


// const restaurants = [
//   {
//     id : "ab123",
//     img_url: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80",
//     rest_name: "Pasta Center",
//     rating: 4.5,
//     cusines: "Italian, Indian, Chinese"
//   },
//   {
//     id : "cd456",
//     img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1YLLt49XZE1p7hkzuBtLH8kQ6JUdXag7Ew&s",
//     rest_name: "Dominos",
//     rating: 4.2,
//     cusines: "Pizza, Burgers, Pasta"
//   },
//   {
//     id : "ef789",
//     img_url: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80",
//     rest_name: "Spice Villa",
//     rating: 4.3,
//     cusines: "North Indian, Mughlai"
//   },
//   {
//     id : "gh012",
//     img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1YLLt49XZE1p7hkzuBtLH8kQ6JUdXag7Ew&s",
//     rest_name: "Burger Hub",
//     rating: 4.1,
//     cusines: "Burgers, Fast Food"
//   },
//   {
//     id : "ij345",
//     img_url: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80",
//     rest_name: "Tandoori Treat",
//     rating: 4.6,
//     cusines: "Tandoori, North Indian"
//   },
//   {
//     id : "kl678",
//     img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1YLLt49XZE1p7hkzuBtLH8kQ6JUdXag7Ew&s",
//     rest_name: "Pizza Palace",
//     rating: 4.0,
//     cusines: "Pizza, Italian"
//   },
//   {
//     id : "mn901",
//     img_url: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80",
//     rest_name: "Royal Biryani House",
//     rating: 4.7,
//     cusines: "Biryani, Hyderabadi"
//   },
//   {
//     id : "op234",
//     img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1YLLt49XZE1p7hkzuBtLH8kQ6JUdXag7Ew&s",
//     rest_name: "Street Food Corner",
//     rating: 3.9,
//     cusines: "Chaat, Snacks"
//   },
//   {
//     id : "qr567",
//     img_url: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?semt=ais_rp_50_assets&w=740&q=80",
//     rest_name: "Curry Kingdom",
//     rating: 4.4,
//     cusines: "Indian, Curry"
//   },
//   {
//     id : "st890",
//     img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn1YLLt49XZE1p7hkzuBtLH8kQ6JUdXag7Ew&s",
//     rest_name: "Food Fiesta",
//     rating: 4.2,
//     cusines: "Mexican, Fast Food"
//   }
// ];

// const App = () => {


//   function fn(val){
//     return <RestrauntCard {...val} />
//   }


//   return (
//     <div>
//       {
//         restaurants.map((val,idx)=><RestrauntCard key={val.id} img_url={val.img_url} rest_name={val.rest_name} rating={val.rating} cusines={val.cusines} />)
//       }
//     </div>
//   )
// }

// export default App

  


import React,{useState} from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeBody from './components/HomeBody'
import AboutBody from './components/AboutBody'
import ContactBody from './components/ContactBody'

function AppLayout({children}){
  
  return (
    <div>
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}

function App() {

  const [page, setPage] = useState("home");

  return (
    <div>
      <AppLayout>
        <ContactBody/>
      </AppLayout>
    </div>
  )
}

export default App
