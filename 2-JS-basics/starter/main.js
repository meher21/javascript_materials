// // var firstName="Meher"
// // // var lastName="Tetoo"
// // var age=23
// // console.log(firstName+' '+age)

// // // console.log(lastName)
// // // console.log(age)
// // job="Software Developer"
// // isMarried=false
// // console.log('My name is '+firstName+' and my age is '+age+' and i work as '+job+' and am i married'+isMarried)
// // age="twenty eight"
// // lastName=prompt('Enter lastname')
// // alert('My name is '+firstName+' and my age is '+age+' and i work as '+job+' and am i married'+isMarried)
// // console.log('My name is '+firstName+' '+lastName+' my age is '+age)

// // var year,curMeher,curMonu;
// year=2019
// curMeher=year-1995
// curMonu=year-1999
// // console.log(curMeher)
// // console.log(curMonu)

// // console.log(year+1)

// // older=curMeher>curMonu
// // console.log(older)

// // console.log(typeof year)

// // console.log(typeof older)

// // var x
// // console.log(typeof x)
// avgAge=(curMeher+curMonu)/2
// console.log(avgAge)

// var x,y
// x=y=(3+5)*4-6
// console.log(x,y)
// x*=2
// console.log(x)
// x+=2
// console.log(x)
// x-=2
// console.log(x)
// x++
// console.log(x)
// x--
// console.log(x)

// var mMark,mJohn,hMark,hJohn,bmiMark,bmiJohn;
// mMark=prompt('Enter mass of Mark')
// mJohn=prompt('Enter mass of John')
// hMark=prompt('Enter height of Mark')
// hJohn=prompt('Enter height of John')
// bmiMark=mMark/(hMark*hMark)
// bmiJohn=mJohn/(hJohn*hJohn)
// console.log("BMI of Mark "+bmiMark)
// console.log("BMI of John "+bmiJohn)
// if(bmiMark>bmiJohn){
// console.log('Marks \'BMI is higher which is '+bmiMark)
// }else{
//     console.log('Johns \'BMI is higher which is '+bmiJohn)
// }

// var firstName='Meher'
// var isMArried=false
// if(isMArried===true){
//     console.log(firstName+' is married')
// }else{
//     console.log(firstName+' is not going to be marry')
// }
//  var firstName="Meher"
//  var age=23
//  if(age<18){
// console.log(firstName+' is a teeanger')
//  }else if(age>=18 && age<=25 ){
//      console.log(firstName+' is a boy')
//  }else if(age>25){
//      console.log(firstName+' is a man')
//  }
// let fs=require('fs')
// fs.readFile('hello.txt',function(err,data){
//     if(err){
//         return err
//     }
//     console.log(' '+data)
// })
// let readFile = require('./readFile')
// async function f() {
//     try {
//         let res = await readFile('./hello.txt')
//         console.log(res.toString())
//     } catch (err) {
//         console.log('File not found!!!')
//     }

// }

// f()

// promise
//     .then(function(a){
//         console.log(' '+a)
//     })
//     .catch(function(e){
//         console.log(e)
//     })

// var firstName='meher'
// var age=23
// age>18?console.log(firstName+' is a young boy'):console.log(firstName+' is a child')

// job='project trainee'
// switch(job){
//     case 'project trainee':
//         console.log(firstName+' job is '+job)
//         break
//     case 'accountant':
//             console.log(firstName+' job is '+job)
//             break
//     case 'manager':
//             console.log(firstName+' job is '+job)
//             break
//     default:
//         console.log(firstName+' is not working')
// }

// switch(true){
//     case age>18:
//             console.log(firstName+' is young boy and he is working as '+job)
//             break  
//     case age<18:
//             console.log(firstName+' is a boy and he is working as '+job)

// }


// var height=23
// if(height==='23'){
//     console.log('variable is defined')
// }else{
//     console.log('variable is not defined')
// }


// jg1=89
// jg2=120
// jg3=103
// mg1=116
// mg2=94
// mg3=123

// aJohn=(jg1+jg2+jg3)/3
// aMike=(mg1+mg2+mg3)/3
// if(aJohn>aMike){
//     console.log("Johns team is winner with avearage score "+aJohn)
// }else{
//     console.log("Mikes team is winner with avearage score "+aMike)
// }

