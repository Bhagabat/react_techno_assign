import React,{Component} from 'react';

const alphabetValidater = /^[a-zA-Z]+$/;
const alphaNumericValidater = /^([a-zA-Z0-9]+)$/;
const numericValidater = /^([0-9]+)$/;
const fieldValidater ={
    isValidFName:alphabetValidater,
    isValidLName:alphabetValidater,
    isValidClass:alphaNumericValidater,
    isValidYear:numericValidater,
    isValidMark:numericValidater

}
class Admission extends Component{
    constructor(){
        super();
        this.state = {
            isValidFName:false,
            isValidLName:false,
            isValidClass:false,
            isValidYear:false,
            isValidMark:false
        }
    }
    validateField (event,field){
        
        var value = event.target.value;
        var status = fieldValidater[field].test(value);
        var validObj = {};
        if(field ==='isValidFName' || field ==='isValidLName'){
            status = status && value.length >0 && value.length <=20; 
        }else if(field === 'isValidYear'){
            status = status && value > '2017'
        }
        validObj[field] = status;
        this.setState(validObj);
    }
    getButtonStatus(){
        
        return this.state.isValidClass && this.state.isValidFName && this.state.isValidLName && this.state.isValidMark && this.state.isValidYear;
    }
    render(){
       
        return(
            <div>
                <h2>Admission Form</h2>
                <form>
                    <table>
                        <tr>
                            <td> <label>First Name</label></td>
                            <td> <input type="text" onChange={(e)=>{this.validateField(e,'isValidFName')}}/></td>
                        </tr>
                        <tr>
                            <td> <label>Last Name</label></td>
                            <td> <input type="text" onChange={(e)=>{this.validateField(e,'isValidLName')}}/></td>
                        </tr>
                        <tr>
                            <td>  <label>Class</label></td>
                            <td> <input type="text" onChange={(e)=>{this.validateField(e,'isValidClass')}}/></td>
                        </tr>
                        <tr>
                            <td><label>Year of passing </label> </td>
                            <td> <input type="text" onChange={(e)=>{this.validateField(e,'isValidYear')}}/></td>
                        </tr>
                        <tr>
                            <td> <label>Percentage of marks </label> </td>
                            <td> <input type="text" onChange={(e)=>{this.validateField(e,'isValidMark')}}/></td>
                        </tr>
                    </table>
                    
                    
                    <button disabled={!this.getButtonStatus()}> Submit</button>
                </form>

            </div>
        );
    }
}
export default Admission;