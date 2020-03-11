import React,{Component} from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import firebase from '../Firebase';
// import { Link } from 'react-router-dom';

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
	  paddingTop: "20%",
	  height : 50
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
	
	}
  });


class Show extends Component {

	constructor(props){
		super(props);
		this.state = {
			board :[],
			key:''
		};
	}
	
	componentDidMount(){
		console.log(this.props.match.params.id);
		const ref=firebase.firestore().collection('boards').doc(this.props.match.params.id);
		ref.get().then((doc) =>{
			if(doc.exists){
				this.setState({
					board : doc.data(),
					key : doc.id,
					isLoading:false
				});
			} else{
				console.log("No Such Document!");
			}
		});
	}
	
	render(){
		const { classes } = this.props;  
		return(
            <Card className={classes.card}>                
				<CardContent className={classes.content}>
				<Typography gutterBottom variant="h5" component="h2">
					괘 :
          		</Typography>
          		<Typography variant="body2" color="textSecondary" component="p">
				  {this.state.board.fortuneid}
          		</Typography>
				  <Typography gutterBottom variant="h5" component="h2">
					title :
          		</Typography>
          		<Typography variant="body2" color="textSecondary" component="p">
				  {this.state.board.title}
          		</Typography>
				<Typography gutterBottom variant="h5" component="h2">
					총운 :
          		</Typography>
          		<Typography variant="body2" color="textSecondary" component="p">
				  {this.state.board.totalfortune}
          		</Typography>
				</CardContent>				 
			</Card>		
		
		);
	}
}

export default withStyles(styles)(Show);