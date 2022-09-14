a="";
b1="";
Webcam.attach(camera);
camera=document.getElementById("camera");
Webcam.set({
    width: 350,
    height: 300,
    image_format:'jpeg',
    jpeg_quality: 90
});
function b(){
    Webcam.snap( function(data_uri) {
        document.getElementById('result').innerHTML = '<img id="w" src="'+data_uri+'"/>';
    } );
}
console.log("ml5 version is ",ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/hnrC6cMhm/model.json',n);
function n(){
    console.log("model is loaded");
}


function speak(){
    var synth = window.speechSynthesis;
    x1="the first prediction is"+a;
    x2="and the second prediction is"+b1;
    var y=new SpeechSynthesisUtterance(x1+x2);
    synth.speak(y);
}
function j(){
z=document.getElementById("w");
x.classify(z,answer);
}
function answer(error,result){
if(error){
console.log(error);
}
else{
console.log(result);
document.getElementById("result_emotion_name").innerHTML=result[0].label;
document.getElementById("result_emotion_name2").innerHTML=result[1].label;
a=result[0].label;
b1=result[1].label;
speak();
if(result[0].label == "happy"){
    document.getElementById("p").innerHTML="&#128512;";
}
if(result[0].label == "cry"){
document.getElementById("p").innerHTML="&#128546;";
}
if(result[0].label == "TIGHTLY-CLOSED EYES"){
document.geyElementById("p").innerHTML="&#128518;";
}
if(result[1].label == "happy"){
    document.getElementById("t").innerHTML="&#128512;";
}
if(result[1].label == "cry"){
document.getElementById("t").innerHTML="&#128546;";
}
if(result[1].label == "TIGHTLY-CLOSED EYES"){
document.geyElementById("t").innerHTML="&#128518;";
}
}
}