import Layout from "./components/layout"
import './App.css';
import {  Route, Routes  } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import CollectionsPage from "./pages/CollectionsPage";
import SalePage from "./pages/SalePage";
import ContactPage from "./components/contact";
import ShoppingCartPage from "./components/shoppingCart";
import ResetPassword from "./pages/ResetPasswordPage";
import Verification from "./pages/VerificationPage";
import NewPassword from "./pages/newPasswordPage";


import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';


import Checkout  from "./components/checkout";
import AuthLayout from "./components/autLayout";
import MyAccount from "./components/myAccount";
import ProductDetail  from "./components/productDetail"
import PersonalInfo  from "./components/saveChange"
import Wishlist  from "./components/wishList"
import MyAccountLayout  from "./components/myAccountLayout"




function App() { 
  return (
<>


  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<HomePage/>}></Route>
    <Route path="about" element={<AboutPage/>}></Route>
   
    <Route path="products" >
     <Route index element={<ProductsPage/>} />
     <Route path=":id" element={<ProductDetail/>} />
    </Route>
    
    <Route path="collections" element={<CollectionsPage/>}></Route>
    <Route path="sale" element={<SalePage/>}></Route>
    <Route path="contact" element={<ContactPage/>}></Route>
    <Route path="contact/myAccount" element={<MyAccount/>}></Route>
    <Route path="shoppingCart" element={<ShoppingCartPage/>}></Route>
    <Route path="shoppingCart/checkout" element={<Checkout/>}></Route>
    
    <Route  path="profile" element={<MyAccountLayout/>}>
       <Route path="wishList"  element={<Wishlist/>}/>
       <Route index  element={<PersonalInfo/>}/>
      

    </Route>
  
    </Route>
  
  
   
  
    <Route  path="/auth" element={<AuthLayout/>}>

<Route  path="register" element={<Register/>}></Route>
<Route  path="register/login" element={<Login/>}></Route>
<Route  path="register/resetPassword" element={<ResetPassword/>}></Route>
<Route  path="register/verification" element={<Verification/>}></Route>
<Route  path="register/newPassword" element={<NewPassword/>}></Route>

</Route>
  
  
     <Route path="*" element/>
  </Routes>


</>
      
  );
}

export default App;
