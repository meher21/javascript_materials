//execution context
// var name='meher'
// function f1(){
//     var a='hello'
//     f2()
//     var b=a+' '+name
//     console.log(b)
// }
// function f2(){
//     var c='hi'
//     f3()
//     var d=c+' '+name
//     console.log(d)
// }
// function f3(){
//     var e='heyyy'
//     var f=e+' '+name
//     console.log(f)
// }
// f1()

//this keyword

var meher={
    name:'meher',
    year:1995,
    calcAge:function(){
        console.log(this)
        console.log(2019-this.year)
        
        // function innerFunction(){
        //     console.log(this)
        // }
        // innerFunction()
     }
}
var rahul={
    name:'rahul',
    year:1994
}
meher.calcAge()
rahul.calcAge=meher.calcAge //function borrowing
rahul.calcAge()