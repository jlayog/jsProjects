let name = 'Jerel Layog'
// Length Property
console.log(name.length)

//Convert to Upper Case
console.log(name.toUpperCase())

let isValidPassword = function (password) {
   if (password.length > 8 && !password.includes('password')) {
       return true
    }
}

console.log(isValidPassword('sdfa'))
console.log(isValidPassword('adfa!@#!@$$~`121`2'))
console.log(isValidPassword('acdsacpassword'))