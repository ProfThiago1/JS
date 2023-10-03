let valores = [5,8,9,10,2,3]
valores.sort()
/*
for(let pos = 0; pos < valores.length; pos++){
    
    console.log(`Àposição ${pos} tem valores ${valores[pos]}`)
}*/

for (const pos in valores) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}