import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
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
    paddingTop: "60%",
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
    
  }
});
 
//   const [] = React.useState(false);

class MediumToday extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.match.params.id);
}

 
    render() { 
        const { classes } = this.props;     
       
        return (     
            <Card className={classes.card}>
               <CardHeader
                    avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        F
                    </Avatar>
                    }
                />
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  오늘의 운세 총론
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘의 운세 총론을 한눈에...
                </Typography>
              </CardContent>
              <CardActions>
              <Button variant="outlined" color="primary">
              <Link component={RouterLink} to={"/confirm"}>오늘의 운세보기</Link>                
              </Button>
            </CardActions>     
              {/* <CardMedia
                className={classes.media}
                image="/images/day_fortune.jpg"
                title="Contemplative Reptile"
              /> */}
              <CardContent className={classes.content}>
                <Typography gutterBottom variant="h5" component="h2">
                  성공 재물운
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘 나의 재물운을 한눈에...
                </Typography>
              </CardContent>
              <CardActions>
              <Button variant="outlined" color="primary">

                오늘의 재물 운세보기
              </Button>
            </CardActions>  
            </CardActionArea>
              <CardMedia
              className={classes.media}
              image="/images/atm.png"
              title="cartoon"
            />             
          </Card>
        
        );
        
    }
}

export default withStyles(styles)(MediumToday);