import React from 'react'
import Option from './Option'

/**
 * we can directly write to export as default
 * export default (props) => {
 * 
 * the only problem is when you see this componenet in react dev tool in chrome 
 * it would show as Unknown since it doesnt have any name
 * 
 * its always best to be explicit as show below
 */

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                    className="button button--link"
                    onClick={props.deleteAllOptions}
                >
                    Remove All
                </button>
            </div>
            {
                props.options.length === 0 && <p className="widget-message">Please add option to get started...</p>
            }
            {
                props.options.map ((option, index) => (
                    <Option 
                        key={option}
                        option={option}
                        count={index + 1}
                        deleteOption={props.deleteOption}
                    />
                ))
            }
        </div>
    );
}

export default Options