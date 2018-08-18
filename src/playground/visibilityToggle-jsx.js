const data = {
    title: 'Visibility Toggle',
    showMessage: false,
    message: 'Ahh! you clicked... here are some details for you'
}

const toggle = () => {
    data.showMessage = !data.showMessage
    render()
}

const render = () => {
    const element = (<div>
        <h1>{data.title}</h1>
        <button onClick={toggle}>{(data.showMessage) ? 'Hide Details' : 'Show Details'}</button>
        {/* <p>{(data.showMessage) ? data.message : ''}</p> */}
        {
            data.showMessage && (
                <div>
                    <p>{data.message}</p>
                </div>
            )
        }
    </div>);
    
    const appRoot = document.getElementById('app')
    ReactDOM.render(element, appRoot)
}

render()
