const { error } = require("console")

// Escribe tu código aquí:
const mi promiseRechazada = new Promise
((resolve,reject)=> {
    setTimeout(()=> {
        reject('Promise rechazada')
    },2000)
})

miPromiseRechazada.catch((error) => {
    console.log('Error:',error)
})