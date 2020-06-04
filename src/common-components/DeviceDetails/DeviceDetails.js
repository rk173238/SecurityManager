import React,{Fragment} from 'react';
import classes from './DeviceDetails.css';
// import DeviceUseCases from '../DeviceUseCases/DeviceUseCases';
import $ from 'jquery'
const DeviceDetails=(props)=>{

  const devDataMapper=(devData)=>{
    let data=[{
                 value:335,
                 name:'Low',
                 itemStyle:{
                   normal : {
                     color: '#27ae60'
                   }
                 }
               },
               {
                 value:310,
                 name:'Medium',
                 itemStyle:{
                   normal : {
                     color: '#f39c12'
                   }
                 }
               },
               {
                 value:1598,
                 name:'Critical',
                 itemStyle:{
                   normal : {
                     color: '#c0392b'
                   }
                 }
               }
              ];
    data[0].value=devData.low
    data[1].value=devData.medium
    data[2].value=devData.critical
    // let useCaseData=[];
    // ['Low','Medium','Critical'].forEach(subClass=>{
    // useCaseData.push(devData.filter(uc=>uc.subClass===subClass).length)
    // // console.log(subClass,useCaseData);
    //
    // })
    // let newData=[...data]
    //
    //
    // if(useCaseData){
    //   for (const i in data) {
    //      newData[i].value=useCaseData[i]
    //
    //   }
    // }
    // // console.log(newData);
    return data.filter(d=>d.value!==0)
  }

  const scrollLeft=(id)=>{
    $('#devholder'+id).animate({"scrollLeft": "-=805%"},800);
    setTimeout(()=>{
      if($('#devholder'+id).scrollLeft()===0){
        $('#devleft'+id).css({'display':'none'});
      }
    },900);
    $('#devright'+id).css({'display':'inline-block'});
  }
  const scrollRight=(id)=>{
    $('#devholder'+id).animate({"scrollLeft": "+=805%"},800);
    $('#devleft'+id).css({'display':'inline-block'});
    setTimeout(()=>{
      if($('#devholder'+id).scrollLeft()+$('#devholder'+id).outerWidth()+1>$('#devholder'+id)[0].scrollWidth){
        $('#devright'+id).css({'display':'none'});
        if($('#devholder'+id).scrollLeft()===0){
          $('#devleft'+id).css({'display':'none'});
        }
      }
    },900);

  }

  return (
    <Fragment>
      <div id={'devwrapper'+props.id} className={classes.wrapper}>

      <div id={'devholder'+props.id} className={classes.cardHolder}>
        {props.dat.map((p,i)=>(<DeviceUseCases key={i}
                                               mainName={props.mainName?props.mainName:p.mainName}
                                               donutClick={props.donutClick}
                                               subCatName={props.subCatName?props.subCatName:p.subCatName}
                                               techName={props.techName?props.techName:p.techName}
                                               name={p.ucName}
                                               location={props.location}
                                               dat={devDataMapper(p.ucData)}/>))}
      </div>
      <a id={'devleft'+props.id} className={classes.navLeft} onClick={()=>scrollLeft(props.id)}>&#60;</a>
      {(props.dat.length>5)&&<a id={'devright'+props.id} className={classes.navRight} onClick={()=>scrollRight(props.id)}>&#62;</a>}
      </div>
    </Fragment>
  );
}
export default DeviceDetails;
