import React from 'react';
// import data from '../../data/data.json';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import InputField from '../InputField/InputField';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
const SubCategoryConfig=(props)=>{

  // console.log(data);
  return (
    <div style={{width:'100%',padding:10}}>
      {props.data.map((main,j)=>(
        <div key={j} style={{width:'100%',padding:10}}>
          <ExpansionPanel >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon style={{fill:'#fff'}}/>} style={{backgroundColor:'#2c3e50',color:'#fff',height:48,minHeight:48}}>
              <Typography style={{color:'#fff'}}>{main.name}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{backgroundColor:'rgb(65, 81, 97)',color:'#fff',display: 'block'}}>
            <List >

      	    {main.subCatData.map((subCat,i)=>(
              <ListItem key={i}>
                <ListItemText style={{width: 'max-content',
                padding: '0 80px 0 0', color:'#fff'}}>
                <Typography style={{width: 'max-content',padding: '0 80px 0 0', color:'#fff'}}>{subCat.subCatName}</Typography>
                </ListItemText>
                <InputField type='number'
                            disabled={props.state['validSubCat'+j]}
                            name={subCat.subCatName.split(' ').join('_').toLowerCase()}
                            onChange = {props.onChangeTechnologyWeightage.bind(this,subCat.subCatName.split(' ').join('_').toLowerCase(),main.name.split(' ').join('_').toLowerCase())}
                            placeholder={"Weightage"}
                            value={props.state.subCategoryWeightageList.find(t=>Object.keys(t).includes(main.name.split(' ').join('_').toLowerCase()))[main.name.split(' ').join('_').toLowerCase()].find(sc=>Object.keys(sc).includes(subCat.subCatName.split(' ').join('_').toLowerCase()))[subCat.subCatName.split(' ').join('_').toLowerCase()]}
                            />
              </ListItem>
            ))}
            <div style={{width:'100%',textAlign:'right'}}>
              <Button onClick={props.handleTechnologyWeightageValidate.bind(this,j,main.name.split(' ').join('_').toLowerCase())}
                      disabled={props.state['validSubCat'+j]}
                      variant="contained">Validate</Button>
              {props.state.errorSubCat?<p>Sum Should be 100</p>:null}
            </div>
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    ))}
  </div>

  )
}
export default SubCategoryConfig;
//<ListItem ><ListItemText>{useCaseName+' : '+whatIsIt(data[0][key].data)}</ListItemText></ListItem>
// data.map(main=>{
// 	a=a+'Main: '+main.name;
// 	main.subCatData.map(subCat=>{
//         a=a+'subCat: '+subCat.subCatName;
//         subCat.technologyData.map(techData=>{
//             a=a+'tech: '+techData.techName;
//             techData.useCaseData.map(useCases=>{
//                 a=a+'uc: '+useCases.ucName;
//             })
//         })
//     })
// })
