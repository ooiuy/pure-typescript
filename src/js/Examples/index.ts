const s:string = "Hello"
const n:number = 20
const b:boolean = true

//const b2:boolean = 6 //error!!!

const any_obj:any = true

const numb_arr:number[] = [10, 15, 20]

//numb_arr.push("asdasd") //error!!!

const str_arr:string[] = ["qsd", "asda", "s"]

const obj_arr:Object[] = [{}, {age: 26}, {'name':'ss'}, new Object()]

//FUNCTIONS

function test():void{
    console.log('VOID')
    //return 6 //error!!!
}

function sum(x:number, y: number):number{
    return x + y
}

function getObj(name?:string):Object{
    if(name){
        return {
            name: name
        }
    }
    else{
        return null
    } 
}

function getNull():string{
    return null
}

//OBJECTS

interface human { parents?:string[] }

interface IWizard extends human {
    age:number, 
    name:string, 
    isStick: boolean, 
    petName?:string
} 

interface ISuperWizard extends IWizard{
    superMagick?: Function
}

const Dambaldor:ISuperWizard = {
    name: "Dambaldor",
    age: 150,
    isStick: true, 
    superMagick: () => { console.log("BIG WATER") }
}

const testObj:IWizard = {
    age: 12,
    name: "Rohn",
    isStick: false,
    petName: "mouse"
}

const Hermiona:IWizard = {
    age:12,
    name: "Hermiona",
    isStick: true
}

function callWizard(wizard:IWizard):void{
    console.log(wizard)
}

//callWizard(50) //error!!