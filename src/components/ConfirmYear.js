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
    paddingTop: "80%",
    height : 80
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

class ConfirmYear extends React.Component {   
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
 
              <CardContent className={classes.content}>      
              <Typography gutterBottom  component="h5">
                  -------------------------------------
                </Typography>
                <Typography variant="h6" gutterBottom>
                  2020 운세 총론 
                </Typography>
                <Typography variant="h6" gutterBottom>
                  풀이가 완료 되었습니다.
                </Typography>
                <Typography gutterBottom  component="h5">
                -------------------------------------
                </Typography>
              </CardContent>

              <CardActions>     
             
              <Button variant="outlined" color="primary">
              <Link component={RouterLink} to={"/showyear/" +this.props.match.params.id}>2020 운세총운</Link>                
              </Button>
              
              </CardActions>      
            </CardActionArea>  
            <CardMedia
              className={classes.media}
              image="/images/graph.png"
              title="cartoon"
            />                   
          </Card>
        
        );
        
    }
}

export default withStyles(styles)(ConfirmYear);