import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './WorldMap.css';
export default class WorldMap extends Component {

  getOption = () => {

    var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    geo: [
        {
            name: '世界地图',
            type: 'map',
            map: 'world',
            roam: true,
            selectedMode : 'single',
            label:{
                normal: {
                    show:false,
                },
                emphasis: {
                    label:{
                        show:true
                    }
                }
            }
        }
    ],
    series: []
};
    return option
  };

  getOpts = () => {
    let option= this.getOption();
    // option.series.name=this.props.name;
    // option.series.data=this.props.dat;
    //option.toolbox.feature.saveAsImage.name=this.props.name;
    console.log(option);
    return option;
  };
  onChartClick=(param, echarts) => {
    // this.props.donutClick(this.props.mainName,this.props.subCatName,this.props.techName,param.seriesName,param.name,param);
  }


  render(){
    let onEvents = {
    'click': this.onChartClick
    }
    return (
      <ReactEcharts
        option={this.getOpts()}
        style={{ width: '100%'}}
        className={classes.donut}
        onEvents={onEvents}
        opts={{renderer: 'svg'}}/>
    );
  }
}
