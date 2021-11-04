function filldatainarray(){
   const size = parseInt(prompt("por favor ingrese el tamaño del arreglo :"))
   const numbers = []
   var count = 0
   for(let i= 0; i< size; i++){
      var valorIngresado = parseInt(prompt("ingrese numero" + ++count))
      numbers[i] = valorIngresado


   }
   numbers.sort(ordenar)
   console.log(numbers)
   const middleElement = number[parseint(size/2)] 
   console.log(middleElement)
   const middle = numbers[middleElement]
   return middleElement

}
function ordenar(a,b){
    return a-b 
}
function onclickcalculatemiddle(){
    const middle = filldatainarray()
    const resultmiddle = document.getElementById("result")
    resultmiddle.innerText = "numeric data calculate middle is : " + middle
}
    