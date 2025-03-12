var a = "Saif"

console.log(a)

console.log(typeof (a))


var a = 55.888

console.log(a)

console.log(typeof(a))

var v = true

console.log(v)

console.log(typeof(v))


var d = "false"

console.log(typeof(d))

var t = [2,4,6,9.4]


console.log(t)

console.log(t[3])

console.log(typeof(t))

console.log(t[2])

console.log(t.length)

console.log(t[t.length-1])


var user = {name : 'Safa', age : 25, city : "Tunis"}

console.log(user.name)

console.log(user)

console.log(typeof(user))

console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))

user.name = "Yassmine"

console.log(user)

var a


console.log(typeof(a))

var b = null

console.log(typeof(b))


var a = 5
var b = 2


console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
a++
console.log(a)
a++
console.log(a)
a--
console.log(a)

a += 9
// a = a + 9
console.log(a)

a= a**b
console.log(a)

var a = 5
var b = 3
var c = "5"

console.log(a == b)
console.log(a ===b)
console.log(a == c)
console.log(a ===c)
console.log(a != c)
console.log(a !== c)

var a = 5
var b = 3


console.log(a>b && a == b)
console.log(a > b || a == b)

var age = 18

if(age<18){
  console.log("Mineur")
}else if(age <60){
  console.log("Adulte")
}else{
  console.log("Vieux")
}