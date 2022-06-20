import React from 'react';
import PropTypes from 'prop-types';

import Jrpg from './Jrpg/Jrpg';

const JrpgList = ({ userId, top }) => {
    return (
        <ul className="user-top__list">
            {top.map(jrpg => <Jrpg key={jrpg.id} userId={userId} {...jrpg} />)}
        </ul>
    )
}

JrpgList.propTypes = {
    top: PropTypes.arrayOf(PropTypes.object),
}

export default JrpgList;