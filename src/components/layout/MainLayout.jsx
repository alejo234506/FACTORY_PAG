import React from 'react';
import './MainLayout.css';

const MainLayout = ({ children }) => (
    <>
    <main className="content">
      {children}
     </main>
    </>
//   <div className="main-layout">
//     {/* <Header /> */}
//     <main className="content">
//       {children}
//     </main>
//     {/* <Footer /> */}
//   </div>
);

export default MainLayout;