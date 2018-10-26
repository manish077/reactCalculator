import React, { Component } from 'react';

export default class Calculator extends Component{

    constructor() {
        super();
        this.state = {
          }
          
          this.update =(event) => this.setState =({
              textMessage: this.state.textmessage + event.target.value
          })
        
    }

    render() {
        return (
          <div>
              <div>
            <input value={this.state.textMessage} type = "text"/>
            </div>
              <input type="button" value="1" onClick={this.update}/>
              <input type="button" value="2" onClick={this.update}/>
              <input type="button" value="3" onClick={this.update}/>
              <input type="button" value="+" onClick={this.update}/><br></br>
              <input type="button" value="4" onClick={this.update}/>
              <input type="button" value="5" onClick={this.update}/>
              <input type="button" value="6" onClick={this.update}/>
              <input type="button" value="-" onClick={this.update}/><br></br>
              <input type="button" value="7" onClick={this.update}/>
              <input type="button" value="8" onClick={this.update}/>
              <input type="button" value="9" onClick={this.update}/>
              <input type="button" value="*" onClick={this.update}/><br></br>
              <input type="button" value="=" onClick={this.update}/>
          </div>
          );
          

      }

}