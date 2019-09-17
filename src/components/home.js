import React from 'react'
import fire from '../config/firebase'

class Home extends React.Component{
    logout = ()=>{
        fire.auth().signOut();
    }
    render(){
        return(
            <div>
                <h1>welcome to home page!</h1>
                <button type="button" onClick={this.logout}>logout</button>
            </div>
        )
    }
}
export default Home