//IIFE
(function(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    console.log("BMI anda adalah: " + bmi);
})(95, 170 / 100);



//Callback
function hitungBMI(berat, tinggi, callback) {
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}
let tinggi = 1.7
let berat = 95 
hitungBMI(berat, tinggi, function(output){
    console.log("BMI anda adalah: " + output);
})



