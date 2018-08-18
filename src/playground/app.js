class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.deleteAllOptions = this.deleteAllOptions.bind(this)
        this.pickRandomOption = this.pickRandomOption.bind(this)
        this.addOption = this.addOption.bind(this)
        this.deleteOption = this.deleteOption.bind(this)
        this.state = {
            options: []
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

    pickRandomOption () {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options [randomNum]

        if (option) {
            alert (`You got ${option}`)
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
                <Action 
                    hasOptions={this.state.options.length > 0}
                    pickRandomOption={this.pickRandomOption}
                />
                <Options 
                    options={this.state.options}
                    deleteAllOptions = {this.deleteAllOptions}
                    deleteOption = {this.deleteOption}
                />
                <AddOption 
                    addOption={this.addOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subTitle && <h2>{props.subTitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.pickRandomOption}
                disabled={!props.hasOptions}>
                What should I do?
            </button>
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            Option: {props.option}
            <button 
                onClick={() => {
                    props.deleteOption(props.option)
                }}>
                remove
            </button>
        </div>
    )
}

const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove All</button>
            {
                props.options.length === 0 && <p>Please add option to get started...</p>
            }
            {
                props.options.map ((option) => (
                    <Option 
                        key={option}
                        option={option}
                        deleteOption={props.deleteOption}
                    />
                ))
            }
        </div>
    );
}

class AddOption extends React.Component {
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
                        <p>{this.state.error}</p>
                    )
                }
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))
