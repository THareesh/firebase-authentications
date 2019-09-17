import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'font-awesome/css/font-awesome.min.css'
import * as serviceWorker from './serviceWorker';
import firebase from './config/firebase'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import Loader from './components/loader'
class Auth extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loader:true
        }
    }
    componentDidMount() {
        this.authListener()
    }
    authListener= () =>{
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if (user) {
                this.setState({loader:false})
                this.props.history.push('/home')
            } else {
                this.setState({ errors: "Please verify Account details" })
            }
        } else {
            this.setState({loader:false})
            this.props.history.push('/LoginRegister')
        }
    })
};
render() {
    return this.state.loader ? <Loader/> : <App/>
}
}
const AppUser = withRouter(Auth);
ReactDOM.render(
    <Router>
        <AppUser />
    </Router>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
