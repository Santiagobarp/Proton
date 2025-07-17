// comentarios de una línea 
/*
descripción : mi primer programa en C
fecha: 22/01/2025
*/ 

// librerías externas
#include <stdio.h> // estándar input output 
#include <stdlib.h> // libreria estandar de entrada y salida

// Tipo_dato_de_retorno   nombre_de_la_funcion    (argumentos)

//declaración de variables globales
void ejercicio1 (void)
{
    //declaración de variables, tipos nativos de C
    // int, enteros
    //float, números reales con decimal
    //char, caracteres
    //double, números reales con el doble de precisión
    int a,b,c;
    float pi = 3.141592;
    char letter = "a";
    //strings se generan con arreglos de caracteres 
    char word[100] = "Hola que tal";

    printf("%s\n%s",word);
}


int main(void) {  // Declaración correcta de la función principal

    //declaración de variables locales al contexto 

    printf("Hello world!\n"); // Imprime "Hello world!" en la consola
    system("read -p 'Press any key to continue...'"); // función para llamar a comandos del sistema
    ejercicio1(); //llamada, invocación o uso de mi funcion
    return 0;               // Retorno exitoso al sistema operativo
}