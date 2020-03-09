import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import firebase from '../Firebase';
// import { Link } from 'react-router-dom';

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
		return(
            <Card>                
				<CardContent>
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

export default Show;