// Marryg1=97
// Marryg2=134
// Marryg3=105

// aMarry=(Marryg1+Marryg2+Marryg3)/3
// if(aJohn>aMike&&aJohn>aMarry){
//     console.log("Johns team is winner with avearage score "+aJohn)
// }else if(aMike>aJohn&&aMike>aMarry){
//     console.log("Mikes team is winner with avearage score "+aMike)
// }else if(aMarry>aJohn&&aMarry>aMike){
//     console.log("Marrys team is winner with avearage score "+aMarry)
// }else{
//     console.log("There is a draw")
// }

// function calcAge(birthYear)
// {
//     var age=2019-birthYear
//     console.log("Your age is "+age)
//     return age
// }
// function retireAge(birthYear){
//  var age=calcAge(birthYear)
// var retire=65-age
// if(retire>0){
//     console.log(retire+' years are remaining for retirement')
// }else{
//     console.log('you are already retired')
// }
// }
// retireAge(1995)
// retireAge(1999)
// retireAge(1998)


//function expressions
// var whatDoYouDo=function(job,firstName){
//     switch(job){
//         case 'project trainee':
//             return firstName+' is doing job as '+job
//         case 'teacher':
//                 return firstName+' is doing job as '+job
//         case 'manager':
//                 return firstName+' is doing job as '+job
//         case 'security':
//                 return firstName+' is doing job as '+job
//         default:
//                 return firstName+' is doing doing something else'
//     }
// }
// console.log(whatDoYouDo('project trainee','meher'))
// console.log(whatDoYouDo('teacher','ravindra sir'))
// console.log(whatDoYouDo('manager','valverede'))
// console.log(whatDoYouDo('security','antivirus'))
// console.log(whatDoYouDo('king','xyz'))

// var name=['Meher','Rahul','Shikhar']
// var years=new Array(1995,1996,1997)
// console.log(name)
// console.log(years)
// console.log(name.length)
// console.log(years.length);
// name[1]=['shubham']
// console.log(name[2])

// var meher=['Meher','Tetoo',1995,'developer',true]
// console.log(meher)
// meher.push('gcoea')
// meher.unshift('Mr')
// console.log(meher)
// meher.pop()
// meher.pop()
// meher.shift()
// console.log(meher)
// var i=meher.indexOf(1995)
// console.log(i)
// var p=meher.indexOf('gcoea')===-1?'not present':'present'
// console.log(p)

// bills=[124,48,268]
// var tip=new Array()
// var t1=124*(15/100)
// var t2=48*(20/100)
// var t3=268*(10/100)
// tip.push(t1)
// tip.push(t2)
// tip.push(t3)
// var final=new Array()
// f1=bills[0]+t1
// f2=bills[1]+t2
// f3=bills[2]+t3
// final.push(f1)
// final.push(f2)
// final.push(f3)
// console.log(tip)
// console.log(final)

// function tipsCalculator(value){
//     var percentage
//     if(value<50){
//         percentage=0.2
//     }else if(value>=50&&value<100){
//         percentage=0.15
//     }else{
//         percentage=0.1
//     }
//     return percentage*value
// }

// bills=[124,48,268]
// tips=[tipsCalculator(bills[0]),tipsCalculator(bills[1]),tipsCalculator(bills[2])]
// finalAmount=[tips[0]+bills[0],tips[1]+bills[1],tips[2]+bills[2]]
// console.log(tips)
// console.log(finalAmount)

//objects and properties
// var meher={
//     firstName:'Meher',
//     lastName:'Tetoo',
//     birthYear:1995,
//     college:[
//         'rujc',
//         'gcoea'
//     ],
//     isMarried:false,
//     job:'developer'
// }
// console.log(meher)
// console.log(meher.firstName)
// console.log(meher.isMarried)
// console.log(meher['firstName'])
// console.log(meher['isMarried'])
// console.log(meher.college[0])
// meher.isMarried=true
// meher['job']='project trainee'
// console.log(meher)


// //creating new object

