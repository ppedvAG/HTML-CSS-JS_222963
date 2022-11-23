// Funktionen
// Syntax:
// function identifier(optionale Parameter) { code_Block }
// Funktionen, die zu einem Objekt gehören nennen wir Methoden, z.B console.log()
// Funktionen werden aufgerufen indem wir Ihren Identifier schreiben und runde Klammern anhängen
// und dabei wenn nötig Parameter hinzufügen
console.log("Hallo Welt!"); // funktionsaufruf mit Parametern
console.clear(); // Funktionsaufruf ohne Parameter
// Löscht den Verlauf der Konsole

// Erstellen einer einfachen Funktion ohne Rückgabe:
// Solche FUnktionen geben in JS standardmäßig undefined zurück
function greeter() {
    console.log("Hallo!");
}

greeter();


function greetPerson(name)
{
    return "Hello " + name;
}

// Funktionen können auch andere Funktionen als Parameter übergeben werden
console.log(greetPerson("Martin Hellwig"));


function multiplier(numOne, numTwo)
{
    return numOne * numTwo;
}

let ergebnis1 = multiplier(5, 25);
let ergebnis2 = multiplier(8, 98);
console.log("Ergebnis1: " + ergebnis1 + "\n" + "Ergebnis2: " + ergebnis2);

// Variablen können auch eine Funktion als Wert enthalten
let testX = multiplier;
console.log(testX(12,44));
// Hier wird der Identifier der Variable zum Alias der Funktion

// default-Werte
// Falls eine FUnktion mit zu wenigen Parametern aufgerufen wird, können wir
// sie mit default-Parametern ersetzen
function divide(numOne = 1, numTwo = 1)
{
    return numOne / numTwo;
}

console.log(divide());

// Kontrollstrukturen
// if
// Bedingter Block
// Syntax:
// if (Bedingung) {Code_Block}
// Können beliebig verschachtelt werden
// Der Blockinhalt wird nur ausgeführt, falls die Bedingung wahr ist
let numberOne = 30;
let numberTwo = 30;

if(numberOne < numberTwo)
{
    console.log(numberOne + " ist kleiner als " + numberTwo);
}
// else if muss immer auf if folgen
else if(numberOne > numberTwo)
{
    console.log(numberOne + " ist größer als " + numberTwo);
}
// else wird ausgeführt falls der vorangehende if Block oder else if block falsch war
else
{
    console.log(numberOne + " ist gleich groß wie " + numberTwo);
}

// Vergleichs-Operatoren in JS:

// == selber Wert
// === selber Wert und selber Typ
// != ungleicher Wert
// !== ungleicher Wert oder Typ
// Empfehlung zu === und !==
// < kleiner als
// > größer als
// <= kleiner gleich
// >= größer gleich

// Logische Operatoren:
// && Logisches und 1 < 2 && 1 < 3 => Nur true wenn beide Bedingungen zutreffen
// || logische oder 1<4 || 1<-10 => true sobald eine der Bedingung wahr ist

// Übung:
// Schreibe eine Funktion, die prüft ob eine Zahl gerade oder ungerade ist
// Rückgabe soll true oder false sein
/*function isEven(number)
{
    if(number % 2 === 0)
    { 
        return true;
    }
    else{
        return false;
    }
    
}*/

// Ternary Operator
// Kurzschreibweise für if Blöcke
// Syntax: (Bedingung) ? code-Block falls Wahr : code-Block falls falsch

// isEven mit Ternary:
// function isEven(number) {
//  return (number % 2 === 0) ? true : false;    
//}

// noch kürzer:
function isEven(number)
{
    return number % 2 === 0;
}

let num1 = 5;
let bool = isEven(num1);
console.log(bool);

// switch-Case
// Vergleicht den Wert einer Variable oder direkt einen Wert mit mehreren Möglichkeiten

// Syntax:
/* switch(variable)
{
    case 1:
        code Fall 1;
        break;
    case 2:
        code Fall 2;
        break;
    default:
        code Falls kein Fall eintrat
}

*/

let numswitch = 'b'

switch(numswitch)
{
    case 'a':
        console.log("Zahl ist a");
        break; // ist wichtig, da sonst alles nach dem ersten eingetretenen Fall ausgeführt wird
    case 'b':
        console.log("Zahl ist b");
        break;
    case 'c':
        console.log("Zahl ist c");
        break;
    default:
        console.log("Zahl hat einen unerwarteten Wert");
    // beim default benötigen wir kein break, da danach nichts mehr kommt
}

// Loops | Schleifen in JS
// Ermöglichen das mehrfache ausführen eines Code-Blocks bis ein bestimmte Bedingung eintritt
// Kopfgesteuerte Schleife
// for
// while
// Bedingung der Schleife steht immer in der Kopfzeile
// Kann sein, dass die Schleife gar nicht ausgeführt wird

// Fußgesteuerte Schleife:
// do..while
// Bedingung erst in der Fußzeile geprüft
// Schleife wird immer mindestens einmal ausgeführt

// for-schleife
// Syntax:
/*
    for(zähler, Bedingung, In/Dekrement)
    {
        Code-Block
    }
*/

function countTo(limit)
{
    console.log("Schleife startet: ");
    for(let i = 0; i <= limit; i++)
    {
        console.log(i);
        //console.log("Test"); //Würde nach jeder Zahl ausgegeben werdens
    }
    console.log("Schleife wurde beendet.");
}

countTo(10);

// Verschachtelte Schleifen:

function clock()
{
    for(let i = 0;i < 2; i++) // Erste Schleife (Stunde)
    {
        for(let j = 0; j < 60; j++) // Zweite Schleife (Minute)
        {
            for(let k = 0; k < 60; k++) // Dritte Schleife (Sekunden)
            {
                console.log(i + " " + j + " " + k);
            }
        }
    }
}
// Funktioniert wie eine Uhr
// Bevor der Stunden Zeiger eins weiter "tickt" muss der Minuten Zeiger eine Umdrehung machen und bevor der Minuten
// Zeiger eins weiter "tickt" muss der Sekunden Zeiger eine Umdrehung machen
clock();

// FizzBuzz
// Jede Zahl die nur durch 3 teilbar ist wird mit Fizz betitelt
// Jede Zahl die nur durch 5 teilbar ist wird mit Buzz betitelt
// Zahlen die sowohl durch 3 als auch 5 teilbar sind werden mit FizzBuzz betitelt
// Alle anderen Zahlen werden normal ausgegeben
// Wir wollen nun eine Funktion schreiben, die eine Obergrenze übergeben bekommt bis zu der gezählt
// werden soll und jede dieser Zahlen soll dann auf ihre Teilbarkeit durch 3 und 5 geprüft werden
// und nach den obigen Regeln in der Konsole ausgegeben werden

