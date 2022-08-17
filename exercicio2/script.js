let numeros = +prompt('QUER MULTIPLICAR ATÉ QUE NÚMERO?')
 let numero = +prompt('POR QUAL NÚMERO?')

 for(let i = 0; i <= numeros; i = i + 1 ){
     console.log(`seu numero é ${i}*${numero} = ${i*numero}`)
     alert(`${i} x ${numero} = ${i*numero}`)

}