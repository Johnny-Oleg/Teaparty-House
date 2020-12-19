import React from 'react';

import User from '../User/User';

const UsersList = ({ users }) => {
    console.log(users);
    return (
        <div>
            {users.map((item, index) => {
                return (
                    <div key={item.id}>
                        {/* <User user={item} /> */}
                        {item.name}
                        {item.top.map(jrpg => {
                            return (
                                <>
                                    <li key={jrpg.id}>{jrpg.id + ': ' + jrpg.description?.title}</li>
                                    <img src={process.env.PUBLIC_URL + jrpg.description?.art} style={{width: "150px", height: "auto"}} />
                                    {/* <img src={require(jrpg.description.art)} alt="art" style={{width: "200px", height: "auto"}} /> */}
                                    {console.log(jrpg)}
                                </>  
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default UsersList;