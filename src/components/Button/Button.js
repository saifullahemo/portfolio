import React from 'react'
import Button from 'react-bootstrap/Button';


const showButton = ({children, onClick}) => {
    
    return(
        <>
            <Button onClick={onClick} className="btn-primary showBtn">Show me more</Button>
        </>
    )
}

export default showButton;