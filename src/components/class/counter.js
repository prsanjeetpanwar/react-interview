import { Component } from "react";



class Counter  extends Component{

    componentDidUpdate(prevProps,prevState){
        console.log(prevProps.number)
        console.log(this.props.number)
        if(prevProps.number !== this.props.number){
            console.log("Component update")
        }
    }
    render(){
        return (
           <>
           <h1>{this.props.number}</h1>
        
           </>
        )
    }
}
export default Counter