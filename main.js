Webcam.set({ 
    width:350, 
    height:300, 
    image_format : 'png', 
    png_quality:90 });

camera = document.getElementById("live_camera"); 
Webcam.attach( '#live_camera' );

function take_snapshot() { 
    Webcam.snap(function(data_uri) { 
        document.getElementById("captured_image").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'; }); }

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kbMkWGp8p/model.json');

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("person_name").innerHTML = results[0].label; 
        document.getElementById("person_accuracy").innerHTML = results[0].confidence.toFixed(2) * 100 + "%";
    }
}

