import React from 'react';
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
        height: 140,
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

class Home extends React.Component {   
    
 
    render() { 
        const { classes } = this.props;     
       
        return (     
            <Card className={classes.root}>
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
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fortune of the today
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘의 운세를
                  말하는 사이트이면서
                  다음사이트로 이동한다
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.media}
                image="/images/day_fortune.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Fortune of the today
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  오늘의 운세를
                  말하는 사이트이면서
                  다음사이트로 이동한다
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                운세보기
              </Button>
            </CardActions>            
          </Card>
        
        );
        
    }
}

export default withStyles(styles)(Home);