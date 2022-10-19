import React, { Component } from 'react'
import User from "./User"

export class Users extends Component {
  render() {
    return (
      <div className=' container'>
        <div className="row">
            {this.props.uservalue.map((u)=>(
                <User calluser={u}/>
            ))}
            
        </div>
      </div>
    )
  }
}

export default Users