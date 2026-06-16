import react from "react";
class Clock extends react.Component {
    constructor(props) {
        super(props)
        this.state = {date: new Date()}
    }

    componentDidMount() {
        console.log("####componentDidMount")
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        console.log("####componentWillUnmount")
        clearInterval(this.timerID);
    }
    
    tick() {
        console.log('####this is tick')
        this.setState({date: new Date()});
    }

    render() {
        return (
            <div>
                <h1>现在时间是:</h1>
                <h2>{this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;