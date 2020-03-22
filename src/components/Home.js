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
        birthday:'',
        ymd:''

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
     var age;
     age = 2020 - fortune.birthday.substring(0,4) + 1 ;

     const inventory = [
      {agef: 1, yearf: '2'},{agef: 2, yearf: '5'},{agef: 3, yearf: '3'},{agef: 4, yearf: '5'},{agef: 5, yearf: '3'},
      {agef: 6, yearf: '2'},{agef: 7, yearf: '5'},{agef: 8, yearf: '3'},{agef: 9, yearf: '5'},{agef: 10, yearf: '3'},
      {agef: 11, yearf: '2'},{agef: 12, yearf: '5'},{agef: 13, yearf: '3'},{agef: 14, yearf: '5'},{agef: 15, yearf: '3'},
      {agef: 16, yearf: '2'},{agef: 17, yearf: '5'},{agef: 18, yearf: '3'},{agef: 19, yearf: '5'},{agef: 20, yearf: '3'},
      {agef: 21, yearf: '2'},{agef: 22, yearf: '5'},{agef: 23, yearf: '3'},{agef: 24, yearf: '5'},{agef: 25, yearf: '3'},
      {agef: 26, yearf: '2'},{agef: 27, yearf: '5'},{agef: 28, yearf: '3'},{agef: 29, yearf: '5'},{agef: 30, yearf: '3'},
      {agef: 31, yearf: '2'},{agef: 32, yearf: '5'},{agef: 33, yearf: '3'},{agef: 34, yearf: '5'},{agef: 35, yearf: '3'},
      {agef: 36, yearf: '2'},{agef: 37, yearf: '5'},{agef: 38, yearf: '3'},{agef: 39, yearf: '5'},{agef: 40, yearf: '3'},
      {agef: 41, yearf: '2'},{agef: 42, yearf: '5'},{agef: 43, yearf: '3'},{agef: 44, yearf: '5'},{agef: 45, yearf: '3'},
      {agef: 46, yearf: '2'},{agef: 47, yearf: '5'},{agef: 48, yearf: '3'},{agef: 49, yearf: '5'},{agef: 50, yearf: '3'},
      {agef: 51, yearf: '2'},{agef: 52, yearf: '5'},{agef: 53, yearf: '8'},{agef: 54, yearf: '5'},{agef: 55, yearf: '3'},
      {agef: 56, yearf: '2'},{agef: 57, yearf: '5'},{agef: 58, yearf: '3'},{agef: 59, yearf: '5'},{agef: 60, yearf: '3'},
      {agef: 61, yearf: '2'},{agef: 62, yearf: '5'},{agef: 63, yearf: '3'},{agef: 64, yearf: '5'},{agef: 65, yearf: '3'},
      {agef: 66, yearf: '2'},{agef: 67, yearf: '5'},{agef: 68, yearf: '3'},{agef: 69, yearf: '5'},{agef: 70, yearf: '3'},
      {agef: 71, yearf: '2'},{agef: 72, yearf: '5'},{agef: 73, yearf: '3'},{agef: 74, yearf: '5'},{agef: 75, yearf: '3'},
      {agef: 76, yearf: '2'},{agef: 77, yearf: '5'},{agef: 79, yearf: '3'},{agef: 79, yearf: '5'},{agef: 80, yearf: '3'},
      {agef: 81, yearf: '2'},{agef: 82, yearf: '5'},{agef: 83, yearf: '3'},{agef: 84, yearf: '5'},{agef: 85, yearf: '3'},
      {agef: 86, yearf: '2'},{agef: 87, yearf: '5'},{agef: 88, yearf: '3'},{agef: 89, yearf: '5'},{agef: 90, yearf: '3'},
      {agef: 91, yearf: '2'},{agef: 92, yearf: '5'},{agef: 93, yearf: '3'},{agef: 94, yearf: '5'},{agef: 95, yearf: '3'},
      {agef: 96, yearf: '2'},{agef: 97, yearf: '5'},{agef: 98, yearf: '3'},{agef: 99, yearf: '5'},{agef: 10, yearf: '3'}
      
  ];
  //상수(태세수)
  const result = inventory.find(yearf => yearf.agef === age);  
  console.log(result.yearf);


  //중수(월건수)
  const monthinventory = [
    {month: '01', monthf: '6'},{month: '02', monthf: '2'},{month: '03', monthf: '1'},{month: '04', monthf: '5'},{month: '05', monthf: '3'},
    {month: '06', monthf: '6'},{month: '07', monthf: '3'},{month: '08', monthf: '2'},{month: '09', monthf: '5'},{month: '10', monthf: '4'},
    {month: '11', monthf: '1'},{month: '12', monthf: '5'}]

    var birthmonth;
    birthmonth= fortune.birthday.substring(5,7);

    const result1 = monthinventory.find(montht=>montht.month===birthmonth);
    console.log(result1.monthf);

    //하수 (일진수)
    const dayinventory = [
    {monthday: '0101', dayf: '4'},{monthday: '0102', dayf: '3'},{monthday: '0103', dayf: '1'},{monthday: '014', dayf: '1'},{monthday: '015', dayf: '2'}]

    var daybirth;
    var monthbirth;
    monthbirth = fortune.birthday.substring(5,7)+fortune.birthday.substring(8,11);
    // daybirth = fortune.birthday.substring(8,11);
    // console.log(monthbirth);
    const result2 = dayinventory.find(monthday=>monthday.monthday===monthbirth);
    console.log(result2.dayf);
    
    this.state.ymd=result.yearf+result1.monthf+result2.dayf;    
    console.log(this.state.ymd);


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
                  image="/images/fortune_teller_logo.png"
                  title="미래 직업은..."
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    미래 직업
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    미래의 직업을 AI가 알려주는 사이트
                  </Typography>
                </CardContent>
                  <CardActions>
                  <Button variant="outlined" color="primary">
                  <Link component={RouterLink} to={"/futurejob"}>미래의 직업보기</Link>  
                  </Button>
                </CardActions>     
                <CardMedia
                  className={classes.media}
                  image="/images/tojungbigul.png"
                  title="Contemplative Reptile"
                />
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
                <Link component={RouterLink} to={"/mediumtoday/"+this.state.ymd}>오늘의 운세보기</Link>  
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