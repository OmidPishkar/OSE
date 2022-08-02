import React from 'react'

import Search from '../pages/Search'
import Images from '../pages/Images'
import News from '../pages/News'
import Route from '../router/Route'



// --------------------------------------------------------------------------------
const Main = () => {
    return (
        <main className='my-5'>
            <Route path='/'>
                <Search/>
            </Route>

            <Route path='/images'>
                <Images/>
            </Route>

            <Route path='/news'>
                <News/>
            </Route>
        </main>
    )
}

export default Main