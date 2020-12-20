import React from 'react';

const Jrpg = ({ id, description }) => {
    console.log(description);
    return (
        <>
            <li>{`${id})  ${description?.title}`}</li>
            <img 
                src={process.env.PUBLIC_URL + description?.art} 
                style={{width: "150px", height: "auto"}} 
                alt="jrpg" 
            />        
        </>
    )
}

export default Jrpg;