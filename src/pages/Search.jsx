import React , { useContext } from 'react'
import SearchLink from '../components/SearchLink'
import InputContext from '../context/input-context'
import SyncLoader from 'react-spinners/SyncLoader'

const Search = () => {
  const value = useContext(InputContext)

  const result = () => {
    if(value){
      const summary = value[0].results.map( (item , index) => {
        return (
          <SearchLink
            key={index}
            title={item.title}
            link={item.link}
            description={item.description}
          />
        )
      })
      return summary
    } else if(value === null) {
      return <h1 className='py-10 text-2xl font-semibold w-full text-center'>Please Search any thing!!</h1>
    } else {
      return (
        <div className='w-full flex justify-center py-10'>
          <SyncLoader
            size='15px'
            margin='4px'
            color='#000'
            loading='true'
            speedMultiplier='1'
          />
        </div>
      )
    }
  }
  
  return (
    <div className='px-2 sm:px-0'>
      {result()}
    </div>
  )
}

export default Search