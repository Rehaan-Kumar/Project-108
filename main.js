prediction_1 = "";
prediction_2 = "";

Webcam.set({
    width: 320,
    height: 300,
    image_format: 'png',
    flip_horiz: true
})

camera = document.getElementById("camera");

Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='snapshot' src="+data_uri+">";
    })
}

console.log(ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/JvdWn2eHx/model.json" , model_loaded);

function model_loaded() {
    console.log("Yay!!!!! Model Loaded !!!! :D")
}

function speech() {
    var synth = window.speechSynthesis;
    var speak_1 = "Prediction 1 is " + prediction_1;
    var speak_2 = "Prediction 2 is " + prediction_2;
    var utter_this = new SpeechSynthesisUtterance(speak_1 + speak_2);
    synth.speak(utter_this);
}
