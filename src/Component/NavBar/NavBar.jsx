import { IoMenu,IoClose } from "react-icons/io5";
import List from "../List/List";
import { useState } from "react";


export default function NavBar() {

    const [ open, setOpen ] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
    ];
    return (
        <nav>


            <div className="text-3xl md:hidden" onClick={() => setOpen(!open)

            }>
                {
                    open === true ?  <IoClose></IoClose> : <IoMenu></IoMenu>
                }


                
            </div>

            <ul className={
                `
                md:flex absolute md:static rounded-2xl duration-1000 bg-blue-500 p-7
                ${open ? 'top-8' : '-top-60'}
                `
            }>
                {
                    routes.map(route =>
                        <List key={route.id} route={route} ></List>
                    )
                }
            </ul>


        </nav>
    )
}
