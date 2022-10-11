import React from 'react';

const Options = ({ option, handelOption }) => {
    return (
        <div className="form-check col-9 col-lg-5 text-start py-2 px-5 m-3 rounded border border-1 border-success shadow ">
            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 " onClick={() => handelOption(option)} />
            <label className="form-check-label " htmlFor="flexRadioDefault1"  >
                {option}
            </label>
        </div >

    )
};

export default Options;