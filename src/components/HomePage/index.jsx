import { useEffect, useState} from "react"
import { Routes, Route, Link, useNavigate} from "react-router-dom";
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

export default function HomePage() 
{
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
            <div className="flex">
                <div className="flex flex-col justify-around h-[90dvh] mx-auto mt-5 text-center ">
                <span className="text-6xl hover:cursor-pointer" onClick={getPrevPage}>&#11160;</span>
                </div>
                <div className="relative flex flex-row justify-around border-4 border-black h-[90dvh] w-4/5 mx-auto mt-5 text-center rounded-lg">
                    <div className="absolute left-0 h-full bg-[#ffebcd] w-[50%] flex justify-center items-center">
                        {pageElements[0]}
                        <div className="absolute bottom-0 w-full">
                            <div className="flex flex-row">
                                <h1 className="w-[50%] self-center text-right">1</h1>
                            </div> 
                        </div>
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${firstTransformed ? 'flipped': 'normal'}`} style={{zIndex: firstPageDisplayIndex}} >
                        {pageElements[1]}
                        {<PageNum num={2}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${secondTransformed ? 'flipped': 'normal'}`} style={{zIndex: secondPageDisplayIndex}}>
                        {pageElements[2]}
                        {<PageNum num={3}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${thirdTransformed ? 'flipped': 'normal'}`} style={{zIndex: thirdPageDisplayIndex}}>
                        {pageElements[3]}
                        {<PageNum num={4}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${fourthTransformed ? 'flipped': 'normal'}`} style={{zIndex: fourthPageDisplayIndex}}>
                        {pageElements[4]}
                        {<PageNum num={5}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${fifthTransformed ? 'flipped': 'normal'}`} style={{zIndex: fifthPageDisplayIndex}}>
                        {pageElements[5]}
                        {<PageNum num={6}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${sixthTransformed ? 'flipped': 'normal'}`} style={{zIndex: sixthPageDisplayIndex}}>
                        {pageElements[6]}
                        {<PageNum num={7}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${seventhTransformed ? 'flipped': 'normal'}`} style={{zIndex: seventhPageDisplayIndex}}>
                        {pageElements[7]}
                        {<PageNum num={8}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] ${eighthTransformed ? 'flipped': 'normal'}`} style={{zIndex: eighthPageDisplayIndex}}>
                        {pageElements[8]}
                        {<PageNum num={9}/>}
                    </div>
                    <div className={`absolute right-0 bg-[#ffebcd] normal`} style={{zIndex: 0}}>
                        <h1 className="text-6xl pb-[150px]">THE END</h1>
                        {pageElements[1]}
                        {<PageNum num={10}/>}
                    </div>
                </div>
                <div className="flex flex-col justify-around h-[90dvh] mx-auto mt-5 text-center align-middle">
                    <span className="nextButton text-6xl hover:cursor-pointer" onClick={getNextPage}>&#11162;</span>
                </div>
            </div>
        </>
    )
}