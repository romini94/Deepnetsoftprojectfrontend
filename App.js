import React from 'react';
import Order from './Order';
import Navbarcomponent from './Navbar/Navbarcomponent';
import Menubar from './Menu/Menubar';
import Footer from './Footer/Footer';

function App() {
  return (
    <div style={{height:"100vh" ,backgroundColor:"#43474b "}}>
        <Navbarcomponent/>
        <Menubar/>
        <Footer/>
<Order/>

    </div>
   
  )
}

export default App
