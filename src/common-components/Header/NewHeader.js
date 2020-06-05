import React,{Component} from 'react'
import classes from './header.css'
import mediaScreen from '../../commonfiles/media.css';
import Link from 'react-router-dom/Link';
import { withRouter } from 'react-router';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {urlConstants} from '../../constants/url_constants';

class Header extends Component {
    constructor(props) {
        super(props);
        this.headerOffsetHeight = React.createRef();
    }
    state={
        
        dashboardClicked:true,
        inventoryClicked:false,
        analysisClicked:false,
        reportClicked:false,
        userClicked:false,

    }
    componentWillReceiveProps=props=>{
        // console.log(props)
        let name=props.location.pathname.split('/')[2]
        if(name==='dashboard'||name==='details')
            this.setState({dashboardClicked:true,inventoryClicked:false,analysisClicked:false,reportClicked:false,userClicked:false})
        else if(name==='inventory')
            this.setState({dashboardClicked:false,inventoryClicked:true,analysisClicked:false,reportClicked:false,userClicked:false})
        // else if(name==='analysis')
        //     this.setState({dashboardClicked:false,inventoryClicked:false,analysisClicked:true,reportClicked:false,userClicked:false})
        else if(name==='report')
            this.setState({dashboardClicked:false,inventoryClicked:false,analysisClicked:false,reportClicked:true,userClicked:false})
        else if(name==='user')
            this.setState({dashboardClicked:false,inventoryClicked:false,analysisClicked:false,reportClicked:false,userClicked:true})
        else
            this.setState({dashboardClicked:false,inventoryClicked:false,analysisClicked:false,reportClicked:false,userClicked:false})

    }

    componentDidMount = () => {
        console.log("heightt",this.headerOffsetHeight.current.clientHeight)
    }

    showDropdown = () => {
        document.getElementById("adminDropdown").style.display = "block";
    }
    hideDropdown = () => {
        document.getElementById("adminDropdown").style.display = "none";
    }

    render(){
        
        return(
            <div 
                className={classes.header} 
                ref={this.headerOffsetHeight}
                // onLoad={this.setState({headerOffsetHeight:"50px"})}
                // onLoad={this.headerOffsetHeight.current.offsetHeight}
            >
                {/* <Link to='/home/dashboard/'>
                    <img src={require("../../assets/wiprologo.png")} alt='wiprologo' style={{height:50,width:50, float:"left"}}/>
                </Link> */}
                <div className={classes.logoGroup}>
                    <FontAwesomeIcon 
                        icon={faBars} 
                        className={mediaScreen.mobileMenuToggle} 
                        onClick={this.props.toggleMobileSidebar}
                    />
                    <h3 className={classes.logoLink} >
                        <img 
                            src={require('../../assets/logo_small.png')} 
                            style={{width:"50px", marginRight:"10px"}}
                        />
                        <span className={classes.desktopName}>SMC 3.0</span>
                        <span className={classes.mobileName}>SMC 3.0</span>
                    </h3>
                </div>
                <div className={classes.menuGroup}>
                    <div className={classes.headerMenu + ' ' + mediaScreen.headerMenu}>
                        <div className={classes.headerLink + " " + (this.state.dashboardClicked?classes.linkActive:"")}>
                            <Link to='/home/dashboard/'>DASHBOARD</Link>
                        </div>
                        <div className={classes.headerLink + " " + (this.state.inventoryClicked?classes.linkActive:"")}>
                            <Link to='/home/inventory'>INVENTORY</Link>
                        </div>
                        <div className={classes.headerLink + " " + (this.state.reportClicked?classes.linkActive:"")}>
                            <Link to='/home/report'>INSIGHT</Link>
                        </div>
                        {/* <div 
                            className={classes.headerLink + " " + (this.state.analysisClicked?classes.linkActive:"")}
                            style={{
                                marginRight:0
                            }}
                        >
                            <Link to='/home/analysis/smcmap'>ANALYSIS</Link>
                        </div> */}
                        <div 
                            className={classes.headerLink + " " + (this.state.userClicked?classes.linkActive:"")} 
                            style={{position:"relative"}}
                            onMouseEnter={this.showDropdown}
                            onMouseLeave={this.hideDropdown}
                        >
                            <AccountCircleIcon
                                style={{
                                    marginBottom:"2px",
                                    marginLeft:"25px",
                                    fontSize:"1.3em"
                                }} 
                            />
                            <div id="adminDropdown" className={classes.dropdownWrapper}>
                                <b className={classes.userName}>Hi, {JSON.parse(sessionStorage.user).user}</b>
                                <div className={classes.classifyMenu}>Admin</div>
                                    <div className={classes.dropDownItem}><Link to='/home/admin'>BASELINE</Link></div>
                                    <div className={classes.dropDownItem}><Link to='/home/config'>WEIGHTAGE</Link></div>
                                
                                <div className={classes.classifyMenu}>User</div>
                                    {JSON.parse(sessionStorage.user).admin?
                                        <div className={classes.dropDownItem}>
                                            <a href={urlConstants.BASE_URL+'admin'} target="_blank">ADMIN CONSOLE</a>
                                        </div>
                                    :null}
                                    <div className={classes.dropDownItem}><Link to='/home/changePassword'>CHANGE PASSWORD</Link></div>
                                    <div className={classes.dropDownItem}><Link to='/home/help'>HELP</Link></div>
                                    <div className={classes.dropDownItem}><Link to='/logout'>LOGOUT</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header);