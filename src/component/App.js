import React, { Component } from 'react';
import CommentBox from '../component/comments_box';
import CommentList from '../component/comments_list';


class App extends Component {
    render() {
        return (
            <div>
                <h1 className="box"> React-Redux Testing</h1>
                <div className="main">
                <CommentBox/>
                <CommentList/>
                </div>
            </div>
        );
    }
}

export default App;