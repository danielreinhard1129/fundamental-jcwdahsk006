// No 5
const hari: number = 400;
const tahun: number = Math.floor(hari / 365); // 1
const bulan: number = Math.floor((hari % 365) / 30); // 1
const tanggal: number = Math.floor((hari % 365) % 30); // 5

console.log(`${tahun} year, ${bulan} month, ${tanggal} days`);

// No 6
const date1 = new Date("2022-01-20");
const date2 = new Date("2022-01-22");
const bedaTanggal = Math.abs(date1.getTime() - date2.getTime());
const bedaHari = bedaTanggal / (1000 * 3600 * 24);
console.log("hasilya : ", bedaHari);

console.log("hello");
console.log("hello");
