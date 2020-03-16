import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import "react-datepicker/dist/react-datepicker.css";


const styles = theme => ({
  card: {
    maxWidth: 300,
    margin: "auto",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
    }
  },
  media: {
    paddingTop: "40%",
    height : 40
  },
  content: {
    textAlign: "left",
    padding: theme.spacing.unit * 3
  },
  heading: {
    fontWeight: "bold"
  },
  subheading: {
    lineHeight: 1.8
  },
 
  avatar: {
      backgroundColor: red[500],
    // display: "inline-block",
    // border: "2px solid white"
    // "&:not(:first-of-type)": {
    //   marginLeft: -theme.spacing.unit
    
  },
  formControl: {
    margin: theme.spacing(0),
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(0),
    marginRight: theme.spacing(0),
    width: 200,
  }
});
 
//   const [] = React.useState(false);

class Home extends React.Component {
  
  constructor() {
    super();
    this.state = {
        dialog: false,
        alias: '',
        sex: 'female',
        birthday:''

    };
}

  handleDialogToggle = () => this.setState({
    dialog: !this.state.dialog
})
handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);

    // if(e.target.value < 1) {
    //     this.setState({weight: 1});
    // }
    // else if(e.target.value > 9) {
    //     this.setState({weight: 9});
    // }
}

handleSubmit = () => {
    const fortune = {
        alias : this.state.alias,
        sex: this.state.sex,
        birthday : this.state.birthday
    }
    this.handleDialogToggle();
    // if (!fortune.alias && !fortune.birthday) {
    //     return;
    // }
    // this._post(fortune);
}    
 
    render() { 
        const { classes } = this.props; 
       
        return (     
            <Card className={classes.card}>
              <Button variant="outlined" color="secondary" onClick={this.handleDialogToggle}>
                운세 기본정보입력
              </Button>
               <CardHeader
                    avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        F
                    </Avatar>
                    }
                    
                />
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="/images/day_fortune.jpg"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                  오늘의운세
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘의 운세를 말하는 사이트
                </Typography>
              </CardContent>
                <CardActions>
                <Button variant="outlined" color="primary">
                <Link component={RouterLink} to={"/mediumtoday/"+this.state.birthday}>오늘의 운세보기</Link>  
                </Button>
              </CardActions>     
                <CardMedia
                  className={classes.media}
                  image="/images/tojungbigul.png"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    2020 운세보기
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    2020년 1년의 운세(2020년 운세보기)
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    2020년 운세보기
                  </Button>
                </CardActions>  
                <CardMedia
                  className={classes.media}
                  image="/images/monthly_fortune.png"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    2020 월간운세
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    2020년 1년의 월간 운세를 봄
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    월간 운세보기
                  </Button>
                </CardActions>  
            </CardActionArea>
            <div>
               
              <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
                <DialogTitle id="form-dialog-title">운세기본정보입력</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    Fortune Teller 는 점괘를 보기 위한 기본정보가 꼭 필요합니다.
                    운세결과에 영향을 미치니 입력해 주십시요.
                  </DialogContentText>
                    <TextField label="이름 or 별명" type="text" name="alias" value={this.state.alias} onChange={this.handleValueChange} /><br />
                      <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend"></FormLabel>
                        <RadioGroup aria-label="gender" name="sex" value={this.state.sex} onChange={this.handleValueChange}>
                          <FormControlLabel value="female" control={<Radio />} label="여성" />
                          <FormControlLabel value="male" control={<Radio />} label="남성" />
                        </RadioGroup>
                      </FormControl>              
                    <form className={classes.container} noValidate>
                      <TextField
                        label="음력생년월일"
                        type="date"
                        name="birthday"
                        value={this.state.birthday} 
                        onChange={this.handleValueChange}
                        className={classes.textField}
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </form>            
                </DialogContent>
                <DialogActions>
                  <Button variant="contained" color="primary" onClick={this.handleSubmit}>확인</Button>
                  <Button variant="outlined" color="primary" onClick={this.handleDialogToggle}>닫기</Button>
                </DialogActions>
              </Dialog>
    </div>            
          </Card>        
        );        
    }
}

export default withStyles(styles)(Home);