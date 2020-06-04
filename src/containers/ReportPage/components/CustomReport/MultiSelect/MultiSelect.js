/* eslint-disable react/prop-types */
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select,{components} from 'react-select';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import NoSsr from '@material-ui/core/NoSsr';
import TextField from '@material-ui/core/TextField';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
const Input = (props) => {
  if (props.isHidden) {
    return <components.Input {...props}/>;
  }
  return (
    <div >
        <components.Input {...props} style={{ color:'#fff' }}/>
    </div>
  );
};
const IndicatorsContainer = (props) => {
  return (
    <div >
      <components.IndicatorsContainer {...props} style={{fill:'#000'}}/>
    </div>
  );
};


const customStyles = {
  clearIndicator: (base, state) => ({
    ...base,

    color: '#fff',

  }),
  dropdownIndicator: (base, state) => ({
    ...base,

    color: '#fff',

  }),
}

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  input: {
    display: 'flex',
    padding: 0,
  },
  valueContainer: {
    display:'flex',
    flexWrap:'wrap',
    flex: 1,
    alignItems: 'center',
  },
  chip: {
    margin: `${theme.spacing.unit / 2}px ${theme.spacing.unit / 4}px`,
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    fontSize: 16,
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom:4,
    fontSize: 16,
    color:'#ccc'
  },
});

function NoOptionsMessage(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.noOptionsMessage}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}

function inputComponent({ inputRef, ...props }) {
  return <div ref={inputRef} {...props} style={{color:'#eee'}} />;
}

function Control(props) {
  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: props.selectProps.classes.input,
          ref: props.innerRef,
          children: props.children,
          ...props.innerProps,
        },
      }}
    />
  );
}

function Option(props) {
  return (
    <MenuItem
      buttonRef={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}


function ValueContainer(props) {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
}

function MultiValue(props) {
  return (
    <Chip
      tabIndex={-1}
      label={props.children}
      className={classNames(props.selectProps.classes.chip, {
        [props.selectProps.classes.chipFocused]: props.isFocused,
      })}
      onDelete={event => {
        props.removeProps.onClick();
        props.removeProps.onMouseDown(event);
      }}
    />
  );
}

const componentsFull = {
  Option,
  Control,
  Input,
  IndicatorsContainer,
  NoOptionsMessage,
  Placeholder,
  MultiValue,
  ValueContainer,
};

const MultiSelect=(props)=>{
  const { classes } = props;
  // console.log(props);
  return (
    <div className={classes.root}>
      <NoSsr>
        <FormControl  style={{width:'95%',margin:'2%'}}>
          <InputLabel style={{color:'#eee',top:-15}}

              shrink
          >
            {props.label}
          </InputLabel>
          <Select
            classes={classes}
            styles={customStyles}
            options={props.options}
            components={componentsFull}
            value={props.value}
            onChange={props.handleChangeMultiSelect('multi'+props.label)}
            placeholder={props.placeholder}
            isMulti
          />
        </FormControl>
      </NoSsr>
    </div>
  );
};
MultiSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};
const MultiSelectWithStyles=withStyles(styles)(MultiSelect)
class IntegrationReactSelect extends React.Component {
  state = {
    multi: null,
  };

  handleChange = name => value => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (<MultiSelectWithStyles multi={this.state.multi} handleChange={this.handleChange}/>)
  }
}

IntegrationReactSelect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MultiSelect);
