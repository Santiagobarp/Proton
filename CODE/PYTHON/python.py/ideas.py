#Quiero hacer un proyecto con relación al analisis de datos en tu carro

#Variables

nombre = input("Escribe tu nombre: ")

kilometros = float(input("Escribe la cantidad de kilometros que manejaste: "))

precio_gas = 25.5

kmsxlitro = 10

def gasto(kilometros):
    litros = kilometros / kmsxlitro
    gasto_xKM = litros * precio_gas
    return gasto_xKM

total = gasto(kilometros)
print (f"{nombre}, tú gasto de gasolina fue de {total} pesos")

