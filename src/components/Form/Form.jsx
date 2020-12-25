import React from 'react';

import './form.css';

const Form = () => {
    return (
        <div className="form-top">
            <h2>Add your Top 10 JRPG</h2>
            <form>
                <input className="form-top__input" type="text"/>
                <button className="form-top__btn">Submit</button>
            </form>
        </div>
    )
}

export default Form;