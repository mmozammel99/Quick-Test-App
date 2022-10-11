import React from 'react';

const Options = ({ option, handelOption }) => {
    return (
        <div class="form-check col-9 col-lg-5 text-start py-2 px-5 m-3 rounded border border-1 border-success shadow ">
            <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1 " onClick={() => handelOption(option)} />
            <label class="form-check-label " for="flexRadioDefault1"  >
                {option}
            </label>
        </div >

    )
};

export default Options;