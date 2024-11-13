import { useState } from 'react';
import './App.css'
import { RiMenuUnfold3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [open, setopen] = useState(false);

  const routes = [
    {
      path: '/',
      name: 'Home',
      description: 'Welcome to the Home Page',
      content: 'This is the main page of the website where users can find general information.'
    },
    {
      path: '/about',
      name: 'About',
      description: 'Learn more About us',
      content: 'This page provides information about our company, mission, and values.'
    },
    {
      path: '/contact',
      name: 'Contact',
      description: 'Contact Us',
      content: 'Get in touch with us through this page. Here, we provide our contact details and a form to reach us.'
    },
    {
      path: '/products',
      name: 'Products',
      description: 'Our Products',
      content: 'Browse through our range of products, with detailed descriptions and pricing.'
    },
    {
      path: '/services',
      name: 'Services',
      description: 'What We Offer',
      content: 'This page lists the services we provide, including details and pricing options.'
    },
    {
      path: '/blog',
      name: 'Blog',
      description: 'Latest Blog Posts',
      content: 'Read our latest articles, tips, and news on various topics related to our industry.'
    }
  ];

  // Custom function to show toast with a dynamic message
  const showToast = (routeName) => {
    toast.success(`${routeName} page selected`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <>
      <h1 className='text-4xl font-medium justify-center flex m-4 w-full'>Dynamic Manual Navbar</h1>
      <div>
        <div className={`text-4xl ml-10 md:hidden`} onClick={() => setopen(!open)}>
          {
            (!open) ? <RiMenuUnfold3Line /> : <ImCross />
          }
        </div>
      </div>
      <div className={`grid-cols-1 md:flex justify-start md:justify-center gap-x-6 w-[200px] md:w-full shadow-2xl p-4 ${open ? "" : "hidden"} mx-[70px] md:mx-0 bg-[#f8fbfc] md:bg-white rounded-2xl`}>

        {
          routes.map((route, index) => (
            <h1
              onClick={() => showToast(route.name)}
              className='text-black hover:bg-green-200 cursor-pointer'
              key={index}
            >
              <a href={route.path}>{route.name}</a>
            </h1>
          ))
        }

      </div>
      <ToastContainer />
    </>
  )
}

export default App;
