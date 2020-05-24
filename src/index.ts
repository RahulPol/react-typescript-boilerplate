/**
 * To check typescript is configured correctly 
 * Run command "tsc" at project root directory(make sure you have typescript installed globally)
 * Check index.js and index.js.map is generated in ./dist/
 * Run node index.js at ./dist/ directory
 * The output should be 25
 */



function add(a: number, b:number):number{
    return a+b;
}

function AddHandler(a:number, b:number, cb:(result: number)=>void){
    const result = add(a,b);
    cb(result);
}

AddHandler(12,13,(result:number)=>{
    console.log(result);
})