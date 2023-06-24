class Father {
    addTwo(){
        let a = 10;
        let b = 20;
        console.log(a + b);
    }
}

class Son {
    addTwo(){
        let a = 10;
        let b = 20;
        console.log(a * b);
    }
}

// let sonObj = new Son();
// sonObj.addTwo()

let fatherObj = new Father();
fatherObj.addTwo()