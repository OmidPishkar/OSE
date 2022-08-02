import React from 'react'
import Link from '../../router/Link'

const navLinks = [
    {title:'All' , path: '/'},
    {title:'Images' , path: '/images'},
    {title:'News' , path: '/news'}
] 

const Navbar = () => {
    const navlist = navLinks.map( (item , index) => {
        return(
            <li key={index} className='hover:bg-gray-100 px-3 py-1 text-lg font-medium cursor-pointer rounded-lg'>
                <Link to={item.path}>{item.title}</Link>
            </li>
        )
    } )

    return (
        <nav className='flex justify-center'>
            <ul className='flex gap-4 w-max flex-wrap justify-center items-center mb-2'>
                {navlist}    
            </ul>
        </nav>
    )
}

export default Navbar