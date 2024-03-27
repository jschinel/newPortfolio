import { useEffect, useState } from 'react'
import { Routes, Route, Link} from "react-router-dom";
import HomePage from '../HomePage'
import './styles.css'


export default function App() { 
    const [toggleMenu,setToggleMenu]=useState()
    const [navigationSelected,setNavigationSelected]=useState()
    const pathName = window.location.pathname;
   
    useEffect(()=>
    {
       localStorage.setItem('HideMenu','none')
    },[toggleMenu])

    window.addEventListener('resize', ()=> {
        location.reload();
    });

    //  Create the HTML using JSX for the App component fixing
    return (
        <>
            <div className='sticky top-0 z-50'>
                {toggleMenu==true ? (
                    <>
                    <div onMouseLeave={()=>{ 
                            setTimeout(() => {
                                if (toggleMenu === true) // Ensure toggleMenu is still true after 1 second 
                                {
                                    setToggleMenu(false); // Toggle menu to false
                                }
                            }, 1000); // 1000 milliseconds = 1 second
                        }} 
                        className="flex flex-col justify-top items-center absolute right-0 top-[6.5dvh] bg-[white] w-[40dvw] md:w-[20%] h-fit list-none text-black font-bold text-xs hover:cursor-pointer">
                        <div onClick= {()=>{
                                setNavigationSelected(2)
                                setToggleMenu(!toggleMenu)
                            }}>
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Intro</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(3)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Experience</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(4)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Resume</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(5)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Skills & Certs</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(6)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Project 1</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(7)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Project 2</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(8)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Game 1</li>
                        </div>
                        <div onClick= {()=>{                                
                                setNavigationSelected(9)
                                setToggleMenu(!toggleMenu)
                            }} >
                            <li className="hover:cursor-pointer border w-[40dvw] text-center hover:text-[#C19A6B] md:w-[20dvw]">Personal</li>
                        </div>
                    </div>
                </>  
                ):null}
                <div className='opacity-75 flex justify-between px-5 py-3 bg-[white] list-none text-black font-bold text-lg md:text-3xl sm:text-2xl'>
                    <Link to="/newPortfolio/">
                        <li className="hover:cursor-pointer hover:text-gray-500" onClick={()=>{window.location.reload()}}>Home</li>
                    </Link>
                    <div onClick= {()=>{setToggleMenu(!toggleMenu)}}>
                        <li className=" hover:cursor-pointer hover:text-gray-500"><span>&#9776;</span></li>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<HomePage navigationSelected={navigationSelected}/>}/>
                <Route path="/newPortfolio/" element={<HomePage navigationSelected={navigationSelected} setNavigationSelected={setNavigationSelected}/>}/>
            </Routes>
        </>
    )
}