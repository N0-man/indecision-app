class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of computer'
        const options = ['Thing One', 'Thing Two', 'Thing Five']

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('You clicked')
    }

    render () {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render () {
        return (
            <div>
                Option: {this.props.option}
            </div>
        )
    }
}

class Options extends React.Component {
    handleRemoveAll () {
        alert('Wanna remove all???')
    }

    render () {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map ((option) => <Option key={option} option={option}/>)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption (event) {
        event.preventDefault()
        const option = event.target.elements.option.value.trim()

        if (option) {
            alert(`You got option ${option}`)
        }
    }

    render () {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"></input>
                    <button type="submit">Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))