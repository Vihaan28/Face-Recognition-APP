Webcam.set({
width:350,
height:300,
image_format: 'png',
png_quality:99
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function snapshot()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';

});
}

console.log("ml5 version:" , ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/4wPQc4IXN/model.json" , modalloaded);

function modalloaded(){
    console.log("modal loaded");
        }
    
        function identify(){
            img = document.getElementById("captured_image");
     classifier.classify(img , gotresult);
    
        }
    
        function gotresult( error , result){
    
            if(error){
    console.error(error);
            }
            else{
    console.log(result)
    document.getElementById("object_output").innerHTML = result[0].label;
    document.getElementById("object_accurancy").innerHTML = result[0].confidence.toFixed(2);
    
            }
        }