#Voy hacer un programa que pida el nombre y la cantidad de prendas cocidas en el dia para que el mismo programa indique cual 
#fue la menos productiva y la más productiva

def productividad(num_costureras):
    costureras = []
    for c in range(num_costureras):
        nombre = input("Escribe el nombre de la costurera: ")
        num_pzs = int(input("Escribe el número de piezas que cosio el dia lunes: "))
        costurera = (nombre,num_pzs)
        costureras.append(costurera)
    costureras.sort(key=lambda x:x[1])
    tabla = costureras
    mejor_nombre = costureras[-1][0]
    mejor_cantidad = costureras[-1][1]
    peor_nombre = costureras[0][0]
    peor_cantidad = costureras[0][1]
    print (f""" 
           La mejor costurera fue {mejor_nombre} y la cantidad de piezas que cocio fue {mejor_cantidad}
           """)
    print (f""" 
           La peor costurera fue {peor_nombre} y la cantidad de piezas que cocio fue {peor_cantidad}
           """)
    return tabla

estatus = productividad(3)
print (estatus)

