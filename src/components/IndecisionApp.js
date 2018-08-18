import React from 'react'
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'
import OptionModal from './OptionModal'

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteAllOptions = this.deleteAllOptions.bind(this)
        this.pickRandomOption = this.pickRandomOption.bind(this)
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
        this.clearSelectedOption = this.clearSelectedOption.bind(this)
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem ('options'))
            
            if (options) {
                this.setState (() => ({ options })) //shorthand when names are same i.e. options: options
            }
        } catch (e) {
            // DO Nothing if invalid state found on LocalStorage
        }
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const state = JSON.stringify (this.state.options)
            localStorage.setItem ('options', state)
        }
    }

    componentWillUnmount () {
        console.log ('Component will Unmount')
    }

    clearSelectedOption () {
        this.setState(() => ({ selectedOption: undefined }))
    }

    pickRandomOption () {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options [randomNum]

        if (option) {
            this.setState(() => ({
                selectedOption: option
            }))
        }
    }

    addOption (option) {
        if (!option) {
            return 'Option cannot be empty'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'Duplicate option not allwed'
        }

        this.setState ((prevState) => ({ options: prevState.options.concat(option) }))
    }

    deleteAllOptions () {
        // this.setState (() => {
        //     return {
        //         options: []
        //     }
        // })
        //Shorthand syntax - wrap object {} into ()
        this.setState (() => ({ options: [] }) )
    }

    deleteOption (optionToRemove) {
        this.setState ((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    }

    render () {
        const subTitle = 'Put your life in the hands of computer'

        return (
            <div>
                <Header subTitle={subTitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        pickRandomOption={this.pickRandomOption}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            deleteAllOptions = {this.deleteAllOptions}
                            deleteOption = {this.deleteOption}
                        />
                        <AddOption 
                            addOption={this.addOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearSelectedOption={this.clearSelectedOption}
                />
            </div>
        );
    }
}

export default IndecisionApp