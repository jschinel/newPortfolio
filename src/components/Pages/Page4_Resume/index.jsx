

export default function Resume() 
{
    return (
        <>
            <div className="flex flex-col h-5/6 justify-start w-11/12 bg-white overflow-y-scroll pb-20">
                <h1 className="pt-5 pb-2 text-2xl">JON SCHINELLA</h1>
                <div className="flex self-center justify-center w-11/12">
                    <li className="list-none text-center text-sm">Negaunee, MI, 49866 | 517-960-4241 | <a href="mailto:jonschinella@gmail.com">jonschinella@gmail.com</a> | <a href="https://www.linkedin.com/in/jon-schinella/" target="_blank">LinkedIn</a> | <a href="https://github.com/jschinel" target="_blank">GitHub</a></li>
                </div>

                {/* Main Intro */}

                <div className="self-center border-b-2 border-black w-11/12">
                    <h1 className="pt-5 text-md font-bold">FULLSTACK DEVELOPER</h1>                    
                </div>
                <p className="text-left pt-1 w-11/12 text-xs self-center">With over 8 years of experience in the electronics/controls field I am extremely excited to continue my career path with software development. I have an extensive background in electronics, team-leading and diagnostic skills that I am sure will be utilized within my new field</p>

                {/* Technical Skill */}

                <div className="self-center border-b-2 border-black w-11/12">
                    <h1 className="pt-5 text-md font-bold">TECHNICAL & INTERPERSONAL SKILLS</h1>                    
                </div>
                <div className="flex w-11/12 self-center items-baseline">
                    <h1 className="font-bold text-left text-nowrap text-sm">Languages:</h1>
                    <p className="text-xs pl-2 text-left">JavaScript, HTML, CSS, Python, Markdown</p>  
                </div>
                <div className="flex w-11/12 self-center items-baseline">
                    <h1 className="font-bold text-left text-nowrap text-sm">Libraries and Frameworks:</h1>
                    <p className="text-xs pl-2 text-left">Tailwind, Express, Mongoose, Node, React, Django, Axios.</p>  
                </div>
                <div className="flex w-11/12 self-center items-baseline">
                    <h1 className="font-bold text-left text-nowrap text-sm">Databases and other:</h1>
                    <p className="text-xs pl-2 text-left">Mongo DB, Neon, GitHub, Heroku, Postgres</p>  
                </div>
                <div className="flex w-11/12 self-center items-baseline">
                    <h1 className="font-bold text-left text-nowrap text-sm">Interpersonal skills:</h1>
                    <p className="text-xs pl-2 text-left"> Team Leadership, Organization, Communication skills with emphasis on client communication</p>  
                </div>
                <div className="self-center border-b-2 border-black w-11/12">
                    <h1 className="pt-5 text-md font-bold">TECHNICAL PROJECTS</h1>                    
                </div>

                {/* Projects */}

                {/* Project #1 */}
                <div className="self-center border-b-2 border-black w-11/12">
                    <div className="flex w-11/12 self-center items-baseline">
                        <h1 className="font-bold text-left text-nowrap text-sm pr-2">Personal Planner</h1>
                        <li className="list-none text-center text-sm"><a className="text-blue-700 font-bold underline" href="https://github.com/jschinel/Capstone" target="_blank">GitHub</a> - <a className="text-blue-700 font-bold underline" href="https://personalplanner-11519afe1d1f.herokuapp.com/" target="_blank">Heroku</a></li>
                    </div>
                    <div className="flex w-11/12 self-center items-baseline">
                        <h1 className="font-bold text-sm">Technology:</h1>
                        <p className="text-xs pl-2 text-left">html | css | javascript | express | node | mongoose | mongodb | react </p>
                    </div>
                    <div className="flex w-11/12 self-center items-baseline">
                        <h1 className="font-bold text-sm">Description:</h1>
                        <p className="text-xs pl-2 text-left">This project is a display of how much I can learn. Being the last project of my college I developed site with calendar scheduling, embedded spotify music and user authentication.</p>
                    </div>
                    <div className="flex flex-col w-11/12 pb-5 self-center items-baseline">
                        <h1 className="font-bold text-sm text-nowrap">Notable Features:</h1>
                        <li className="text-xs pt-2 pl-2 text-left" ><b>MERN</b> - MERN stack structure was incorporated into this project with frontend and backend operations clearly separated into folder structures.</li>
                        <li className="text-xs pl-2 text-left"><b>Spotify Web API</b> – Log in and play some music! This was a very technical challenge but i was able to accomplish this and the PKCE verification process.</li>
                        <li className="text-xs pl-2 text-left"><b>JWT</b> - For the normal site log in dove into the JWT token authorization</li>
                        <li className="text-xs pl-2 text-left"><b>Calendar Scheduler</b> – This is a java based program which shows my skills in data manipulation and processing with mongoDB</li>
                    </div>
                </div>
                {/* Project #2 */}
                <div className="self-center w-11/12">
                    <div className="flex w-11/12 pt-5 self-center items-baseline">
                        <h1 className="font-bold text-left text-nowrap text-sm pr-2">Pitcru</h1>
                        <li className="list-none text-center text-sm"><a className="text-blue-700 font-bold underline" href="https://github.com/jschinel/Pitcru" target="_blank">GitHub</a> - <a className="text-blue-700 font-bold underline" href="https://pitcru-7ee2d75f05d9.herokuapp.com/about/" target="_blank">Heroku</a></li>
                    </div>
                    <div className="flex w-11/12 self-center items-baseline">
                        <h1 className="font-bold text-sm">Technology:</h1>
                        <p className="text-xs pl-2 text-left">html | css | python | bs4 | django </p>
                    </div>
                    <div className="flex w-11/12 self-center items-baseline">
                        <h1 className="font-bold text-sm">Description:</h1>
                        <p className="text-xs pl-2 text-left">This was a group project, my responsibilities were to manage all database connections,apis,schemas,etc</p>
                    </div>
                    <div className="flex flex-col w-11/12 pb-5 self-center items-baseline">
                        <h1 className="font-bold text-sm text-nowrap">Notable Features:</h1>
                        <li className="text-xs pt-2 pl-2 text-left" ><b>APIs</b> – In this application I got to dive into making API calls using API ninjas car database</li>
                        <li className="text-xs pl-2 text-left"><b>BS4</b> – I incorporated Beautiful Soup to access images rendered from a google search</li>
                        <li className="text-xs pl-2 text-left"><b>User Authentication</b> – I was on the forefront for developing the user authentication in the Django framework and extending a model onto the Django user model</li>
                        <li className="text-xs pl-2 text-left"><b>Model Relationship</b> – All the models and relationships were my responsibility during development</li>
                    </div>
                </div>

                {/* Experience */}

                {/* Nagel */}

                <div className="self-center border-b-2 border-black w-11/12">
                    <h1 className="pt-5 text-md font-bold">EXPERIENCE</h1>                    
                </div>
                <div className="flex flex-col w-11/12 pb-5 pt-2 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">Nagel, Controls Engineer</h1>
                        <p className="text-xs">Ann Arbor, MI, 2015 – 2023</p>
                    </div>
                    <li className="text-xs pt-2 pl-2 text-left" >Developed and installed Industrial machines, leveraging skills in programming with RSlogix 5000, TIA portal, and Simatic S7</li>
                    <li className="text-xs pl-2 text-left">Collaborated closely with customers and team members during installs and development, showcasing strong teamwork and communication skills.</li>
                    <li className="text-xs pl-2 text-left">Integrated IoT devices into control systems, demonstrating adaptability to emerging technologies.</li>
                </div>

                {/* Potlach */}

                <div className="flex flex-col w-11/12 pb-5 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">Potlatch Lumber, Electrical Technician</h1>
                        <p className="text-xs">Gwinn, MI, 2014 – 2015</p>
                    </div>
                    <li className="text-xs pt-2 pl-2 text-left" >Led electrical diagnostics, showcasing troubleshooting skills and proficiency in programming RSlogix 500, 5000, and Modicon.</li>
                    <li className="text-xs pl-2 text-left">Implemented preventive maintenance strategies, enhancing system reliability and minimizing downtime.</li>
                </div>
                
                {/* Tutor */}

                <div className="flex flex-col w-11/12 pb-5 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">Northern Michigan University, ET420 Tutor</h1>
                        <p className="text-xs">Marquette, MI, 2013 – 2013</p>
                    </div>
                    <li className="text-xs pt-2 pl-2 text-left" >Provided afterhours support for C programming, showcasing teaching and mentoring abilities.</li>
                    <li className="text-xs pl-2 text-left">Programmed with microchip 16f and 18f series</li>
                    <li className="text-xs pl-2 text-left">Developed logic for Arduino applications, demonstrating a strong foundation in embedded systems</li>
                </div>

                {/* Education */}

                <div className="self-center border-b-2 border-black w-11/12">
                    <h1 className="pt-5 text-md font-bold">EDUCATION</h1>                    
                </div>


                {/* General Assembly */}

                <div className="flex flex-col w-11/12 pb-5 pt-2 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">General Assembly</h1>
                        <p className="text-xs">Remote, Certificate: 03/2024</p>
                    </div>
                    <p className="text-xs pt-2 text-left" >Full-stack software engineering 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.</p>
                </div>

                {/* Northern Michigan Univerity Bachelors */}

                <div className="flex flex-col w-11/12 pb-5 pt-2 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">Northern Michigan University</h1>
                        <p className="text-xs">Marquette,MI, Graduated: 01/2014 </p>
                    </div>
                    <h1 className="text-sm pt-2 text-left">Bachelors: Electrical Engineering Technology</h1>
                    <p className="text-xs text-left" >Electrical Engineering 4 year program focused on the theoretical formulas and overall design of electrical circuitry. Excelled in micro chip programming using 16f and 18f series microchips and Arduinno applications.</p>
                </div>
                
                {/* Northern Michigan Univerity Associates */}

                <div className="flex flex-col w-11/12 pb-5 pt-2 self-center items-baseline">
                    <div className="flex justify-between w-11/12">
                        <h1 className="font-bold text-sm text-nowrap">Northern Michigan University</h1>
                        <p className="text-xs">Marquette,MI, Graduated: 01/2014 </p>
                    </div>
                    <h1 className="text-sm pt-2 text-left">Associates: Industrial Power Technology</h1>
                    <p className="text-xs text-left" >2 year program focused on industrial substation, switch yards, energy distribution and relay mechanics.</p>
                </div>
            </div>
        </>             
    )
}