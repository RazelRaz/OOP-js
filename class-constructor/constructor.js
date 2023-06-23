class person {
    constructor(x,y){
        
        console.log('constructor only receive parameter', + x + y);
        return "constructor never return anything";
    }
}
new person(5,8)