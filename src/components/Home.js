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
    
  }
});
 
//   const [] = React.useState(false);

class Home extends React.Component {   
    
 
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
                <Link component={RouterLink} to={"/mediumtoday"}>오늘의 운세보기</Link>  
                </Button>
              </CardActions>     
                <CardMedia
                  className={classes.media}
                  image="/images/tojungbigul.png"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    2020 토정비결
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    2020년 1년의 운세(2020년 토정비결)
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="outlined" color="primary">
                    토정비결 운세보기
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
            
          </Card>
        
        );
        
    }
}

export default withStyles(styles)(Home);