Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90
});

Webcam.attach("#camera");

function capture(){
    Webcam.snap(function(pic) {
        document.getElementById("snapshot").innerHTML=`<img src=${pic} id="picture">`
    })
}

console.log(" ml5 ", ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ZochliSEF/model.json",modelloaded);

function modelloaded() {
    console.log("Your Model Is Ready To Be Used")
} 

function speak(){
    speech=window.speechSynthesis;
    speak_data_1="The First Prediction Is"+Prediction_1;
    speak_data_2="The Second Prediction Is"+Prediction_2;
    saythis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    speech.speak(saythis);
}