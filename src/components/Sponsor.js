import React from "react"
import ContactForm from "./ContactForm"

const Sponsor = () =>{
    return(
        <div className="px-8">
            <h1 className="page-header">Become One Of Our Sponsors</h1>

            <p className="my-4">
                Use this area for highlighting our current sponsors and include copy on how to attract new ones.
            </p>
            
            <ContactForm />
        </div>
    )
}

export default Sponsor