// var mt=new Object()
// mt.firstName='rahul'
// mt.lastName='mule'
// mt.birthYear=1994
// // mt.college[0]='rujc'
// // mt.college[1]='prmceam'
// mt.isMarried='false'
// mt.job='developer'
// console.log(mt)

//objects and methods

// var meher={
//     firstName:'Meher',
//     lastName:'Tetoo',
//     birthYear:1995,
//     college:[
//         'rujc',
//         'gcoea'
//     ],
//     isMarried:false,
//     job:'developer',
//     calcAge:function(){
//     this.age=2019-this.birthYear //this it is referring to the current context of the object
//     }
// }
// meher.calcAge()
// console.log(meher)

//coding challenge 4

// var meher={
//     'fullName':'Meher Tetoo',
//     'mass':48,
//     'height':1.79,
//     calcBMI:function(){
//         this.bmiMeher=this.mass/(this.height*this.height)
//         return this.bmiMeher
//     }
// }
// var rahul={
//     'fullName':'Rahul Mule',
//     'mass':55,
//     'height':1.78,
//     calcBMI:function(){
//         this.bmiRahul=this.mass/(this.height*this.height)
//         return this.bmiRahul
//     }
// }
// mehersBMI=meher.calcBMI()
// rahulsBMI=rahul.calcBMI()
// console.log(meher)
// console.log(rahul)
// if(mehersBMI>rahulsBMI){
//     console.log(meher.fullName+' have Highest BMI which is '+meher.bmiMeher)
    
// }else if(mehersBMI<rahulsBMI){
//     console.log(rahul.fullName+' have Highest BMI which is '+rahul.bmiRahul)
// }else{
//     console.log('both have equal bmis')
// }

//loops and iterations

// for(var i=1;i<=20;i++){
//     console.log(i)
// }

// var meher=['Meher','Tetoo',1995,'developer',true]
// for(var i=0;i<meher.length;i++){
//     console.log(meher[i])
// }
// var i=0;
// while(i<meher.length){
//     console.log(meher[i])
//     i++
// }


// for(var i=0;i<meher.length;i++){
//     if(typeof meher[i]!=='string')continue
//     console.log(meher[i])
// }
// for(var i=0;i<meher.length;i++){
//     if(typeof meher[i]!=='string')break
//     console.log(meher[i])
// }
// for(var i=meher.length-1;i>=0;i--){
//     console.log(meher[i])
// }

//coding challenge 5
// tips=new Array()

// finalAmount=new Array()
// var john={
//     'fName':'John',
//     'bills':[124,48,268,180,42],
//     'tip':function(){
  
//         var percentage
//         for(var i=0;i<this.bills.length;i++){
//             if(this.bills[i]<50){
//                 percentage=0.2
//             }else if(this.bills[i]>=50 && this.bills[i]<=200){
//                 percentage=0.15
//             }else 
//                { percentage=0.1
//         }
//         tips.push(this.bills[i]*percentage)
//         finalAmount.push(this.bills[i]+tips[i])
 
//     }
        
//     }
// }




// Marktips=new Array()

// MarkfinalAmount=new Array()
// var mark={
//     'fName':'Mark',
//     'bills':[77,375,110,45],
//     'tip':function(){
  
//         var percentage
//         for(var i=0;i<this.bills.length;i++){
//             if(this.bills[i]<100){
//                 percentage=0.2
//             }else if(this.bills[i]>=100 && this.bills[i]<=300){
//                 percentage=0.1
//             }else 
//                { percentage=0.25
//         }
//         Marktips.push(this.bills[i]*percentage)
//         MarkfinalAmount.push(this.bills[i]+Marktips[i])
 
//     }
        
//     }
// }

// function calcAverage(t){
//     var sum=0
//     for(var i=0;i<t.length;i++){
//         sum=sum+t[i]
//     }
//     this.average=sum/t.length;
//     return this.average
// }
// john.tip()
// mark.tip()
// johnAverage=calcAverage(tips)
// markAverage=calcAverage(Marktips)

// if(johnAverage>markAverage){
//     console.log('Johns average is higher whhich is '+johnAverage)
// }else{
//     console.log('Marks average is higher whhich is '+markAverage)
// }

