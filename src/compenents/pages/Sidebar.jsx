import React from 'react'
import SidebarItem from './SidebarItem';
import profil from '../images/profil.png'
// import Content from './Content';

function Sidebar({ items }) {
    return (
        <div className="sidebar">
            <div className="d-flex flex-column  flex-shrink-0 p-2 text-dark bg-white vh-110">
                <a href="/" className="d-flex align-items-center mb-3 ms-2 mb-md-0 me-md-auto text-white text-decoration-none">
                    <div>
                        <img className='img-fluid' src={profil} alt="" />
                    </div>
                    <div className="d-flex flex-column text-dark p-1">
                        <span className="bi me-2 fs-3 fw-bold" >Dashy</span>
                        <p className='para-side'>Business & Consulting</p>
                    </div>
                </a>
                <div className="">
                    <p>MAIN MENU</p>
                </div>
                <div className="">
                    {items.map((item, index) => (
                        <SidebarItem key={index} icon={item.icon} text={item.text} />
                    ))}
                </div>
                <div className="">
                    <p>PREFERENCE</p>
                </div>
                <ul className='p-1 d-flex flex-column list-unstyled ms-2'>
                    <li><i className="bi bi-person"></i> <span className='ms-2'>Users</span></li>
                    <li className='mt-3'><i className="bi bi-gear"></i> <span className='ms-2'>Setting</span></li>
                </ul>
                <div className="text-center foter-sidebar p-2">
                    <p className='paragraphe1'>Upgrade to Enterprise Account!</p>
                    <p>Increase your sales by using special <br /> features of Enterprise Membership.</p>
                    <button type='submit' className='bg-dark text-white'>Upgrade</button>
                </div>
            </div>
        </div>
    );
}

// function Sidebar() {
//   return (
//     <div className='sidebar'>
//         <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: '280px' }}>
//                 <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
//                     <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
//                     <span className="fs-4">Sidebar</span>
//                 </a>
//                 <hr />
//                 <ul className="nav nav-pills flex-column mb-auto">
//                     <li className="nav-item">
//                         <a href="#" className="nav-link active" aria-current="page">
//                             <span className="bi me-2" width="16" height="16">Overview</span>

//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="nav-link text-white">
//                         <i className='bi bi-speedometer2 fs-4 me-4'></i>
//                             <span className="bi me-2" width="16" height="16"><use xlinkHref="#speedometer2" /></span>
//                             Dashboard
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="nav-link text-white">
//                             <span className="bi me-2" width="16" height="16"><use xlinkHref="#table" /></span>
//                             Orders
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="nav-link text-white">
//                             <span className="bi me-2" width="16" height="16"><use xlinkHref="#grid" /></span>
//                             Products
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="nav-link text-white">
//                             <span className="bi me-2" width="16" height="16"><use xlinkHref="#people-circle" /></span>
//                             Customers
//                         </a>
//                     </li>
//                 </ul>
//             </div>
//     </div>
//   )
// }

export default Sidebar