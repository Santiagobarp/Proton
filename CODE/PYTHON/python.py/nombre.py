#Función normal

def suma(a,b):
    sum = a + b
    return sum

print (suma(5,3))

#Función con lambda

suma_lambda = lambda a,b: a + b

print(suma_lambda(5,4))

numeros = [1,2,3,4,5]

mul_lambda = list(map(lambda x: x ** 2, numeros))

print(mul_lambda)