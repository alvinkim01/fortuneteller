import React from 'react';
import './FutureJob.css';
<<<<<<< HEAD
import { tmImage } from '@teachablemachine/image';

class FutureJob extends React.Component {

    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '',imagePreview:'',model:'',maxPredictions:'',prediction:[]};
    }

    componentDidMount(){
      const URL = "https://teachablemachine.withgoogle.com/models/o9D1N5TN/";
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const model = tmImage.load(modelURL, metadataURL)
			const maxPredictions = 4
			this.setState({model});
			this.setState({maxPredictions});	
   
    }

     _initModel = () => {   

      this.setState({prediction : this.state.model.predict(this.state.imagePreview, false)});
      console.log('prediction:',this.state.prediction);
     
      // for (let i = 0; i < maxPredictions; i++) {
      //    prediction[i].className + ": " + prediction[i].probability.toFixed(2);

      }

   
=======

class FureJob extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
>>>>>>> ba02eef81827b3b94609f1733b5bc3210806377d
    _handleSubmit(e) {
      e.preventDefault();
      // TODO: do something with -> this.state.file
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} />);
      } else {
        $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
      }
<<<<<<< HEAD

      const predictList = this.state.prediction.map( (classname,probability,index)=>
                          (<li key={index}>{classname}{probability}</li>) )

=======
  
>>>>>>> ba02eef81827b3b94609f1733b5bc3210806377d
      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
<<<<<<< HEAD
              onClick={(e)=>this._handleSubmit(e)}>AI로 보는 나의 적성</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>        
          <button onClick={this._initModel}>모델예측</button>
        <ul>
          {predictList}
        </ul>
=======
              onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>
>>>>>>> ba02eef81827b3b94609f1733b5bc3210806377d
        </div>
      )
    }
  }
    
<<<<<<< HEAD
  export default FutureJob;
=======
  export default FureJob;
>>>>>>> ba02eef81827b3b94609f1733b5bc3210806377d
