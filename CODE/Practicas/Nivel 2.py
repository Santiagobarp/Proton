#Pedir datos al usuario

print ("""EVALUACIÓN Y CLASIFICACIÓN DEL PRESUPUESTO MENSUAL
       
       El objetivo de este programa es clasificar tu presupuesto mensual.
       
       A continuación escribe los siguientes puntos:
       
       - Ingreso Mensual
       - Gastos Mensual
       - Clasificación de gastos que en total del el gasto mensual: comida, renta, carro y otros
       - Deudas (si ó no)""")

ingreso_mensual = int(input("""
                            Escribe tu ingreso mensual: """))
gasto_mensual = int(input("""
                            Escribe tu gasto mensual: """))
print ("""
       Escribe el gasto por categoria que en conjunto den el gasto mensual: """)
categorias = {
    'comida' : 0,
    'renta' : 0,
    'carro' : 0,
    'otros' : 0
}
comida = int(input("""
                            Escribe cuanto gastas en comida: """))
renta = int(input("""
                            Escribe cuanto gastas en renta: """))
carro = int(input("""
                            Escribe cuanto gastas en el carro: """))
otros = int(input("""
                            Escribe cuanto gastas en otros: """))
deudas = input("""
                            Escribe si tienes deudas (si ó no): """).strip().lower()


categorias['comida'] += comida

categorias['renta'] += renta

categorias['carro'] += carro

categorias['otros'] += otros

#Confirmar si el total del desglose de categorias corresponde al gasto mensual

if gasto_mensual == categorias["comida"] + categorias["renta"] + categorias["carro"] + categorias["otros"]:
    print ("""
        El gasto individual corresponde al desglose de gasto mensual, ¡bien hecho!""")
else:
    print ("El gasto no corresponde al desglose de gastos, ¡adiós!")

#Evaluar condiciones

if gasto_mensual < ingreso_mensual*0.6 and deudas == "no":
    print("""
        ¡Estás administrando tus finanzas de forma excelente!""")
    
elif gasto_mensual >= ingreso_mensual*0.6 and gasto_mensual <= ingreso_mensual*0.9:
    print("""
        Tus finanzas son estables, pero podrías mejorar tu ahorro.""")
    
elif gasto_mensual > ingreso_mensual*0.9 and deudas == "si":
    print("""
          Cuidado, tus fianzas son críticas. Ajusta tu gastos.""")
    
else:
    print ("Revisa tus gastos y considera crear un presupuesto mejor organizado.")

#Porcentaje por categoría 


print(f"""
                            El gasto de comida es: {categorias['comida']} y equivale al: {((categorias['comida'])*100)/gasto_mensual:.2f}%""")

print(f"""
                            El gasto de renta es: {categorias['renta']} y equivale al: {((categorias['renta'])*100)/gasto_mensual:.2f}%""")

print(f"""
                            El gasto de carro es: {categorias['carro']} y equivale al: {((categorias['carro'])*100)/gasto_mensual:.2f}%""")

print(f"""
                            El gasto de otros es: {categorias['otros']} y equivale al: {((categorias['otros'])*100)/gasto_mensual:.2f}%""")
