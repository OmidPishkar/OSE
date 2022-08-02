import { historyPushState } from "./history"

const Link = ( {children , to} ) => {
    const handleClick = event => {
        event.preventDefault()
        historyPushState( {} , '' , to)
    }

    return(
        <a onClick={handleClick} href={to}>
            {children}
        </a>
    )
}

export default Link