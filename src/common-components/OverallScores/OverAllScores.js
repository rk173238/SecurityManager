import React,{Component,useRef } from 'react';
import Arrows from './Arrows/Arrows'
import classes from './OverAllScores.css'
import $ from 'jquery';


class overallScores extends Component{

    state={
        subCategoryList:[],
        subcategoryWidth:0,
    }
    scrollLeft=(id)=>{
        $('#div'+this.props.mainCategory.split(' ')[1]).animate({"scrollLeft": "-=250%"},1000);
        
      }
    scrollRight=(id)=>{
        $('#div'+this.props.mainCategory.split(' ')[1]).animate({"scrollLeft": "+=250%"},1000);
      }

      
    componentDidMount=()=>{
        let arrowWidth = window.matchMedia('(min-width: 768px)').matches ? this.divElement.clientWidth/4 : "100%";
        this.setState({subcategoryWidth:arrowWidth})
    }
    componentWillReceiveProps=(props)=>{
        
    }
    
    
    // ref = useRef(null)
    
    render(){

        // console.log(this.props.data)
        return(
            <div 
                style={{
                    padding:"0 30px",
                    height:"100%"
                }}
            >
            <div 
            id={'div'+(this.props.mainCategory).split(' ')[1]} 
            className={classes.overallScoresContainer} 
            style={{
                marginTop:this.props.marginTop, 
                borderBottom: this.props.removeBorder ? "none":"1px dotted #022d6f",
                overflowX:window.matchMedia('(max-width: 768px)').matches?"scroll":"hidden",
            }} 
            ref={ (divElement) => { this.divElement = divElement } }>
                <div style={{display:"flex"}}>
                    {
                    Object.keys(this.props.data['sub_categories']).map((subCategory,i)=>(
                        <div key={i} style={{width:this.state.subcategoryWidth, padding:"0 15px"}}>
                        <Arrows 
                            increased={this.props.data['changes'][subCategory]} 
                            width={this.state.subcategoryWidth/5} 
                            value={this.props.data['sub_categories'][subCategory]} 
                            subCategory={subCategory} 
                            arrowClicked={this.props.arrowClicked} 
                            mainCategory={this.props.mainCategory} 
                            type={this.props.type}
                            hideSeparator={i===Object.keys(this.props.data['sub_categories']).length-1}>
                        </Arrows>
                        </div>
                        
                    ))
                    }
                </div>
            </div>
            {/* {Object.keys(this.props.data['sub_categories']).length>4? */}
            {Object.keys(this.props.data['sub_categories']).length * this.state.subcategoryWidth/4 > this.state.subcategoryWidth?
                <a className={classes.navLeft} onClick={this.scrollLeft}>&#60;</a>:null}
            {Object.keys(this.props.data['sub_categories']).length * this.state.subcategoryWidth/4 > this.state.subcategoryWidth?
                <a className={classes.navRight} onClick={this.scrollRight}>&#62;</a>:null}
            </div>
        )
    }

}

export default overallScores;