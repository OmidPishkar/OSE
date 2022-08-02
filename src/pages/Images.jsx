import React , { useContext } from 'react'
import ImageLink from '../components/ImageLink'
import InputContext from '../context/input-context'
import SyncLoader from 'react-spinners/SyncLoader'

const Images = () => {
  const value = useContext(InputContext)


  const result = () => {
    if(value){
      const summary = value[1].results.map( (item , index) => {
        return (
          <ImageLink
            key={index}
            src={item.src}
            title={item.title}
            link={item.link}
          />
        )
      })
      return summary
    } 
    else if(value === null) {
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
    <div className='flex gap-4 items-center justify-center flex-wrap'>
      {result()}

      
    </div>
  )
}

export default Images