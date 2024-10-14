function hitungBMI(berat, tinggi) {
    let bmi = berat / (tinggi * tinggi);
    return bmi;
}

let bmi = hitungBMI(95, 170/100);
console.log("BMI anda adalah: " + bmi);
