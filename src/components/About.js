import React from "react"
import Navmenu from "./NavMenu"
import PageTitle from "./PageTitle"
import PageText from "./PageText"

const About = () =>{
    return(
        <div>
            <Navmenu/>
            <PageTitle title="Learn About Us" />
            <PageText text="This is where the history and the bio of the group will go." />
        </div>
    )
}


export default About