import React,{Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import firebase from '../Firebase';
// import { Link } from 'react-router-dom';
import renderHTML from 'react-render-html';


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
   


class Show extends Component {

	constructor(props) {
		super(props);
		this.state = {
		  key: '',
		  title: '',
		  totalfortune: '',
		  monthfortune:''
		};
	  }
	
	  componentDidMount() {
		const ref = firebase.firestore().collection('boards').doc(this.props.match.params.id);
		ref.get().then((doc) => {
		  if (doc.exists) {
			const board = doc.data();
			this.setState({
			  key: doc.id,
			  title: board.title,
			  totalfortune: board.totalfortune,
			  monthfortune:board.monthfortune
			});
		  } else {
			console.log("No such document!");
		  }
		});
	  }
	
	render(){
		const { classes } = this.props;  
		return(
            <Card className={classes.card}>    
				<CardHeader
                avatar={
                <Avatar aria-label="logo" className={classes.avatar}>
                    F
                </Avatar>
                }
              />                 
				<CardContent className={classes.content}>
	
          		<Typography gutterBottom variant="h6" component="h3">
				  {this.state.title}
          		</Typography>
				<Typography gutterBottom variant="h6" component="h3">
					총운 :
          		</Typography>
          		<Typography variant="body2" color="textSecondary" component="p">
				  {renderHTML(this.state.totalfortune)}
          		</Typography>
				</CardContent>				 
			</Card>		
		
		);
	}
}

export default withStyles(styles)(Show);