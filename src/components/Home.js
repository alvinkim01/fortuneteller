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
    paddingTop: "80%",
    height : 60
  },
  content: {
    textAlign: "left",
    padding: theme.spacing(3)
    
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
      {agef: 1, yearf: '4'},{agef: 2, yearf: '5'},{agef: 3, yearf: '6'},{agef: 4, yearf: '7'},{agef: 5, yearf: '8'},
      {agef: 6, yearf: '1'},{agef: 7, yearf: '2'},{agef: 8, yearf: '3'},{agef: 9, yearf: '4'},{agef: 10, yearf: '5'},
      {agef: 11, yearf: '6'},{agef: 12, yearf: '7'},{agef: 13, yearf: '8'},{agef: 14, yearf: '1'},{agef: 15, yearf: '2'},
      {agef: 16, yearf: '3'},{agef: 17, yearf: '4'},{agef: 18, yearf: '5'},{agef: 19, yearf: '6'},{agef: 20, yearf: '7'},
      {agef: 21, yearf: '8'},{agef: 22, yearf: '1'},{agef: 23, yearf: '2'},{agef: 24, yearf: '3'},{agef: 25, yearf: '4'},
      {agef: 26, yearf: '5'},{agef: 27, yearf: '6'},{agef: 28, yearf: '7'},{agef: 29, yearf: '8'},{agef: 30, yearf: '1'},
      {agef: 31, yearf: '2'},{agef: 32, yearf: '3'},{agef: 33, yearf: '4'},{agef: 34, yearf: '5'},{agef: 35, yearf: '6'},
      {agef: 36, yearf: '7'},{agef: 37, yearf: '8'},{agef: 38, yearf: '1'},{agef: 39, yearf: '2'},{agef: 40, yearf: '3'},
      {agef: 41, yearf: '4'},{agef: 42, yearf: '5'},{agef: 43, yearf: '6'},{agef: 44, yearf: '7'},{agef: 45, yearf: '8'},
      {agef: 46, yearf: '1'},{agef: 47, yearf: '2'},{agef: 48, yearf: '3'},{agef: 49, yearf: '4'},{agef: 50, yearf: '5'},
      {agef: 51, yearf: '6'},{agef: 52, yearf: '7'},{agef: 53, yearf: '8'},{agef: 54, yearf: '1'},{agef: 55, yearf: '2'},
      {agef: 56, yearf: '3'},{agef: 57, yearf: '4'},{agef: 58, yearf: '5'},{agef: 59, yearf: '6'},{agef: 60, yearf: '7'},
      {agef: 61, yearf: '8'},{agef: 62, yearf: '1'},{agef: 63, yearf: '2'},{agef: 64, yearf: '3'},{agef: 65, yearf: '4'},
      {agef: 66, yearf: '5'},{agef: 67, yearf: '6'},{agef: 68, yearf: '7'},{agef: 69, yearf: '8'},{agef: 70, yearf: '1'},
      {agef: 71, yearf: '2'},{agef: 72, yearf: '3'},{agef: 73, yearf: '4'},{agef: 74, yearf: '5'},{agef: 75, yearf: '6'},
      {agef: 76, yearf: '7'},{agef: 77, yearf: '8'},{agef: 78, yearf: '1'},{agef: 79, yearf: '2'},{agef: 80, yearf: '3'},
      {agef: 81, yearf: '4'},{agef: 82, yearf: '5'},{agef: 83, yearf: '6'},{agef: 84, yearf: '7'},{agef: 85, yearf: '8'},
      {agef: 86, yearf: '1'},{agef: 87, yearf: '2'},{agef: 88, yearf: '3'},{agef: 89, yearf: '4'},{agef: 90, yearf: '5'},
      {agef: 91, yearf: '6'},{agef: 92, yearf: '7'},{agef: 93, yearf: '8'},{agef: 94, yearf: '1'},{agef: 95, yearf: '2'},
      {agef: 96, yearf: '3'},{agef: 97, yearf: '4'},{agef: 98, yearf: '5'},{agef: 99, yearf: '6'},{agef: 100, yearf: '7'}
      
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
    {monthday: '0101', dayf: '3'},{monthday: '0102', dayf: '3'},{monthday: '0103', dayf: '1'},{monthday: '0104', dayf: '1'},
    {monthday: '0105', dayf: '2'},{monthday: '0106', dayf: '1'},{monthday: '0107', dayf: '1'},{monthday: '0108', dayf: '1'},
    {monthday: '0109', dayf: '2'},{monthday: '0110', dayf: '2'},{monthday: '0111', dayf: '1'},{monthday: '0112', dayf: '1'},
    {monthday: '0113', dayf: '3'},{monthday: '0114', dayf: '3'},{monthday: '0115', dayf: '2'},{monthday: '0116', dayf: '2'},
    {monthday: '0117', dayf: '3'},{monthday: '0118', dayf: '1'},{monthday: '0119', dayf: '1'},{monthday: '0120', dayf: '2'},
    {monthday: '0121', dayf: '3'},{monthday: '0122', dayf: '3'},{monthday: '0123', dayf: '1'},{monthday: '0124', dayf: '1'},
    {monthday: '0125', dayf: '1'},{monthday: '0126', dayf: '1'},{monthday: '0127', dayf: '3'},{monthday: '0128', dayf: '2'},
    {monthday: '0129', dayf: '3'},{monthday: '0130', dayf: '2'},
    
    {monthday: '0201', dayf: '3'},{monthday: '0202', dayf: '3'},{monthday: '0203', dayf: '1'},{monthday: '0204', dayf: '1'},
    {monthday: '0205', dayf: '2'},{monthday: '0206', dayf: '1'},{monthday: '0207', dayf: '1'},{monthday: '0208', dayf: '1'},
    {monthday: '0209', dayf: '2'},{monthday: '0210', dayf: '2'},{monthday: '0211', dayf: '1'},{monthday: '0212', dayf: '1'},
    {monthday: '0213', dayf: '3'},{monthday: '0214', dayf: '3'},{monthday: '0215', dayf: '2'},{monthday: '0216', dayf: '2'},
    {monthday: '0217', dayf: '3'},{monthday: '0218', dayf: '1'},{monthday: '0219', dayf: '1'},{monthday: '0220', dayf: '2'},
    {monthday: '0221', dayf: '3'},{monthday: '0222', dayf: '3'},{monthday: '0223', dayf: '1'},{monthday: '0224', dayf: '1'},
    {monthday: '0225', dayf: '1'},{monthday: '0226', dayf: '1'},{monthday: '0227', dayf: '3'},{monthday: '0228', dayf: '2'},
    {monthday: '0229', dayf: '3'},{monthday: '0230', dayf: '2'}, 

    {monthday: '0301', dayf: '3'},{monthday: '0302', dayf: '3'},{monthday: '0303', dayf: '1'},{monthday: '0304', dayf: '1'},
    {monthday: '0305', dayf: '2'},{monthday: '0306', dayf: '1'},{monthday: '0307', dayf: '1'},{monthday: '0308', dayf: '1'},
    {monthday: '0309', dayf: '2'},{monthday: '0310', dayf: '2'},{monthday: '0311', dayf: '1'},{monthday: '0312', dayf: '1'},
    {monthday: '0313', dayf: '3'},{monthday: '0314', dayf: '3'},{monthday: '0315', dayf: '2'},{monthday: '0316', dayf: '2'},
    {monthday: '0317', dayf: '3'},{monthday: '0318', dayf: '1'},{monthday: '0319', dayf: '1'},{monthday: '0320', dayf: '2'},
    {monthday: '0321', dayf: '3'},{monthday: '0322', dayf: '3'},{monthday: '0323', dayf: '1'},{monthday: '0324', dayf: '1'},
    {monthday: '0325', dayf: '1'},{monthday: '0326', dayf: '1'},{monthday: '0327', dayf: '3'},{monthday: '0328', dayf: '2'},
    {monthday: '0329', dayf: '3'},{monthday: '0330', dayf: '2'},
    
    
    ]

    var monthbirth;
    monthbirth = fortune.birthday.substring(5,7)+fortune.birthday.substring(8,11);
    // daybirth = fortune.birthday.substring(8,11);
    // console.log(monthbirth);
    const result2 = dayinventory.find(monthday=>monthday.monthday===monthbirth);
    // console.log(result2.dayf);
    
    var dayf;
    
    if (dayf ===null){
      console.log('day데이타가 부정확합니다.');
      return;
    }   
    const ymd=result.yearf+result1.monthf+result2.dayf; 
    this.setState({ymd : ymd});


    // if (!fortune.alias && !fortune.birthday) {
    //     return;
    // }
    // this._post(fortune);
}    
 
    render() { 
        const { classes } = this.props; 
        const loggedYmd = this.state.ymd;
        return (     
            <Card className={classes.card}>        
               <CardHeader
                    avatar={
                      <Avatar aria-label="logo" className={classes.avatar}>
                        AI F
                      </Avatar>
                    }                    
                />
              {/* <Button variant="outlined" color="secondary" onClick={this.handleDialogToggle}>
                <p>운세</p><p> 기본정보입력</p>
              </Button>              
                  { loggedYmd ? <Typography  variant="body2" color="textSecondary" component="p">                     
                        <b>(별명 또는 이름) : {this.state.alias}    (생년월일) :{this.state.birthday}</b><p></p>
                     </Typography> :<p><b>운세 기본정보를 입력하셔야 운세정보가 사용 가능합니다.</b></p> } */}
                     
                        
            <CardActionArea>
                <CardMedia          
                className={classes.media}
                image="/images/day_fortune.png"
                title="Contemplative Reptile"
              />
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                  오늘의운세
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘의 운세를 AI포춘에게 의뢰해 보죠 오늘의 일진은 어떤지?
                </Typography>
              </CardContent>
                <CardActions>
                {loggedYmd ?
                   <Button variant="outlined" color="primary">
                   <Link component={RouterLink} to={"/mediumtoday/"+this.state.ymd}>오늘의 운세보기</Link>
                   </Button>
                  : <Button variant="outlined" color="secondary" onClick={this.handleDialogToggle}>
                     AI포춘 기본정보입력</Button> }
                  
                
              </CardActions>     
                <CardMedia
                  className={classes.media}
                  image="/images/tojungbigul.png"
                  title="2020 운세"
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
                {loggedYmd ?
                   <Button variant="outlined" color="primary">
                   <Link component={RouterLink} to={"/mediumyear/"+this.state.ymd}>2020년 운세보기</Link>
                   </Button>
                  : <Button variant="outlined" color="secondary" onClick={this.handleDialogToggle}>
                     AI포춘 기본정보입력</Button> }
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
                {loggedYmd ?
                   <Button variant="outlined" color="primary">
                   <Link component={RouterLink} to={"/mediummonth/"+this.state.ymd}>2020년 월간운세</Link>
                   </Button>
                  : <Button variant="outlined" color="secondary" onClick={this.handleDialogToggle}>
                     AI포춘 기본정보입력</Button> }
                </CardActions>  
            </CardActionArea>
            <div>
               
              <Dialog open={this.state.dialog} onClose={this.handleDialogToggle}>
                <DialogTitle id="form-dialog-title">운세기본정보입력</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    AI Fortune 은 정확한 서비스 제공을  위한 기본정보가 꼭 필요합니다.
                    (* 어떤 개인정보도 기록 및 보관 되지 않습니다.)
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