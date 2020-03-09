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
    root: {
        maxWidth: 345,
      },
      media: {
        height: 30,
        paddingTop: '56.25%', // 16:9
      },
      marginAutoItem: {
        margin: 'auto'
      },
      avatar: {
        backgroundColor: red[500],
      },
  });
 
//   const [] = React.useState(false);

class Medium extends React.Component {   
    
 
    render() { 
        const { classes } = this.props;     
       
        return (     
            <Card className={classes.root}>
               <CardHeader
                    avatar={
                    <Avatar aria-label="logo" className={classes.avatar}>
                        오늘
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
              <Button size="small" color="primary">
              <Link component={RouterLink} to={"/show/" +'pNjfBMlCCJhdo3LXbiR8'}>오늘의 운세보기</Link>                
              </Button>
            </CardActions>     
              {/* <CardMedia
                className={classes.media}
                image="/images/day_fortune.jpg"
                title="Contemplative Reptile"
              /> */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  성공 재물운
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘 나의 재물운을 한눈에...
                </Typography>
              </CardContent>
              <CardActions>
              <Button size="small" color="primary">

                오늘의 재물 운세보기
              </Button>
            </CardActions>  
            </CardActionArea>
                <CardMedia
                className={classes.media}
                image="/images/FreeVector-Floral-Band-Cartoon.jpg"
                title="cartoon"
              />
             
          </Card>
        
        );
        
    }
}

export default withStyles(styles)(Medium);