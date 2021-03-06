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
    render () {
        return (
            <div>
                <button>What should I do?</button>
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
    render () {
        return (
            <div>
                {
                    this.props.options.map ((option) => <Option key={option} option={option}/>)
                }
            </div>
        );
    }
}

class AddOption extends React.Component {
    render () {
        return (
            <div>
                Add Option component
            </div>
        );
    }
}

const jsx = (
    <div>
        <IndecisionApp />
    </div>
)

ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))