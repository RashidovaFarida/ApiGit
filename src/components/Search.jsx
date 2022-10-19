import React, { Component } from 'react'

export class Search extends Component {
    constructor(props){
        super(props);
        this.inputSubmit=this.inputSubmit.bind(this);
        this.inputChange=this.inputChange.bind(this);
        this.state={
            keyword:""
        }
    }
    inputSubmit(e){
        
        e.preventDefault();
        this.props.searchValue(this.state.keyword)
    }
    inputChange(e){
        this.setState({
            keyword: e.target.value
        })
    }
  render() {
    return (
        <form onSubmit={this.inputSubmit}>
        <div className="container my-3">
            <div className="input-group">
                <input onChange={this.inputChange} className="from-control width"  id="" />
                <div className="input-group-append ">
                    <button className='btn btn-dark ' type='submit'>Search</button>
                </div>
            </div>
        </div>
        
        </form>
    )
  }
}

export default Search