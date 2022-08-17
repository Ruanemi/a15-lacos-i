let coxinha = prompt('SE QUISER COXINHA\n DIGITE:"S".\nSE NÃO DIGITE: "N".').toUpperCase()
const sim ='S'
const nao = 'N'
let conta = 0

while(coxinha === sim ){
    conta += 2.50;
    coxinha = prompt('SE QUISER MAIS JÁ SABE NÉ :).\nÉ SÓ DIGITAR : "S"!\nSe quiser a conta digite: "n" :(.').toUpperCase()

}
alert(`SUA CONTA FICOU ${conta}$ MERREU! `)
