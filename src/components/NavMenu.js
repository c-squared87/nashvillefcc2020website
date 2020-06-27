import React from "react"
import { Link } from "react-router-dom";

const NavMenu = () => {

    // TODO: Refactor a better solution than with setTimeout()
    // setTimeout(() => {
    //     let content = document.querySelector(".nav-menu");
    //     content.classList.remove('hidden');
    //     // console.log(content)
    // }, 2000)

    return (
        <div className="nav-menu mt-1 pl-2">
            <h1 className="text-4xl font-bold">freeCodeCamp Nashville</h1>

            <nav>
                <ul className="nav-menu__list">
                    <li>
                        <Link className="nav-link pr-2" to="/about">
                        About Us
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link pr-2" to="/events">
                            Events
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link pr-2" to="/sponsor">
                            Sponsor Us
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu