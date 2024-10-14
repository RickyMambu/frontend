let BMI = {
    firstName: "Ricky",
    berat: 95,
    tinggi: 1.9,
    Calculate : function(){
        let BMI1 = this.berat/(this.tinggi*this.tinggi)
        console.log("Your BMI: " + BMI1);
        if (BMI1<16.0){
            console.log('Severely Underweight');
        }
        else if (BMI1>16.0 && BMI1 <=18.4){
            console.log('Underweight');
        }
        else if (BMI1>18.5 && BMI1 <=24.9){
            console.log('Normal');
        }
        else if (BMI1>24.9 && BMI1 <=29.9){
            console.log('Overweight');
        }
        else if (BMI1>29.9 && BMI1 <=34.9){
            console.log('Moderately Obese');
        }
        else if (BMI1>35.0 && BMI1 <=39.9){
            console.log('Severely Obese');
        }
        else if (BMI1>40.0){
            console.log('Morbidly Obese');

        }
    }
}
console.log(BMI);
console.log(BMI.Calculate());