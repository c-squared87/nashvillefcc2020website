import React from "react"

class ContactForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        }
    }
    render() {
        return(
            <div>
                <h2 className="text-center font-bold text-xl">Contact Us</h2>
                <form className="border-2 border-black">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name"></input>
                    </div>
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" placeholder="Your Name"></input>
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="4"></textarea>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}


export default ContactForm