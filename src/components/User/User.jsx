import React from 'react';

const User = ({ name, avatar, id, top }) => {
    console.log(name, top);
    return (
        <div>
            <li>{name}</li>
            {/* {top.map(jrpg => {
                return (
                    <>
                        <li key={jrpg.id}>{jrpg.id + ': ' + jrpg.description?.title}</li>
                        <img src={process.env.PUBLIC_URL + jrpg.description?.art} style={{width: "150px", height: "auto"}} />
                        {console.log(jrpg.description?.art)}
                    </>  
                )
            })} */}
        </div>
    )
};

export default User;