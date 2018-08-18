import React from 'react'

export default class AddOption extends React.Component {
    constructor (props) {
        super (props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption (event) {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()

        const error = this.props.addOption(option)
        
        if (!error) {
            event.target.elements.option.value = ''
        }
        //this is short hand for error: error - use only when both the names are same
        this.setState (() => ({ error }))
    }

    render () {
        return (
            <div>
                {
                    this.state.error && (
                        <p className="add-option__error">{this.state.error}</p>
                    )
                }
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input 
                        className="add-option__input" 
                        type="text" 
                        name="option"
                        autoComplete="off"
                        autoFocus="on"
                    ></input>
                    <button className="button" type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}