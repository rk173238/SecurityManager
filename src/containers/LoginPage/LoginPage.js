import cssClasses from './LoginPage.css';
import React,{Component} from 'react';
import Paper from 'material-ui/Paper';
import { userActions } from '../../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginCard from './components/LoginCard/LoginCard';
// import Particles from 'react-particles-js';


class LoginPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
          username: '',
          password: '',
          submitted: false
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.onLogin(username, password);
        }
  };
  render(){
            const { loggingIn } = this.props;
            const { username, password, submitted} = this.state;
            return(
                    <Paper className={cssClasses.flexContainer}>
                    {/* <Particles params={particlesConfig} className={cssClasses.particlesContainer}  /> */}
                    {/* <img src={require('../../assets/sideImage.png')} alt='sideImage' className={cssClasses.sideImage}/> */}
                    <LoginCard handleLocationChange={this.props.handleLocationChange} locationValue={this.props.locationValue} loggingIn={loggingIn} alertMessage={this.props.alert.message} username={username} password={password} submitted={submitted} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                    </Paper>
                  );
  }
}

const mapStateToProps=(state)=> {
    const { loggingIn} = state.login;
    return {
        loggingIn,
        alert: state.alert
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username, password) =>  dispatch(userActions.login(username, password))
    }
};

const particlesConfig = {
  "particles": {
    "number": {
      "value": 60,
      "density": {
        "enable": true,
        "value_area": 800
      }
    }},
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 300,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      }
    },
  },
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(LoginPage));
