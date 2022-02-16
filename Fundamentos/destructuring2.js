const [a] = [10] // novo recurso do EC2015
console.log(a);

const [n1, n2, n3, n4 = 999, ] = [1, 22, 3] 
console.log(n1, n2, n3, n4);

const [num1, , num2, , num5, num6 = 0] = [10, 7, 9, 8]
console.log(num1, num2, num5, num6)

const [,[, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota)