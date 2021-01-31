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

function identify() {
img=document.getElementById("picture");
classifier.classify(img,gotresults);
}

function gotresults(error,results) {
    if (error) {
        console.log(error)
    }
    else{
        console.log(results);
        Prediction_1=results[0].label;
        Prediction_2=results[1].label;
        console.log(Prediction_1);
        console.log(Prediction_2);
        document.getElementById("prediction_1").innerHTML=Prediction_1;
        document.getElementById("prediction_2").innerHTML=Prediction_2;
        if (Prediction_1=="Smiling") {
            document.getElementById("emoji_1").innerHTML="&#128522;"
        }
        if (Prediction_1=="Happy") {
            document.getElementById("emoji_1").innerHTML="&#128512;"
        }
        if (Prediction_1=="Shocking") {
            document.getElementById("emoji_1").innerHTML="&#x1F632;"
        }
        if (Prediction_1=="Sad") {
            document.getElementById("emoji_1").innerHTML="&#128532;"
        }
        if (Prediction_1=="Angry") {
            document.getElementById("emoji_1").innerHTML="&#128545;"
        }
        
        if (Prediction_2=="Smiling") {
            document.getElementById("emoji_2").innerHTML="&#128522;"
        }
        if (Prediction_2=="Happy") {
            document.getElementById("emoji_2").innerHTML="&#128512;"
        }
        if (Prediction_2=="Shocking") {
            document.getElementById("emoji_2").innerHTML="&#x1F632;"
        }
        if (Prediction_2=="Sad") {
            document.getElementById("emoji_2").innerHTML="&#128532;"
        }
        if (Prediction_2=="Angry") {
            document.getElementById("emoji_2").innerHTML="&#128545;"
        }
        
    }
}