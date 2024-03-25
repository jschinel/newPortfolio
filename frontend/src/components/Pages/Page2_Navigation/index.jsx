import { set } from "mongoose";
import { useState } from "react";
import { Routes, Route, Link, useNavigate} from "react-router-dom";





export default function Navigation({NavigatePage})
{

    return (
        <>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(2)}}>Intro</li>
                    <p className="text-lg">(Page 1-2)</p>                    
                </div>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(3)}}>Experience</li>
                    <p className="text-lg">(Page 3)</p>                    
                </div>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(4)}}>Resume</li>
                    <p className="text-lg">(Page 4-5)</p>                    
                </div>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(6)}}>Projects</li>
                    <p className="text-lg">(Page 6-7)</p>                    
                </div>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(8)}}>Games</li>
                    <p className="text-lg">(Page 8)</p>                    
                </div>
                <div className="flex w-full justify-center items-center">
                    <li className=" pr-5 text-4xl text-center list-none hover:text-[#C19A6B] hover:cursor-pointer" onClick={()=>{NavigatePage(9)}}>Personal</li>
                    <p className="text-lg">(Page 9)</p>                    
                </div>
        </>
    )
}