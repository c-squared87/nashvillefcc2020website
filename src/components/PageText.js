import React from "react"

function PageText(props){
    return <div>
                <p className="m-1 p-2 text-m">
                    {props.text}
                </p>
            </div>
}

export default PageText