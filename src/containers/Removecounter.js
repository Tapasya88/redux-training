import React, { Component } from 'react';
import {connect} from 'react-redux';//To glue react to redux(store)
import {removeCounter} from '../actions/Counteractions'
import {bindActionCreators} from 'redux';

class Removecounter extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
        <div className="container">           
            <form>
              <div className="field is-grouped">
                <div className="control">
                  <button className="button is-primary" 
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.dispatch(removeCounter(10))}}>Remove</button>
                </div>
              </div>
            </form>
        </div>
        )     
    }
}

function matchDispatchToProps(dispatch){
   return {actions: bindActionCreators(removeCounter,dispatch)}
}

export default connect(matchDispatchToProps)(Removecounter) 