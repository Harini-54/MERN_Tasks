const car={
    make:"Toyota",
    model:"Camry",
    year:2022,
    drive : function (){
        this.msg = `The person is driving ${this.make} ${this.model} that was launched in ${this.year}.`;
        return this.msg
    }
}
console.log(car.drive());


//output--> The person is driving Toyota Camry that was launched in 2022.