class IndecisionApp extends React.Component {
    render () {
        const title = 'Indecision'
        const subTitle = 'Put your life in the hands of computer'
        const options = ['Thing One', 'Thing Two', 'Thing Five']

        return (
            <div>
                <Header title={title} subTitle={subTitle}/>
                <Options options={options}/>
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
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }

    handleRemoveAll () {
        console.log(this.props.options)
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


ReactDOM.render(<IndecisionApp /> , document.getElementById('app'))
