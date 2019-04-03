import React from 'react';
import './Calculator.css';
import axios from 'axios';
import Slider from 'react-rangeslider';

class Calculator extends React.Component{

    constructor(){
        super();
        this.state={
            months: 6,
            amount :500,
            emi : 93,
            roi:0.25,
            response:null
        }
    }
    componentDidMount(){
       axios.get('https://ftl-frontend-test.herokuapp.com/interest?amount=500&numMonths=6').then(res=>{
           this.setState({
            emi:res.data.monthlyPayment.amount,
            roi:res.data.interestRate
           })
       })
    }

    componentDidUpdate(){
        axios.get(`https://ftl-frontend-test.herokuapp.com/interest?amount=${this.state.amount}&numMonths=${this.state.months}`).then(res=>{
            this.setState({
                emi:res.data.monthlyPayment.amount,
                roi:res.data.interestRate
            })
        })
    }

    amountFieldHandler=e=>{
            this.setState({amount:e.target.value})
    }
    monthFieldHandler=e=>{
            this.setState({months:e.target.value})
    }

    monthChange=(value)=>{
        this.setState({months:value})
    }

    amountChange=(value)=>{
        this.setState({amount:value})
    }
    render(){
        return(
            <div className="Calculator">
                <div className="container box">
                    <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 InputSection">
                    <div className="InputDivs">
                        <div className="InputDiv">
                            <h3 id="fieldTitle">Loan Amount</h3>
                            <input id="inputField" placeholder="Loan Amount" type="number" min="500" max="5000" value={this.state.amount} onChange={this.amountFieldHandler} />
                            <div className="slider">
                                <Slider
                                    min={500}
                                    max={5000}
                                    value={this.state.amount}
                                    onChange={this.amountChange}
                                    onChangeComplete={this.fetchResults}
                                    step={100}
                                    labels={{500:'500',1000:'1000',1500:'1500',2000:'2000',2500:'2500',3000:'3000',3500:'3500',4000:'4000',4500:'4500',5000:'5000'}}/>
                            </div>
                        </div>

                        <div className="InputDiv">
                            <h3 id="fieldTitle">Payment Term</h3>
                            <input id="inputField" placeholder="Payment Term" type="number" min="6" max="24" value={this.state.months} onChange={this.monthFieldHandler} />
                            <div className="slider">
                                <Slider
                                    min={6}
                                    max={24}
                                    value={this.state.months}
                                    onChange={this.monthChange}
                                    onChangeComplete={this.fetchResults}
                                    step={1}
                                    labels={{6:'6',7:'7',8:'8',9:'9',10:'10',11:'11',12:'12',11:'11',12:'12',13:'13',14:'14',15:'15',16:'16',17:'17',18:'18',19:'19',20:'20',21:'21',22:'22',23:'23',24:'24'}}
                                 />
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 OutputSection">
                        <div className="OutputDivs">
                        <div className="OutputDiv col-md-6 col-sm-6 col-xs-6">
                            <h1 id="outputTitle">Monthly Payment</h1>
                            <h2 id="output">{`$${this.state.emi}`}</h2>
                        </div>
                        <div className="OutputDiv col-md-6 col-sm-6 col-xs-6">
                            <h1 id="outputTitle">Interest Rate</h1>
                            <h2 id="output">{`${this.state.roi}%`}</h2>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Calculator;