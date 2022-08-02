import React , {useContext} from 'react'
import NewsLinks from '../components/NewsLinks'
import InputContext from '../context/input-context'
import SyncLoader from 'react-spinners/SyncLoader'

const News = () => {
  const value = useContext(InputContext)

  const result = () => {
    if(value){
      const summary = value[2].results.map( (item , index) => {
        return(
          <NewsLinks
            title={item.title}
            link={item.link}
            details={item.description}
            date={item.date}
            webname={item.webname}
            key={index}
          />
        )
      })
      return summary
    } 
    else if(value === null){
      return <h1 className='py-10 text-2xl font-semibold w-full text-center'>Please Search any thing!!</h1>
    }
    else{
      return <div className='w-full flex justify-center py-10'>
        <SyncLoader
          size='15px'
          margin='4px'
          color='#000'
          loading='true'
          speedMultiplier='1'
        />
      </div>
    }
  }

  return (
    <div className='flex flex-col gap-y-3'>
      {result()}
    </div>
  )
}

export default News