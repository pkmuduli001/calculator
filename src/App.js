import React, { Component } from 'react';
import './App.css';
import ResultComponent from './component/ResultComponent';
import KeyPadComponent from './component/KeyPadComponent';

class App extends Component {
    constructor(){
        super();

        this.state = {
            result: ""
        }
    }

    onClick = button => {

        if(button === "="){
            this.calculate()
        }

        else if(button === "C"){
            this.reset()
        }
        else if(button === "CE"){
            this.backspace()
        }

        else {
            this.setState({
                result: this.state.result + button
            })
        }
    };


    calculate = () => {
        var checkResult = ''
        if(this.state.result.includes('--')){
            checkResult = this.state.result.replace('--','+')
        }

        else {
            checkResult = this.state.result
        }

        try {
            this.setState({
                // eslint-disable-next-line
                result: (eval(checkResult) || "" ) + ""
            })
        } catch (e) {
            this.setState({
                result: "error"
            })

        }
    };

    reset = () => {
        this.setState({
            result: ""
        })
    };

    backspace = () => {
        this.setState({
            result: this.state.result.slice(0, -1)
        })
    };

    render() {
        return (
            <div className='container mt-5' id='show-case'>
                <div className="row">
                  <div className="col-md-5 mx-auto">
                    <div className="card card-body text-center mt-6">
                      <h1 className="heading display-6 pb-3">Simple Calculator</h1>
                    
                    <ResultComponent result={this.state.result}/>
                    <KeyPadComponent onClick={this.onClick}/>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;