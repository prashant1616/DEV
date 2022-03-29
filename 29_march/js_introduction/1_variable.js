// // java script is a dymically typed language
// // it is amulti threaded language.

// // var a;
// // console.log(a)//undefined
// // a=3;
// // console.log(a)//print 3
// // a='i am a String'
// // console.log(a)//print i am astring
// // a=true;
// // console.log(a)//print true 
// // a=null
// // console.log(a)//print null

// // // var a=34
// // var b=2.4
// // var c=2.09999
// // console.log(a)
// // console.log(b)
// // console.log(c)

// // var keywords have some problem
// // redeclaration
// var b= 'hello'
// console.log(b)
// var b='bye'
// console.log(b)

// // overcoming redeclaration
// // using let
// let a='bye'
// console.log(a)
// let a='hello'
// console.log(a)
// // it will show that the item is already decleared


//loops
// is prime
var flag=true
var num=3
for(var i=2; i*i<=num;i++){
  if (num%i==0){
      flag = false
      break
  } 
}
if (flag ==true){
      console.log('number is prime')
}
else{
    console.log('number is not prime')
}
// 2nd problem with var -scoping problem
// let is block scoped
// var is function scoped



//const keyword
// const c=2;
  
// const c =2 ;  //no decleration
// a=hello     //no reassigning