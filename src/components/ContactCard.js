import React from "react"

function ContactCard(props){
    console.log(props)
    return(
        <div className="contact-card">
            <h2>{props.contact.name}</h2>
            <p>{props.contact.phonumber}</p>


        </div>
    )
}
export default ContactCard