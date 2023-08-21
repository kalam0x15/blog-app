import {Link} from 'react-router-dom';


const Navbar = () =>{
    return(
        <>
        <div className='bg-secondary '>
        <ul className="nav justify-content-end nav-underline  display-6 mx-5">
            
            <li className="nav-item">
                <Link className='nav-link text-light m-2 ' aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link text-light m-2" to="/About">About</Link>
            </li>
            <li class="nav-item">
                <Link className="nav-link text-light m-2" to="/Articles">Add Blog</Link>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Navbar;