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


var month = 5

switch(month){
  case 1 : console.log("Janvier")
    break

  case 5 : console.log("Mai")
    break
  default : console.log("Error")
}


function Somme(safa,habib){
  return safa + habib
}


console.log(Somme(3,8))
console.log(Somme(93, 81))


function checkNumber(a){
  if(a >= 0){
    return "Positif"
  }else{
    return "Negatif"
  }
}

console.log(checkNumber(6))
console.log(checkNumber(-6))
console.log(checkNumber(0))


for(var i = 0; i<2; i ++){
  console.log(i)
}

var t = [2,7,9,2]

var sum = 0

for(var i = 0; i < t.length; i++){
  sum = sum + t[i]
}

console.log(sum)

var t = [2,7,9,2]

var sum = 0

for(var saif in t){
  sum += t[saif]
}

console.log(sum)

var t = [2, 7, 9, 2]

for(var habib of t){
  console.log(habib)
}

var i = 6

// while(i < 4){
//     console.log("Safa")
//     i++
// }

do{
    console.log("Safa")
    i++
}while(i<4)

  