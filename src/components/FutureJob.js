import React from 'react';
import './FutureJob.css';
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

      const predictList = this.state.prediction.map( (classname,probability,index)=>
                          (<li key={index}>{classname}{probability}</li>) )

      return (
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput" 
              type="file" 
              onChange={(e)=>this._handleImageChange(e)} />
            <button className="submitButton" 
              type="submit" 
              onClick={(e)=>this._handleSubmit(e)}>AI로 보는 나의 적성</button>
          </form>
          <div className="imgPreview">
            {$imagePreview}
          </div>        
          <button onClick={this._initModel}>모델예측</button>
        <ul>
          {predictList}
        </ul>
        </div>
      )
    }
  }   

  export default FutureJob;
