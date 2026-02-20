# Cifrado-de-Abecedario

### [Objetivo del Proyecto]
Desarrollar una herramienta web interactiva para el cifrado y descifrado de mensajes mediante algoritmos de sustitución (César) e inversión (Atbash), integrando la flexibilidad de alfabetos personalizados basados en el código ASCII.

---

##  Introducción Histórica y Seguridad
El criptoanálisis moderno nace con **Al-Kindi**, quien introdujo el **análisis de frecuencias**. Esta técnica demuestra que los métodos César y Atbash ya no son viables para la protección de datos actual, debido a que:
1. **Vulnerabilidad Estadística:** La repetición de patrones en el lenguaje natural permite romper el código sin conocer la clave.
2. **Espacio de Claves Reducido:** El cifrado César solo posee un número limitado de rotaciones (según el tamaño del alfabeto), lo que facilita ataques de fuerza bruta.

---

##  Documentación del Desarrollo (Seguridad y Lógica)
Para garantizar la integridad del sistema, se implementaron las siguientes lógicas:

### 1. Algoritmo César (Sustitución Progresiva)
Se utiliza la aritmética modular para asegurar que el desplazamiento sea circular dentro del alfabeto definido por el usuario:
- **Cifrado:** $C = (P + n) \pmod{L}$
- **Descifrado:** $P = (P - n + L) \pmod{L}$
donde $P$ es la posición del carácter, $n$ el desplazamiento y $L$ la longitud del alfabeto.

### 2. Algoritmo Atbash (Inversión de Espejo)
El sistema identifica el índice del carácter y lo sustituye por su opuesto exacto en el arreglo:
- $Índice_{Final} = (L - 1) - Índice_{Inicial}$

---

##  Instrucciones de Uso
1. **Alfabeto:** Ingrese el conjunto de caracteres deseado (Soporta ASCII completo).
2. **Método:** Seleccione entre César o Atbash.
3. **Acción:** Use los botones "Cifrar" o "Descifrar" para obtener el resultado instantáneo.
