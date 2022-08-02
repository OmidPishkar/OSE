import { useEffect , useReducer } from "react"
import { register , unregister } from './history'

const generateId = (function(){
    let id = 0
    return () => {
        id += 1
        return id
    }
})()

const Route = ( {path , children} ) => {
    const [ignore , forceUpdate] = useReducer(x => x + 1 , 1)
    
    useEffect( () => {
        const id = generateId()
        register(id , forceUpdate)
        return () => {
            unregister(id)
        }
    } , [])

    const pathname = window.location.pathname

    if(pathname !== path) return null
    else return children
}

export default Route