export default function PageNum({num}) 
{
    return (
        <>
            <div className="absolute bottom-0 w-full">
                <div className="flex flex-row">
                    <h1 className="w-[50%] self-center text-right">{num}</h1>
                    <div className="flex w-[50%] h-[full] justify-end ">
                        <div className=" flex w-[65%] h-[full] justify-end gap-1 md:gap-3 sm:w-[50%] sm:gap-2 md:w-[60%] lg:w-[50%]">
                            <a className="" href="https://www.linkedin.com/in/jon-schinella/" target="_blank">
                                <img className=""src="/newPortfolio/LinkedIn.png"/>
                            </a>
                            <a className="" href="https://github.com/jschinel" target="_blank">
                                <img className=""src="/newPortfolio/GitHub.png"/>
                            </a>
                            <a  className="" href="/newPortfolio/Jon_Schinella_Resume.pdf" target="_blank">
                                <img className=""src="/newPortfolio/Resume.png"/>
                            </a>
                            <a className="pr-2" href="mailto:jonschinella@gmail.com">
                                <img className="justify-self-end pr-2"src="/newPortfolio/Gmail.png"/>
                            </a> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}