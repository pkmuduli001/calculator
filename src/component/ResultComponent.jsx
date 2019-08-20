import React, {Component} from 'react';

class ResultComponent extends Component {


    render() {
        // let {result} = this.props;
        return (
            <div className="result mb-2">
                <p>{this.props.result}</p>
            </div>
    );
    }
}


export default ResultComponent;