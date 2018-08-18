const User = {
    name: "_n0man",
    address: "Pune, Maharashtra",
    work: ["ThoughtWorks Inc", "Principal", "Kanbay", "Patni Computers"]
};

const getUserName = () => User.name
const getUserAddress = () => User.address

const getWorkLocation = () => {
   return User.work.map(firm => <h3 key={firm}>{User.name} worked in {firm}</h3>) //JSX element array
}

const element = (
    //div - root, ol - ordered list, li - list item
    <div>
        <h1>Welcome to React-redux {getUserName()}</h1>
        <h4>This is great...Here are more deatails about you</h4>
        <h2>Address : {getUserAddress()}</h2>
        {getWorkLocation()}
    </div>
);

const appRoot = document.getElementById('app')
ReactDOM.render(element, appRoot)

