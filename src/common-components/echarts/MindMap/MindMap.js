
import React, { Component } from 'react';
import ReactEcharts from 'echarts-for-react';
import classes from './MindMap.css';
const treeMapper=(object,old_key,new_key)=>{
  for( let i in object){
    if(i==='ucData'){

    }
   else if(i===old_key) {
    Object.defineProperty(object, new_key,
        Object.getOwnPropertyDescriptor(object, old_key));
    delete object[old_key];
    old_key=new_key;
    }
  }
}
const col=(v)=>{
  if (v <= 40 ||v==='Critical'){
    return '#c0392b';
  }
  else if ((v > 40 && v <= 60)||v==='Medium'){
    return '#f39c12';
  }
  else if (v > 60 || v==='Low') {
    return '#27ae60';
  }
  else{
    return '';
  }
};

const treeBuilder=(object)=>{
  object.forEach(child=>{
    for(let i in child){
      const arrayConstructor=[].constructor;
      if(child[i].constructor===arrayConstructor&&i!=='children'){
          treeMapper(child,i,'children');
          child.collapsed=true;
          if(child.children){
            treeBuilder(child.children)
          }
      }
      if(i==='ucData'){
        let useCaseData=[];
        ['Low','Medium','Critical'].forEach(subClass=>{
          if(child[i][subClass.toLowerCase()]!==0){
            useCaseData.push({name:subClass,
                              useCase:child.ucName,
                              technology:child.technologyName,
                              value:': '+child[i][subClass.toLowerCase()]+' devices',
                              itemStyle:{
                                          color: col(subClass),
                                          borderColor: col(subClass)
                                        }
                            })
          }
        })
        child.children=useCaseData;
      }
      if(i.toLowerCase().split('n')[1]==='ame'&&i!=='name'){
        let p=Object.getOwnPropertyDescriptor(child, i)
        p.value=p.value==='Performance'?'Solarwinds':p.value
        Object.defineProperty(child, 'name',p );
      }
      if(i.toLowerCase().split('complianc')[1]==='e'){
        child.value=': '+Math.round(child[i])+'%'
        child.itemStyle={color: col(child[i]),borderColor: col(child[i]),}
      }
    }
  })
}

export default class MindMap extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  static getDerivedStateFromProps(nextProps,prevState){
    if(nextProps.data[0].data.length!==0&&prevState.data.length===0){
      // console.log('derived state updater');
      let dat=JSON.parse(JSON.stringify(nextProps.data));

      treeBuilder(dat);
      // console.log(dat);
      return {data:dat}
    }
    else{
      return prevState;
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    return nextState.data!==this.state.data;
  }
  getOption = () => {
    return {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove',
                formatter: "{b} {c}"
            },
            series: [
                {
                    type: 'tree',
                    symbol:'circle',
                    data: this.state.data,
                    top: '1%',
                    left: '7%',
                    bottom: '1%',
                    right: '20%',
                    symbolSize: 40,
                    itemStyle:{
                      normal: {
                          color: '#2c3e50',
                          borderColor: '#ccc',
                          borderWidth: 1.5,
                          borderType: 'solid',

                      },
                      emphasis: {
                          color: '#ccc',
                          borderColor: '#fff',
                          borderWidth: 1.5,
                          borderType: 'solid',
                      }
                    },
                    lineStyle:{
                        color: '#ccc',
                        width: 1.5,
                        curveness: .5,

                    },
                    label: {
                        normal: {
                            position: 'inside',
                            verticalAlign: 'middle',
                            align: 'center',
                            fontSize:.5,
                            color:'#fff',
                            padding: [0, 0, 2.5, 0]

                        },
                        emphasis: {
                            color: '#fff',
                            borderColor: '#ccc',
                            borderWidth: 1.5,
                            borderType: 'solid',
                        }
                    },
                    leaves: {
                        label: {
                            normal: {
                                position: 'inside',
                                verticalAlign: 'top',
                                align: 'center',
                            }
                        }
                    },
                    expandAndCollapse: true,
                    animationDuration: 400,
                    animationDurationUpdate: 700
                }
            ]
        };
  };
  onChartClick=(param, echarts) => {
    console.log(param);
    if(['Low','Medium','Critical'].includes(param.data.name)){
      this.props.devClickHandler(null,null,param.data.technology,param.data.useCase,param.data.name)
    }
  }
  render(){
    let onEvents = {
    'click': this.onChartClick
    }
    // console.log('props',this.props.data);
    return (<div style={{width:'100%'}}>
      {this.state.data.length!==0?<ReactEcharts
        option={this.getOption()}
        style={{ height: 800,width: '100%'}}
        classes={classes.mindMap}
        onEvents={onEvents}
        opts={{renderer: 'svg'}}/>:null}
      </div>
    );
  }
}
