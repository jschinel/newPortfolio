

export default function Game1() 
{
    return (
        <>
            <div className="relative flex flex-col h-[90dvh] w-full justify-start">
                <div className="pt-10 h-5/6 overflow-y-scroll">
                    <a href="https://jschinel.github.io/hangman/" target="_blank">
                        <h1 className="text-2xl pb-5 bold underline">Hangman</h1>
                    </a>
                    <p className="flex pl-10">Description:</p>
                    <br />
                    <p className="pl-10 pr-10 text-left">Being one of my first projects I ever made it was excited to actually create a functional game using DOM methodology and the basic languages I am able to allow the user to play of hangman. Pick from 4 categories and word will be randomly generated. Dont know english? No problem, theres also a spanish translator button that will automatically convert all the words to spanish (including the hangman word)</p>
                    <ul className="flex pt-10 pl-10 pb-5">Technologies Used:</ul>
                        <li className="pl-10 pr-10 text-left">JavaScript</li>
                        <li className="pl-10 pr-10 text-left">CSS</li>
                        <li className="pl-10 pr-10 text-left">HTML</li>
                        <li className="pl-10 pr-10 text-left">DOM methodology</li>
                    <br />
                </div>
                <a className="bold text-2xl absolute bottom-20 left-5" href="https://github.com/jschinel/hangman" target="_blank">GitHub Repo</a>
            </div>
        </>
    )
}