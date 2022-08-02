import React from 'react'
import SearchBox from '../components/SearchBox/SearchBox'
import Navbar from '../components/Navbar/Navbar'

const Header = ( {userSearch} ) => {
    const returnValue = (value) => userSearch(value)

    return (
        <header className='border-b-2 border-gray-400 mb-4'>
            <SearchBox formCallback={returnValue}/>

            <Navbar/>

        </header>
    )
}

export default Header