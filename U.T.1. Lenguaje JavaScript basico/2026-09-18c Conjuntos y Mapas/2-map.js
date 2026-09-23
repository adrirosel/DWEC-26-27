const equipos = new Map();

equipos.set('rm', 'Real Madrid')
equipos.set('fcb', 'Futbol Club Barcelona')
equipos.set('am', 'Atletico Madrid')
equipos.set('Lfc', 'Lorca futbol club')

console.clear();

console.table(equipos)
console.log(equipos.size)

console.log(equipos.get('lfc'));

console.table(equipos.keys());
console.table(Array.from(equipos.values()).sort());

