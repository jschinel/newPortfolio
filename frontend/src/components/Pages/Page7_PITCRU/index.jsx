

export default function Project2() 
{
    return (
        <>
            <div className="flex flex-col h-full w-full justify-star">
                <div className="pt-10 h-5/6 overflow-y-scroll">
                    <a href="https://pitcru-7ee2d75f05d9.herokuapp.com/" target="_blank">
                        <h1 className="text-2xl pb-5 bold underline">PITCRU</h1>
                    </a>
                    <p className="flex pl-10">Description:</p>
                    <br />
                    <p className="pl-10 pr-10 text-left">This was a team project that was done through my course at General Assembly. My role during the development was the database manager. Although django was new to me I enjoyed learning how to incorporate their pre-built user profiles, extending those profiles, setting up API calls and managing the database. For this project we used PostgreSQL database named Neon in order to manage our data, we early into the project that our API did not give us a finite number within the endpoint we were talking to. In order to work with this we seeding our database with over 20,000 cars and allowed the user to search for any car that may not be available and if the car was not in the database it was then stored after the search results were gathered. Another struggle we encountered was finding images for the cars, this is where i got to learn about BS4 which we used as a data scrapper to grab images after doing an image google search of every car. </p>
                    <ul className="flex pt-10 pl-10 pb-5">Technologies Used:</ul>
                        <li className="pl-10 pr-10 text-left">BS4</li>
                        <li className="pl-10 pr-10 text-left">Django</li>
                        <li className="pl-10 pr-10 text-left">API-Ninjas</li>
                        <li className="pl-10 pr-10 text-left">Python</li>
                        <li className="pl-10 pr-10 text-left">HMTL</li>
                        <li className="pl-10 pr-10 text-left">Neon</li>
                        <li className="pl-10 pr-10 text-left">PostgreSQL</li>
                    <br />
                </div>
                <a className="bold text-2xl absolute bottom-20 left-5" href="https://github.com/jschinel/Pitcru" target="_blank">GitHub Repo</a>
            </div>
        </>
    )
}

