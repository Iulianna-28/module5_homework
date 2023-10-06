let myMap = new Map ();
myMap.set("X", "Y");
myMap.set(1, "X1");
myMap.set (true, "1");

//console.log(myMap)

//console.log(myMap.get(1));
//console.log(myMap.get(true));

//console.log(myMap.size);

console.log(myMap.keys())
console.log(myMap.values())

for(let name of myMap.keys()){
    console.log(name)
}

for(let name of myMap.values()){
    console.log(name)
}