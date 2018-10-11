import React, { Component } from 'react';
import {connect} from 'react-redux';//To glue react to redux(store)

class Trainerdetails extends Component {
    render(){
        if(!this.props.trainer){
            return <h1> Select a trainer..</h1>
        }
        return(
            <div>
                <img src={this.props.trainer.thumbnail}/>
                <h2>{this.props.trainer.first} {this.props.trainer.last}</h2>
                <h3>Age:{this.props.trainer.age}</h3>
                <h3>Exp:{this.props.trainer.description}</h3>
            </div>
        )
    }
}
//goes to reducers/index.js and activeTrainer is mapped to reduce-active-trainers.
function mapStateToProps(state){
    return{
        trainer:state.activetrainer
        
    }
}

export default connect(mapStateToProps)(Trainerdetails);
