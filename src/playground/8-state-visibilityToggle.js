class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggle = this.handleToggle.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleToggle () {
        this.setState ((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render () {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{(this.state.visibility)? 'Hide Details': 'Show Details'}</button>
                {
                    this.state.visibility && (
                        <div>
                            <p>Ahh! you clicked... here are some details for you</p>
                        </div>
                    )
                }
            </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'))
