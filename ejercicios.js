let ejercicio = prompt("ejercicios del 1-16");
switch (ejercicio) {
  //inicio ejercicio 1
  case "1":
    let num1 = parseInt(
      prompt("ingresa un numero y te mostrara los primeros 10 multiplos")
    );
    let contador = 1;
    for (let i = 0; i < 10; i++) {
      let multiplo = num1 * contador;
      console.log(num1 + " * " + contador + " = " + multiplo);
      contador++;
    }
    break;
  //Fin ejercicio1 1
  //inicio ejercicio 2
  case "2":
    let suma2 = 0;
    let numero2;

    while (true) {
      numero2 = parseInt(
        prompt("Ingrese un número (ingrese 0 para terminar):")
      );
      if (numero2 == 0) {
        break;
      }
      suma2 += numero2;
    }

    console.log("La suma total de los números ingresados es: " + suma2);
    break;
  //Fin ejercicio1 2
  //inicio ejercicio 3
  case "3":
    let adivinanza = 37;
    let gano = false;
    let contar = 0;
    for (let i = 0; i < 100; i++) {
      let num3 = parseInt(prompt("Adivina el numero escondido entre 1 y 100"));
      if (num3 === adivinanza) {
        gano = true;
        break;
      } else {
        if (num3 > adivinanza) {
          alert("Tu numero es mayor");
        } else {
          alert("Tu numero es menor");
        }
      }
      contar++;
    }
    if (gano === true) {
      console.log("Felicidades ganaste");
      console.log("Lo hiciste en: " + contar + " intentos");
    } else {
      console.log("Fallaste mas de 100 veces. Perdiste");
    }

    break;
  //Fin ejercicio1 3
  //inicio ejercicio 4
  case "4":
    let numero4 = parseInt(prompt("Ingrese un número:"));
    let contador4 = 0;
    if (numero4 > 1) {
      for (let i = 1; i <= numero4; i++) {
        if (numero4 % i === 0) {
          contador4++;
        }
      }
      if (contador4 <= 2) {
        console.log(numero4 + " Es primo");
      } else {
        console.log(numero4 + " No es primo");
      }
    } else {
      console.log("Por favor, ingrese un número válido mayor que 0.");
    }
    break;
  //Fin ejercicio1 4
  //inicio ejercicio 5
  case "5":
    console.log("Divisores de numeros");
    let numero5 = parseInt(prompt("Ingrese un número:"));
    let contador5 = 0;
    if (numero5 > 0) {
      for (let i = 1; i <= numero5; i++) {
        if (numero5 % i === 0) {
          console.log(i);
          contador5++;
        }
      }
      console.log(numero5 + " Se dividio " + contador5 + " veces");
    } else {
      console.log("Por favor, ingrese un número válido mayor que 0.");
    }
    break;
  //Fin ejercicio1 5
  //inicio ejercicio 6
  case "6":
    let array6 = [
      "Alejandro",
      "Sofía",
      "Carlos",
      "Mariana",
      "Javier",
      "Lucía",
      "Fernando",
      "Valeria",
      "Daniel",
      "Natalia",
    ];
    for (let i = 0; i < array6.length; i++) {
      console.log("Elemento en la posición " + i + " " + array6[i]);
    }
    break;
  //Fin ejercicio1 6
  //inicio ejercicio 7
  case "7":
    let array7 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    for (let i = 0; i < array7.length; i++) {
      console.log("Elemento en la posición " + i + " " + array7[i] * 2);
    }
    break;
  //Fin ejercicio1 7
  //inicio ejercicio 8
  case "8":
    let grupoFamiliar = [
      {
        nombre: "Juan",
        edad: 40,
        parentesco: "Padre",
        ocupacion: "Ingeniero",
      },
      {
        nombre: "Ana",
        edad: 38,
        parentesco: "Madre",
        ocupacion: "Doctora",
      },
      {
        nombre: "Luis",
        edad: 15,
        parentesco: "Hijo",
        ocupacion: "Estudiante",
      },
      {
        nombre: "María",
        edad: 12,
        parentesco: "Hija",
        ocupacion: "Estudiante",
      },
      {
        nombre: "Pedro",
        edad: 65,
        parentesco: "Abuelo",
        ocupacion: "Jubilado",
      },
    ];
    for (let i = 0; i < grupoFamiliar.length; i++) {
      let persona = grupoFamiliar[i];
      console.log(
        "Hola, mi nombre es " +
          persona.nombre +
          " tengo " +
          persona.edad +
          " años de edad, soy " +
          persona.parentesco +
          " y mi ocupacion es: " +
          persona.ocupacion
      );
    }
    break;
  //Fin ejercicio1 8
  //inicio ejercicio 9
  case "9":
    let array9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < array9.length; i++) {
      if (array9[i] % 2 !== 0) {
        console.log("Número impar: " + array9[i]);
      }
    }
    break;
  //Fin ejercicio1 9
  //inicio ejercicio 10
  case "10":
    let sumaPares = 0;
    let sumaImpares = 0;
    let numero10;
    do {
      numero10 = parseInt(prompt("Ingrese un número (0 para terminar):"));
      if (numero10 !== 0) {
        if (numero10 % 2 === 0) {
          sumaPares += numero10;
        } else {
          sumaImpares += numero10;
        }
      }
    } while (numero10 !== 0);
    console.log("Suma de números pares: " + sumaPares);
    console.log("Suma de números impares: " + sumaImpares);
    break;
  //Fin ejercicio1 10
  //inicio ejercicio 11
  case "11":
    console.log("Mayor de la lista");
    let array11 = [1, 20, 3, 4, 50, 6, 7, 18, 92, 10];
    let mayor = array11[0];
    for (let i = 0; i < array11.length; i++) {
      if (array11[i] > mayor) {
        mayor = array11[i];
      }
    }
    console.log("el mayor es: " + mayor);
    break;
  //Fin ejercicio1 11
  //inicio ejercicio 12
  case "12":
    console.log("menor de la lista");
    let array12 = [1, 20, 3, 4, 50, 6, 7, 8, 9, -10];
    let menor = array12[0];
    for (let i = 0; i < array12.length; i++) {
      if (array12[i] < menor) {
        menor = array12[i];
      }
    }
    console.log("el menor es: " + menor);
    break;
  //Fin ejercicio1 12
  //inicio ejercicio 13
  case "13":
    let jugador1 = prompt("Ingresa el nombre del jugador 1");
    let jugador2 = prompt("Ingresa el nombre del jugador 2");
    let empate = true;
    do {
      let eleccion1 = prompt("Jugador 1: Ingrese PIEDRA, PAPEL o TIJERAS:");
      let eleccion2 = prompt("Jugador 2: Ingrese PIEDRA, PAPEL o TIJERAS:");
      if (
        (eleccion1 !== "PIEDRA" &&
          eleccion1 !== "PAPEL" &&
          eleccion1 !== "TIJERAS") ||
        (eleccion2 !== "PIEDRA" &&
          eleccion2 !== "PAPEL" &&
          eleccion2 !== "TIJERAS")
      ) {
        console.log("Uno de los jugadores ha hecho trampa.");
      } else {
        if (eleccion1 === eleccion2) {
          console.log("Es un empate.");
        } else if (
          (eleccion1 === "PIEDRA" && eleccion2 === "TIJERAS") ||
          (eleccion1 === "PAPEL" && eleccion2 === "PIEDRA") ||
          (eleccion1 === "TIJERAS" && eleccion2 === "PAPEL")
        ) {
          console.log("Jugador " + jugador1 + " ha ganado.");
          empate = false;
        } else {
          console.log("Jugador " + jugador2 + " ha ganado.");
          empate = false;
        }
      }
    } while (empate);

    break;
  //Fin ejercicio1 13
  //inicio ejercicio 14
  case "14":
    let triarriba = 5;
    for (let i = 1; i <= triarriba; i++) {
      let fila = "";
      for (let j = 0; j < i; j++) {
        fila += "*";
      }
      console.log(fila);
    }
    break;
  //Fin ejercicio1 14
  //inicio ejercicio 15
  case "15":
    let triabajo = 5;
    for (let i = triabajo; i > 0; i--) {
      let fila = "";
      for (let j = 0; j < i; j++) {
        fila += "*";
      }
      console.log(fila);
    }
    break;
  //Fin ejercicio1 15
  //inicio ejercicio 16
  case "16":
    let array16 = [15, 3, 27, 8, 42, 14, 6, 31, 19, 5];
    let n = array16.length;
    console.log("Numeros desordenados ");
    for (let i = 0; i < array16.length; i++) {
      console.log(array16[i]);
    }
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (array16[j] > array16[j + 1]) {
          let temp = array16[j];
          array16[j] = array16[j + 1];
          array16[j + 1] = temp;
        }
      }
    }
    console.log("Numeros ordenados");
    for (let i = 0; i < array16.length; i++) {
      console.log(array16[i]);
    }
    break;
  //Fin ejercicio1 16
}
