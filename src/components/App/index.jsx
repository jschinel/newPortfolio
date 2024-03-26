import { useEffect, useState } from 'react'
import { Routes, Route, Link, useNavigate} from "react-router-dom";
import HomePage from '../HomePage'
import './styles.css'


export default function App() { 
    const navigate =useNavigate()
    const [toggleMenu,setToggleMenu]=useState()
    const pathName = window.location.pathname;
   
    useEffect(()=>
    {
       localStorage.setItem('HideMenu','none')
    },[toggleMenu])


    //  Create the HTML using JSX for the App component fixing
    return (
        <>
            <div className='sticky top-0'>
                {toggleMenu==true ? (
                    <>
                    <div className="flex flex-col justify-top items-center absolute right-0 top-[6.5dvh] bg-[white] w-[10%] h-fit list-none text-black font-bold text-sm">
                        <Link onClick= {()=>{setToggleMenu(!toggleMenu)}} to="/skills">
                            <li className=" border w-[10dvw] text-center hover:text-[#C19A6B]">Skills</li>
                        </Link>
                        <Link onClick= {()=>{setToggleMenu(!toggleMenu)}} to="/Projects ">
                            <li className=" border w-[10dvw] text-center hover:text-[#C19A6B]">Projects</li>
                        </Link>
                        <Link onClick= {()=>{setToggleMenu(!toggleMenu)}} to="/Games">
                            <li className=" border w-[10dvw] text-center hover:text-[#C19A6B]">Games</li>
                        </Link>
                    </div>
                </>  
                ):null}
                <div className='flex justify-between px-5 py-3 bg-[white] list-none text-black font-bold text-lg md:text-3xl sm:text-2xl'>
                    <Link onClick= {()=>{setNoReload(false)}} to="/">
                        <li className="hover:text-[#C19A6B]">Home</li>
                    </Link>
                    <Link onClick= {()=>{setToggleMenu(!toggleMenu)}} to="/newPortfolio/">
                        <li className="hover:text-[#C19A6B]"><span>&#9776;</span></li>
                    </Link>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/newPortfolio" element={<HomePage/>} />
            </Routes>
        </>
    )
}