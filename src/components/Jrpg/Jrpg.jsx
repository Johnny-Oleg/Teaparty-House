import React from 'react';
import Tilt from 'react-tilt';

const Jrpg = ({ id, description }) => {
    console.log(description);
    return (
        <>
            <li>
                {`${id})  ${description?.title}`}
                <br/>
                <br/>
                <Tilt className="Tilt" options={{max : 40, perspective: 1000, easing:         "cubic-bezier(.03,.98,.52,.99)"}} /* style={{ height: 250, width: 250 }} */ >
                    <img className="Tilt-inner"
                        src={process.env.PUBLIC_URL + description?.art} 
                        style={{width: "150px", height: "auto"}} 
                        alt="jrpg" 
                    />   
                </Tilt>
                <br/>
            </li>
        </>
    )
}

export default Jrpg;