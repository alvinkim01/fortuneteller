import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
 

class Home extends React.Component {     
 
    render() { 
        const { classes } = this.props;
       
        return (
          <div className={classes.root}>
            <Grid container spacing={3}>  
              <Grid item xs={3}>
                <Paper className={classes.paper}>             
                  <Card>
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
                        <Typography variant="body2" color="textSecondary" component="p">
                          오늘의운세
                        </Typography>
                      </CardContent>  
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                      <Link component={RouterLink} to={"/medium"}>오늘의 운세보기</Link>                     
                      </Button>
                    </CardActions>            
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>             
                  <Card>
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
                        image="/images/tojungbigul.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          토정비결
                        </Typography>
                      </CardContent>  
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Action
                      </Button>
                    </CardActions>            
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>             
                  <Card>
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
                        image="/images/monthly_fortune.png"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                          이달의운세
                        </Typography>
                      </CardContent>  
                    </CardActionArea>
                    <CardActions>
                      <Button size="small" color="primary">
                        Action
                      </Button>
                    </CardActions>            
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </div>
        );
      }        
    }


export default withStyles(styles)(Home);