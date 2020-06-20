import React from "react"
import NavMenu from "./NavMenu"
import PageTitle from "./PageTitle"
import PageText from "./PageText"
import ContactForm from "./ContactForm"

const Sponsor = () =>{
    return(
        <div>
            <NavMenu />
            <PageTitle title="Become One Of Our Sponsors" />
            <PageText text="Use this area for highlighting our current sponsors and include copy on how to attract new ones." />
            <ContactForm />
        </div>
    )
}

export default Sponsor