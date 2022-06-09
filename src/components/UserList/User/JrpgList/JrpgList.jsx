import React from 'react';
import PropTypes from 'prop-types';

import Jrpg from './Jrpg/Jrpg';

const JrpgList = ({ top }) => {
    return (
        <ul className="user-top__list">
            {top.map(jrpg => <Jrpg key={jrpg.id} {...jrpg} />)}
        </ul>
    )
}

JrpgList.propTypes = {
    top: PropTypes.arrayOf(PropTypes.object),
}

export default JrpgList;