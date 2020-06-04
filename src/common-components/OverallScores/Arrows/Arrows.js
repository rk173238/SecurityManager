import React,{component, Component} from 'react';
import Paper from 'material-ui/Paper';
import Typography from '@material-ui/core/Typography';
import ArrowDown from '@material-ui/icons/ArrowDropDown';
import ArrowUP from '@material-ui/icons/ArrowDropUp';
import InfoButton from '../../InfoButton/InfoButton'
import TrendIcon from '../../TrendIcon/Trendicon'
import classes from './Arrows.css';
import SubCategoryTrendsDialog from './SubCategoryTrendsDialog/SubCategoryTrendsDialog'
class Arrows extends Component {

    state={
        dailyData:'',
        selected:'Daily',
        data:'',
        weeklyData:'',
        monthlyData:'',
        openSubCategoryTrendsDialog:false,

    }
    arrow=(increased)=>{
        if(increased){
            return <ArrowUP style={{fontSize:80,color:'rgba(36, 176, 44,1)'}}></ArrowUP>
        }
        else
        return <ArrowDown style={{fontSize:80,color:'red'}}></ArrowDown>
    }
    
    openSubCategoryTrendsDialog=(event)=>{
        if(this.props.type!=='Technology') return;
        event.stopPropagation();
        this.setState({openSubCategoryTrendsDialog:true});
        this.hideInfo();
    }
    closeSubCategoryTrendsDialog=(event)=>{
        event.stopPropagation();
        this.setState({openSubCategoryTrendsDialog:false})
    }

    showInfo = () => {
        document.getElementById(this.props.subCategory.split(' ').join('')).style.display = "flex";
    }
    hideInfo = () => {
        document.getElementById(this.props.subCategory.split(' ').join('')).style.display = "none";
    }
    render(){
        return(
            // <div onClick={()=>this.props.arrowClicked(this.props.type,this.props.mainCategory,this.props.subCategory)}>
            //     {/* <div></div>
            //     <div></div> */}
            //     <div style={{width:this.props.width,display:'flex',justifyContent:'space-evenly',alignItems:'center',marginTop:50}}>
            //     {this.arrow(this.props.increased)}
            //     <Typography style={{color:'#fff',fontSize:22,marginLeft:-80 }}>{this.props.value+'%'}</Typography>
            //     </div>
            //     <Typography style={{color:'#00bbff',fontSize:18 }}>{this.props.subCategory}</Typography>
                
            // </div>
            <div 
                className={classes.arrowWrapper}
                onMouseEnter={this.showInfo}
                onMouseLeave={this.hideInfo}
            >
                <div 
                    onClick={()=>this.props.arrowClicked(this.props.type, this.props.mainCategory, this.props.subCategory)}
                    style={{
                        display:"flex", 
                        position:"relative", 
                        justifyContent:"center"
                    }}
                >
                    {/* Trending and info icons */}
                    <div 
                        id={this.props.subCategory.split(' ').join('')} 
                        className={classes.infoButtons}
                    >
                            <InfoButton 
                                description={this.props.subCategory}
                            ></InfoButton>
                            <TrendIcon 
                                clickedTrend={this.openSubCategoryTrendsDialog}
                            ></TrendIcon>
                    </div>
                    
                    <div className={classes.arrow}>▲</div>
                    <div className={classes.score}>
                    {
                        this.props.value === 100 ? this.props.value+'%' : (this.props.value).toFixed(1)+'%'
                    }
                    </div>
                </div>
                <p 
                    className={classes.subCategory}
                    onClick={()=>this.props.arrowClicked(this.props.type, this.props.mainCategory, this.props.subCategory)}
                >
                        {this.props.subCategory}
                </p>

                {this.props.hideSeparator ? null : <div className={classes.separator}></div> }

                {this.state.openSubCategoryTrendsDialog?
                <SubCategoryTrendsDialog
                    openSubCategoryTrendsDialog={this.state.openSubCategoryTrendsDialog}
                    closeSubCategoryTrendsDialog={this.closeSubCategoryTrendsDialog}
                    category={this.props.mainCategory}
                    subCategory={this.props.subCategory}></SubCategoryTrendsDialog>
                :null}
                
            </div>
        )
    }
}
export default Arrows;