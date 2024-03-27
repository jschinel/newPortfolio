import { useEffect, useState} from "react"
import { Routes, Route, Link, useNavigate, Navigate} from "react-router-dom";
import PageNum from "./pagenum";
import Author from "../Pages/Page1_Intro"
import Navigation from "../Pages/Page2_Navigation";
import Experience from "../Pages/Page3_Experience";
import Resume from "../Pages/Page4_Resume";
import TopSkills from "../Pages/Page5_TopSkills";
import Project1 from "../Pages/Page6_Personal_Planner";
import Project2 from "../Pages/Page7_PITCRU";
import Game1 from "../Pages/Page8_Hangman";
import Personal from "../Pages/Page9_Personal";
import './styles.css'

export default function HomePage({navigationSelected,setNavigationSelected}) 
{
    const navigate =useNavigate()
    const ids= ['intro','experience','resume','skills','project1','project2','game1','personal']
    const [currentPage, setCurrentPage] = useState(JSON.parse(localStorage.getItem('PageNumber')))
    const [pageAmountForward, setPageAmountForward] = useState(0)
    const [pageAmountReverse, setPageAmountReverse] = useState(0)
    const [firstTransformed, setFirstTransformed] = useState(false);
    const [secondTransformed, setSecondTransformed] = useState(false);
    const [thirdTransformed, setThirdTransformed] = useState(false);
    const [fourthTransformed, setFourthTransformed] = useState(false);
    const [fifthTransformed, setFifthTransformed] = useState(false);
    const [sixthTransformed, setSixthTransformed] = useState(false);
    const [seventhTransformed, setSeventhTransformed] = useState(false);
    const [eighthTransformed, setEighthTransformed] = useState(false);
    const [firstPageDisplayIndex, setFirstPageDisplayIndex] = useState(20);
    const [secondPageDisplayIndex, setSecondPageDisplayIndex] = useState(19);
    const [thirdPageDisplayIndex, setThirdPageDisplayIndex] = useState(18);
    const [fourthPageDisplayIndex, setFourthPageDisplayIndex] = useState(17);
    const [fifthPageDisplayIndex, setFifthPageDisplayIndex] = useState(16);
    const [sixthPageDisplayIndex, setSixthPageDisplayIndex] = useState(15);
    const [seventhPageDisplayIndex, setSeventhPageDisplayIndex] = useState(14);
    const [eighthPageDisplayIndex, setEighthPageDisplayIndex] = useState(13);
    const waitTimeNext=1000; //Time to wait before changing z-index when going next page
    const waitTimePrev=1000; //Time to wait before changing z-index when going previous page
    const [pageElements,setPageElements]= useState([<Author/>,<Navigation NavigatePage={NavigatePage} currentPage={currentPage}/>,<Experience/>,<Resume/>,<TopSkills/>,<Project1/>,<Project2/>,<Game1/>,<Personal/>])
    
    function NavigatePage(PageNum)
    {
        console.log(PageNum, 'page num')
        console.log(JSON.parse(localStorage.getItem('PageNumber')), "current page")
        if(PageNum < JSON.parse(localStorage.getItem('PageNumber')))
        {
            const pageDiffMinus= (JSON.parse(localStorage.getItem('PageNumber')) - PageNum);
            console.log(pageDiffMinus,'pageDiff minus')
            setPageAmountReverse(pageDiffMinus)
        }
        if(PageNum > JSON.parse(localStorage.getItem('PageNumber')))
        {
            const pageDiffPlus= (PageNum-JSON.parse(localStorage.getItem('PageNumber')));
            setPageAmountForward(pageDiffPlus)
        }
    }
    useEffect(()=>{
        
        if(window.innerWidth>768)
        {
            NavigatePage(navigationSelected)
        }
        else
        {
            const element = document.getElementById(ids[navigationSelected-2])
            if(element)
            {
                element.scrollIntoView();
                setNavigationSelected()
            }
        }

    },[navigationSelected])
    useEffect(()=>{
        localStorage.setItem('PageNumber',currentPage)
    },[currentPage])
    useEffect(()=>{
        localStorage.setItem('PageNumber', 2)
    },[])

    useEffect(()=>{
        if(pageAmountForward!=0)
        {
            getNextPage()
        }
    },[pageAmountForward])

    useEffect(()=>{
        if(pageAmountReverse!=0)
        {
            getPrevPage()
        }
    },[pageAmountReverse])
    
    function getNextPage() {
        // Toggle the state to trigger the CSS transformation
        if(firstTransformed!=true)
        {
            setFirstTransformed(!firstTransformed);
            setTimeout(function() {
                setFirstPageDisplayIndex(1);
            }, waitTimeNext);       
        }
        if(firstTransformed==true)
        {
            if(secondTransformed==true)
            {
                if(thirdTransformed==true)
                {
                    if(fourthTransformed==true)
                    {
                        if(fifthTransformed==true)
                        {
                            if(sixthTransformed==true)
                            {
                                if(seventhTransformed==true)
                                {
                                    if(eighthTransformed!=true)
                                    {
                                        setEighthTransformed(!eighthTransformed);
                                        setTimeout(function() {
                                            setEighthPageDisplayIndex(7);
                                        }, waitTimeNext);
                                    }
                                }
                                if(seventhTransformed!=true)
                                {
                                    setSeventhTransformed(!seventhTransformed);
                                    setTimeout(function() {
                                        setSeventhPageDisplayIndex(6);
                                    }, waitTimeNext);     
                                } 
                            }
                            if(sixthTransformed!=true)
                            {
                                setSixthTransformed(!sixthTransformed);
                                setTimeout(function() {
                                    setSixthPageDisplayIndex(5);
                                }, waitTimeNext);      
                            }     
                        }
                        if(fifthTransformed!=true)
                        {
                            setFifthTransformed(!fifthTransformed);
                            setTimeout(function() {
                                setFifthPageDisplayIndex(5);
                            }, waitTimeNext);     
                        }   
                    }
                    if(fourthTransformed!=true)
                    {
                        setFourthTransformed(!fourthTransformed);
                        setTimeout(function() {
                            setFourthPageDisplayIndex(4);
                        }, waitTimeNext);     
                    }    
                }
                if(thirdTransformed!=true)
                {
                    setThirdTransformed(!thirdTransformed);
                    setTimeout(function() {
                        setThirdPageDisplayIndex(3);
                    }, waitTimeNext);       
                } 
            }
            if(secondTransformed!=true)
            {
                setSecondTransformed(!secondTransformed);
                setTimeout(function() {
                    setSecondPageDisplayIndex(2);
                }, waitTimeNext);       
            }       
        }
        setTimeout(function() {
            if(pageAmountForward!=0)
            {
                setPageAmountForward(pageAmountForward-1);
            }
        }, waitTimeNext)
        if(currentPage<10)
        {
            setCurrentPage(currentPage + 1)
        }
    }
    function getPrevPage() {
        if(eighthTransformed==false)
        {
            if(seventhTransformed==false)
            {
                if(sixthTransformed==false)
                {
                    if(fifthTransformed==false)
                    {
                        if(fourthTransformed==false)
                        {
                            if(thirdTransformed==false)
                            {
                                if(secondTransformed!=false)
                                {
                                    setSecondPageDisplayIndex(19);
                                    setTimeout(function() {
                                        setSecondTransformed(!secondTransformed);
                                    }, 1000);          
                                }
                                if(secondTransformed==false)
                                {
                                    if(firstTransformed!=false)
                                    {
                                        setFirstPageDisplayIndex(20);
                                        setTimeout(function() {
                                            setFirstTransformed(!firstTransformed);
                                        }, waitTimePrev);    
                                    }       
                                }
                            }
                            if(thirdTransformed!=false)
                            {
                                setThirdPageDisplayIndex(18);
                                setTimeout(function() {
                                    setThirdTransformed(!thirdTransformed); 
                                }, waitTimePrev);  
                            }
                        }
                        if(fourthTransformed!=false)
                        {
                            setFourthPageDisplayIndex(17);
                            setTimeout(function() {
                                setFourthTransformed(!fourthTransformed); 
                            }, waitTimePrev);  
                        }
                    }
                    if(fifthTransformed!=false)
                    {
                        setFifthPageDisplayIndex(16);
                        setTimeout(function() {
                            setFifthTransformed(!fifthTransformed); 
                        }, waitTimePrev);  
                    }
                }
                if(sixthTransformed!=false)
                {
                    setSixthPageDisplayIndex(15);
                    setTimeout(function() {
                        setSixthTransformed(!sixthTransformed); 
                    }, waitTimePrev);  
                }
            }
            if(seventhTransformed!=false)
            {
                setSeventhPageDisplayIndex(14);
                setTimeout(function() {
                    setSeventhTransformed(!seventhTransformed); 
                }, waitTimePrev);  
            }
        }
        if(eighthTransformed!=false)
        {
            setEighthPageDisplayIndex(13);
            setTimeout(function() {
                setEighthTransformed(!eighthTransformed); 
            }, waitTimePrev);  
        }
        setTimeout(function() {
            if(pageAmountReverse!=0)
            {
                setPageAmountReverse(pageAmountReverse-1);
            }
        }, waitTimePrev)
        if(currentPage>2)
        {
            setCurrentPage(currentPage - 1)
        }
    }
    console.log(currentPage, 'current page')
    // console.log(pageAmountReverse, 'pageAmountReverse')
    return (
        <>
            <div className="h-[100dvh] bg-[url('https://getwallpapers.com/wallpaper/full/b/f/0/1202616-gorgerous-old-time-wallpaper-1920x1200.jpg')] bg-no-repeat bg-cover">
                <div className="pt-10 flex flex-col md:flex-row h-[90dvh] overflow-y-scroll scroll-pb-20">
                    <div className="hidden md:flex flex-col justify-around h-auto mx-auto mt-5 text-center ">
                        <span className="text-xl md:text-6xl hover:cursor-pointer" onClick={getPrevPage}>&#11160;</span>
                    </div>
                    <div className="gap-5 relative flex flex-col md:flex-row md:justify-around md:border-4 md:border-black pb-10 h-[100dvh] md:h-[80dvh] w-4/5 mx-auto mt-5 text-center rounded-lg ">
                        <div id='cover' className=" hidden md:block pt-20 border-2 border-black flex md:-left-15 md:-top-5 bg-[url('https://storage.googleapis.com/webdesignledger.pub.network/LaT/edd/2016/02/old-book-cover-texture-15.jpg')] bg-no-repeat bg-cover w-[100%] h-[90dvh] md:absolute md:w-[110%] md:h-[105%]">
                        </div>
                        <div id="intro" className="pt-10 border-2 border-black relative flex md:left-0 bg-[url('https://archive.org/services/img/historiadellacit02summ_0/full/pct:200/0/default.jpg')] w-[100%] h-[100%] md:absolute md:w-[50%] md:h-[100%] flex justify-center items-center">
                            {pageElements[0]}
                            <div className="absolute bottom-0 w-full">
                                <div className="flex flex-row">
                                    <h1 className="hidden md:block w-[50%] self-center text-right">1</h1>
                                    <div className="block md:hidden">
                                        {<PageNum num={1}/>}
                                    </div>
                                </div> 
                            </div>
                        </div>
                        <div className={`absolute bottom-0 hidden md:flex md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${firstTransformed ? 'flipped': 'normal'}`} style={{zIndex: firstPageDisplayIndex}} >
                            {pageElements[1]}
                            {<PageNum num={2}/>}
                        </div>
                        <div id="experience" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${secondTransformed ? 'flipped': 'normal'}`} style={{zIndex: secondPageDisplayIndex}}>
                            {pageElements[2]}
                            {<PageNum num={3}/>}
                        </div>
                        <div id="resume" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${thirdTransformed ? 'flipped': 'normal'}`} style={{zIndex: thirdPageDisplayIndex}}>
                            {pageElements[3]}
                            {<PageNum num={4}/>}
                        </div>
                        <div id="skills">
                            <div className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${fourthTransformed ? 'flipped': 'normal'}`} style={{zIndex: fourthPageDisplayIndex}}>
                                {pageElements[4]}
                                {<PageNum num={5}/>}
                            </div>
                        </div>
                        <div id="project1" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${fifthTransformed ? 'flipped': 'normal'}`} style={{zIndex: fifthPageDisplayIndex}}>
                            {pageElements[5]}
                            {<PageNum num={6}/>}
                        </div>
                        <div id="project2" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${sixthTransformed ? 'flipped': 'normal'}`} style={{zIndex: sixthPageDisplayIndex}}>
                            {pageElements[6]}
                            {<PageNum num={7}/>}
                        </div>
                        <div id="game1" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${seventhTransformed ? 'flipped': 'normal'}`} style={{zIndex: seventhPageDisplayIndex}}>
                            {pageElements[7]}
                            {<PageNum num={8}/>}
                        </div>
                        <div id="personal" className={`relative flex h-[90dvh] w-[100%] md:absolute md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] ${eighthTransformed ? 'flipped': 'normal'}`} style={{zIndex: eighthPageDisplayIndex}}>
                            {pageElements[8]}
                            {<PageNum num={9}/>}
                        </div>
                        <div className={`absolute h-[50%] w-[100%] hidden md:flex md:h-[100%] md:w-[50%] md:right-0 bg-[#ffebcd] normal`} style={{zIndex: 0}}>
                            <h1 className="text-xl md:text-6xl pb-[15px] md:pb-[150px]">THE END</h1>
                            {pageElements[1]}
                            {<PageNum num={10}/>}
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col justify-around h-[90dvh] mx-auto mt-5 text-center align-middle">
                        <span className="nextButton text-xl md:text-6xl hover:cursor-pointer" onClick={getNextPage}>&#11162;</span>
                    </div>
                </div>
            </div>
        </>
    )
}