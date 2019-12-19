import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './bike.css';
import bg from './bk.jpg';
import a from './a.png';
import b from './b.png';
import c from './c.png';
import './signup.css';

export default class Signup extends React.Component{
  
    constructor(props){
        super(props);

        this.state={
            RegNo:'',
            ChasisNo:'',
            Username:'',
            Email:'',
            Password:'',
            ConfirmPassword:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
  
    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
  
    
    
 validateForm() {
        return (
          this.state.Email.length > 0 &&
          this.state.Password.length > 0 &&
          this.state.Password === this.state.ConfirmPassword
        );
      }  

    
    
    
    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

  
  
  
  
  
  
  
  
    render(){  
    return(
      <div className="container-fluid">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <div className="Header"></div>

      <a href="#" className="Logo" > Bikerwiker</a>

      <div className="Heads" >
      <h1 id="Details" >Drive with Bikers</h1>
      <h1 id="Details">Travel on your Schedule </h1>
      <h1 id="Details"></h1>
      </div>




      <div className="App__Form">
       
            <form className="FormTitle" onSubmit={this.handleSubmit}>
                <Router>
                
                    <div className="PageSwitcher">
                        <NavLink to="/sign-in" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign In</NavLink>
                        <NavLink exact to="/" activeClassName="PageSwitcher_Item-Active" className="PageSwitcher_Item">Sign Up</NavLink>
                    </div> 
                    
                </Router>

                <div className="form-content">
                <h2 >Create Your Account</h2>

                <p><input required placeholder="Registration Number" type="text" className="form-control" name="RegNo" value={this.state.RegNo} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Chasis Number" type="text" className="form-control" name="ChasisNo" value={this.state.ChasisNo} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Username" tyep="text" className="form-control" name="Username" value={this.state.Username} onChange={this.handleChange}></input></p>


                <p><input  required placeholder="Email" type="Email" className="form-control" name="Email" value={this.state.Email} onChange={this.handleChange}></input></p>
                
                
                <p><input required placeholder="Password" type="Password" className="form-control" name="Password" value={this.state.Password} onChange={this.handleChange}></input></p>


                <p><input required placeholder="Confirm Password" type="Password" className="form-control" name="ConfirmPassword" value={this.state.ConfirmPassword} onChange={this.handleChange}></input></p>

                <input type="Submit" disabled={!this.validateForm()} value="Create Account" class="btn btn-primary btn-lg btn-block"></input>
                </div>

            
            </form> 
        
        
        </div>









      <img className="bg" src={bg}/>

      <div className="Footer">
        <h1>Drive when you want</h1>
        <h1>Travel as much as you need</h1>

        <img className="icon-1" src={a}/>
        <img className="icon-2" src={b}/>
        <img className="icon-3" src={c}/>

        <div>
        <h1 className="h-1">Earn anytime, anywhere</h1>
        <h1 className="h-2">Set your own schedule</h1>
        <h1 className="h-3">Safety behind the wheel</h1>
        </div>

        <div className="para">
        <p className="p-1"> You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly.</p>
        <p className="p-2">Only drive when it works for you. There’s no office and no boss. That means you’ll always start and stop on your time—because with Uber, you’re in charge.</p>
        <p className="p-3">Uber is dedicated to keeping people safe on the road. Our technology enables us to focus on driver safety before, during, and after every trip.</p>
        </div>  

        

      </div>
      <div className="Foot"><p className="inc">@2019 Bikers Limited</p></div>
      
      
    </div>
    );
  }
}
