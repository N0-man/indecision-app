console.log("react is running fine")

let count = 0
const addOne = () => {
    console.log(++count)
    renderApplication()
}
const minusOne = () => {
    console.log(--count)
    renderApplication()
}
const resetCount = () => {
    count = 0
    console.log(count)
    renderApplication()
}

const appRoot = document.getElementById('app')

const renderApplication = () => {
    const elementCount = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={resetCount}>reset</button>
        </div>
    );

    ReactDOM.render(elementCount, appRoot)
}

renderApplication();