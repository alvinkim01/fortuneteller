import React from 'react';
import './FutureJob.css';

class FutureJob extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: '',imagePreview:''};
    }
   _initModel = async () => {
      const URL = "https://teachablemachine.withgoogle.com/models/o9D1N5TN/";
      const modelURL = URL + "model.json";
      const metadataURL = URL + "metadata.json";

      const model = await tmImage.load(modelURL, metadataURL);
      const maxPredictions = 6;
      return model;

   }

   
//    let model, webcam, labelContainer, maxPredictions;
//    async function init() {
//     const modelURL = URL + "model.json";
//     const metadataURL = URL + "metadata.json";
//     // load the model and metadata
//     // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
//     // or files from your local hard drive
//     // Note: the pose library adds "tmImage" object to your window (window.tmImage)
//     model = await tmImage.load(modelURL, metadataURL);
//     maxPredictions = model.getTotalClasses();
//     labelContainer = document.getElementById("label-container");
//     for (let i = 0; i < maxPredictions; i++) { // and class labels
//         labelContainer.appendChild(document.createElement("div"));
//     }
// }
// // run the webcam image through the image model
// async function predict() {
//     // predict can take in an image, video or canvas html element
//     var image = document.getElementById("face-image")
//     const prediction = await model.predict(image, false);
//     for (let i = 0; i < maxPredictions; i++) {
//         const classPrediction =
//             prediction[i].className + ": " + prediction[i].probability.toFixed(2);
//         labelContainer.childNodes[i].innerHTML = classPrediction;
//     }
// }
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
        </div>
      )
    }
  }
    
  export default FutureJob;