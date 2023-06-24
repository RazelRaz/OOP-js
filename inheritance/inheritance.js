class Father {
    add(){
       let a = 10;
       let b = 20;
        console.log(a + b);
    }
}

class Son extends Father{

}

let sonOBJ =  new Son();
sonOBJ.add()