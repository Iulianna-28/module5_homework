let myCar = new Map([
	['Mercedes', "yellow"],
	['BMW', "red"],
	['Hyundai', "blue"],
	['KIA', "black"],
]);
let keys = Array.from(myCar.keys());
keys.forEach(key => {
	console.log(`Ключ - ${key}, Значение - ${myCar.get(key)}`);
})
