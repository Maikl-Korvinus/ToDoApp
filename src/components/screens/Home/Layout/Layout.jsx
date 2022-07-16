import React from "react";



const Layout = ({children}) =>{
   return (
      <div className='py-10 bg-sky-300 h-screen'>
         {children}
      </div>
   )
}

export default Layout;