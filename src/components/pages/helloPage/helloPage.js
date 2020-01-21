import React, { Component } from "react";

import Button from "../../common/Button/Button";
import Modal from "../../common/Modal/Modal";
import Drobdown from "../../common/Drobdown/DrobdownList/Drobdown"
export default class HelloPage extends Component {
    state ={
        showModal:false,
        drobdownItems: [
            {labelForOption:"LogOut", id: 1}
        ]
    }

    render(){
        return (
            <div>
                <h1>HelloPage</h1>
                <Button 
                    buttonStyle = "btn--warning--outline"
                    buttonSize = "btn--medium"
                    onClick={()=>{this.setState({showModal:true})}}>
                    Open Modal
                </Button>
                <Modal isOpen = {this.state.showModal} onClose={()=>{this.setState({showModal:false})}}>
                    sodkmdflds
                </Modal>
                <Drobdown label={<p>User</p>} menuItems={this.state.drobdownItems}/>
            </div>
            
        )
    }

}
