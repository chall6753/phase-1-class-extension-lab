class Polygon{
    constructor(arr){
        this.arr = arr

    }
    get countSides(){
        return this.arr.length
    }
    get perimeter(){
       return this.arr.reduce((accumulator,currentValue) =>{
            return accumulator += currentValue
        })
        
    }
}      

class Triangle extends Polygon{
    get isValid(){
        let side1 = this.arr[0]
        let side2 = this.arr[1]
        let side3 = this.arr[2]

        if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
            return true
        }else{return false}
    }
}

class Square extends Polygon{
    
    get isValid(){
        let side1 = this.arr[0]
        let side2 = this.arr[1]
        let side3 = this.arr[2]
        let side4 = this.arr[3]

        if(side1 === side2 && side2 === side3 && side3 === side4){
            return true
        }else{return false}
    }
    get area(){
        
        
        return  Math.pow(this.arr[0],2)
    }
}


let square = new Square([4,4,4,4])
let tri = new Triangle([4,4,14])