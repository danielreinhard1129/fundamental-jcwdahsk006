// versi JS
const message = "Hello";

// versi TS
const message2: string = "Hello";

// ========================= STRING BUILT IN METHOD =========================

const name: string = "BudiB World";
const name2: string = "Ucok";

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace("B", "P"));
console.log(name.replaceAll("B", "P"));
console.log(name.concat(" ").concat(name2));
console.log(name + " " + name2);
console.log(name.slice(0, 3));
console.log(name.split(" "));

// ========================= TEMPLATE LITERALS / TEMPLATE STRING =========================
const welcome: string = "Welcome";
const name3: string = "Jack";

console.log(welcome + ", " + name3);

console.log(`${welcome}, ${name3}`);

// ========================= NUMBER BUILT IN METHOD =========================

const angka: string = "4000";

console.log(angka);

console.log(Number(angka));
console.log(parseInt(angka));

// ========================= STRING CONVERSION =========================

const angka2: number = 3000;

console.log(angka2);

console.log(String(angka2));
console.log(angka2.toString());

// ========================= BOOLEAN CONVERSION =========================

console.log(Boolean(300));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean("budi"));
console.log(Boolean(" "));
console.log(Boolean(""));
console.log(Boolean("false"));
console.log(Boolean("0"));

// ========================= DATE =========================

const now = new Date();

console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());
console.log(now.getMinutes());

// ========================= BASIC OPERATOR =========================
/* 
    + -> pertambahan
    - -> pengurangan
    * -> perkalian
    / -> pembagian
    % -> modulo (sisa bagi)
    ** -> pangkat
*/

console.log(1 + 1);
console.log(3 - 1);
console.log(3 * 3);
console.log(6 / 3);
console.log(11 % 2);
console.log(3 ** 3);

// ========================= MODIFY IN PLACE =========================

let n: number = 4;

n += 2; // n = n + 2

console.log(n);

// ========================= INCREMENT & DECREMENT =========================
let counter: number = 1;

counter++; // increment
console.log(counter);

counter--; // decrement
console.log(counter);

// ========================= COMPARISON OPERATOR =========================
/* 
    ==
    ===
    <
    >
    <=
    >=
*/

// console.log(2 == "2"); // pengecekan di valuenya saja
// console.log(2 === "2"); // pengecekan di value & tipe data

console.log(2 < 5);
console.log(5 < 5);
console.log(5 > 5);
console.log(10 >= 10);
console.log(1 <= 10);

// ========================= MATH =========================

console.log(Math.ceil(4.2)); // membulatkan angka ke atas

console.log(Math.floor(4.7)); // membulatkan angka ke bawah

console.log(Math.round(4.3)); // membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7)); // membulatkan angka ke bilangan bulat terdekat

console.log(Math.max(4, 150, 4000, 21, 37, 900));
console.log(Math.min(4, 150, 4000, 21, 37, 900));

console.log(Math.abs(-100)); // menghilangkan tanda negatif

console.log(Math.random()); // menghasilkan angka acak antara 0 dan 1

console.log(Math.floor(Math.random() * 100) + 1); // angka random 1 - 100

const min: number = 12;
const max: number = 30;

// Math.floor(Math.random() * (max - min + 1) + min)
console.log(Math.floor(Math.random() * (max - min + 1) + min));
