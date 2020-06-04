import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputField from '../InputField/InputField';
import Loading from '../../../../common-components/Loading/Loading';
var UseCaseList=(props)=>{
  if(props.usecases){
    return (<List >
              {props.usecases.map((uc,i)=>(
                  <ListItem key={i} >
                    <ListItemText style={{width: 'max-content',
                    padding: '0 80px 0 0', color:'#fff'}}>
                    <Typography style={{width: 'max-content',padding: '0 80px 0 0', color:'#fff'}}>{uc.name}</Typography>
                    </ListItemText>
                    <InputField name={uc.uc_name}
                                value={uc.value}
                                onChange={props.onChange.bind(this,uc.tech)}
                                placeholder={"Compliance will be calculated based on this."}
                                />
                  </ListItem>
                )
              )}
            <div style={{width:'100%',textAlign:'right'}}>
              <Button variant="contained" style={{ margin: '2%'}} onClick={()=>props.adminValueSubmitHandler(props.tech,props.usecases)}>Submit</Button>
            </div>
          </List>)
  }
  else{
    return <Loading/>
  }

}
export default UseCaseList
