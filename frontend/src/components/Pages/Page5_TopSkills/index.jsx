


export default function TopSkills() 
{
    
    return (
        <>
            <div className="flex flex-col h-full w-full justify-start">
                <div className="pt-10 h-5/6 overflow-y-scroll">
                    <h1 className="text-2xl pb-5 bold underline">Skills & Certs</h1>
                    <p className="pl-10 pr-10 text-left">Over the years within the electronics and controls field I have attained a couple of certificates and have became more self-aware to which skills are my best. Below I have listed the top skills that i have developed during my professional career.</p>
                    {/* Top Skills */}
                    <h1 className="flex pt-10 pl-10 pb-5 ">Top General Skills:</h1>
                    <li className="pl-10 pr-10 text-left">Project Management</li>
                    <li className="pl-10 pr-10 text-left">Communication</li>
                    <li className="pl-10 pr-10 text-left">Electrical and Mechanical Diagnostics</li>
                    <li className="pl-10 pr-10 text-left">Time Management</li>
                    <li className="pl-10 pr-10 text-left">Code Debugging</li>
                    <li className="pl-10 pr-10 text-left">New Software Implementation</li>
                    <li className="pl-10 pr-10 text-left">Datasheet or Documentation Referencing</li>
                    {/* Certificates */}
                    <h1 className="flex pt-10 pl-10 pb-5">Certs:</h1>
                    <a href="/Certs/GeneralAssembly.pdf" target="_blank" className="hover:text-blue-500">                    
                        <li className="pl-10 pr-10 text-left">General Assembly (SEI Course)</li>
                    </a>
                    <a href="/Certs/EPLAN.pdf" target="_blank" className="hover:text-blue-500">                    
                        <li className="pl-10 pr-10 text-left">E-Plan Certificate</li>
                    </a>
                    <a href="/Certs/" target="_blank">                    
                        <li className="pl-10 pr-10 text-left">UL (Picture Coming Soon)</li>
                    </a>
                    <a href="/Certs/" target="_blank">                    
                        <li className="pl-10 pr-10 text-left">Fanuc Level 1 (Picture Coming Soon)</li>
                    </a>
                    <a href="/Certs/" target="_blank">                    
                        <li className="pl-10 pr-10 text-left">Fanuc Level 2 (Picture Coming Soon)</li>
                    </a>
                    <a href="/Certs/Bachelor.png" target="_blank" className="hover:text-blue-500">                    
                        <li className="pl-10 pr-10 text-left">Bachelors Degree</li>
                    </a>
                    <a href="/Certs/Associates.png" target="_blank" className="hover:text-blue-500">                    
                        <li className="pl-10 pr-10 text-left">Associates Degree</li>
                    </a>
                    <a href="/Certs/HighSchool.png" target="_blank" className="hover:text-blue-500">                    
                        <li className="pl-10 pr-10 text-left">HighSchool Diploma</li>
                    </a>
                </div>
            </div>
        </>
    )
}