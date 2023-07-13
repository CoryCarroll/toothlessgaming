import React from "react";

const About = () => {
    return (
        <div className="flex p-10 mt-96 pt-72">
            <div>
            <img className='object-cover shadow-xl shadow-green-500/100' src='images/toothlesspic.png' alt="toothless"/>
            </div>
            <div className="text-slate-100 text-xl ">
            <h1 className="text-4xl font-bold">The name is Toothless!</h1>
                <p className="font-medium">From the moment I played Pokemon Blue on gameboy color, my love and appreciation for games ignited. I grew up playing games like Pokemon, Mario, Call of Duty & Destiny. As I grew older my love for gaming never dulled. ToothlessHB (Toothless the Hill Billy) became my first xbox gamertag on xbox live at 15 years old after losing my left front tooth in a boxing match. I would eventually change the name multiple times but nothing ever felt like me. Years pass, the love, dedication, and appreciation never dulled, at this point the only thing that made sense was start streaming and build a community with people that share that same passion. After back and forths trying to come up with a solid alias for myself, it only felt right to return to my roots, thus Toothless was reimaged.\
                </p>
            <p className="font-medium pt-8">I live in Salt Lake City with my beautiful wife and our two goofy dogs. I am a front end web developer by day and Toothless streaming games by night. I enjoy camping, hiking and seeing new places. My wife and I are always planning our next getaway to escape the world for a bit.</p>
            </div>
        </div>
    )
}

export default About;