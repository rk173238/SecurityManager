import React,{Component} from 'react';
import LocationWiseBarChart from './LocationWiseBarChart/LocationWiseBarChart';
import PieChart from './PieChart/Piechart';
import classes from './Charts.css';
import parentClass from '../../../ReportPage.css';

class Chart extends Component{

    render(){
        return(
            <React.Fragment>
            <div className={classes.chartContainer}>
              
                <div className={classes.BarChart}>
                    <h4 className={classes.chartName}>Location wise Instances</h4>
                    <LocationWiseBarChart data={this.props.barData}></LocationWiseBarChart>
                </div>
                
                <div className={classes.PieChart}>
                    <h4 className={classes.chartName}>VPC Groups</h4>
                    <PieChart data={this.props.pieData1} center={['30%','50%']} title='VPC Groups'></PieChart>
                </div>

                <div className={classes.PieChart}>
                    <h4 className={classes.chartName}>Security Groups</h4>
                    <PieChart data={this.props.pieData2} center={['30%','50%']} title='Security Groups'></PieChart>
                </div>
             
                {/* <div style={{width:'49.3%',marginLeft:'1%',marginBottom:'1.3%',marginRight:'1%'}}>
                 <Maps/> 
                </div> */}

            </div>
            </React.Fragment>
        )
    }
}
export default Chart;