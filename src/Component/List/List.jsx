

export default function List({ route }) {
    return (
        <li className="mr-10 hover:bg-amber-300 rounded-2xl px-3 ">
            <a href={route.path}>{route.name}</a>

        </li>
    )
}

 
