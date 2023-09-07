// Fungsi untuk menghasilkan nilai random antara 1 sampai 50
function getRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk mengisi array dengan 100 nilai random
function fillArrayWithRandomValues() {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(getRandomValue());
  }
  return array;
}

// Fungsi untuk memecah array menjadi dua berdasarkan index (genap dan ganjil)
function splitArrayIntoEvenOdd(array) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return [evenArray, oddArray];
}

// Fungsi untuk menghitung min, max, total, dan rata-rata dari array
function calculateStats(array) {
  let min = array[0];
  let max = array[0];
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    if (value < min) {
      min = value;
    }
    if (value > max) {
      max = value;
    }
    total += value;
  }

  const average = total / array.length;

  return { min, max, total, average };
}

// Main program
const randomArray = fillArrayWithRandomValues();
const [evenArray, oddArray] = splitArrayIntoEvenOdd(randomArray);

const evenStats = calculateStats(evenArray);
const oddStats = calculateStats(oddArray);

console.log("Array dengan jumlah index 100:", randomArray);
console.log("Array genap dengan jumlah index 50:", evenArray);
console.log("Array ganjil dengan jumlah index 50:", oddArray);

console.log("Statistik Array Genap:", evenStats);
console.log("Statistik Array Ganjil:", oddStats);

// Perbandingan nilai min, max, total, dan rata-rata
if (evenStats.min > oddStats.min) {
  console.log("Min lebih besar pada Array Genap");
} else if (evenStats.min < oddStats.min) {
  console.log("Min lebih besar pada Array Ganjil");
} else {
  console.log("Min memiliki nilai sama antara Array Genap dan Ganjil");
}

if (evenStats.max > oddStats.max) {
  console.log("Max lebih besar pada Array Genap");
} else if (evenStats.max < oddStats.max) {
  console.log("Max lebih besar pada Array Ganjil");
} else {
  console.log("Max memiliki nilai sama antara Array Genap dan Ganjil");
}

if (evenStats.total > oddStats.total) {
  console.log("Total lebih besar pada Array Genap");
} else if (evenStats.total < oddStats.total) {
  console.log("Total lebih besar pada Array Ganjil");
} else {
  console.log("Total memiliki nilai sama antara Array Genap dan Ganjil");
}

if (evenStats.average > oddStats.average) {
  console.log("Rata-rata lebih besar pada Array Genap");
} else if (evenStats.average < oddStats.average) {
  console.log("Rata-rata lebih besar pada Array Ganjil");
} else {
  console.log("Rata-rata memiliki nilai sama antara Array Genap dan Ganjil");
}
