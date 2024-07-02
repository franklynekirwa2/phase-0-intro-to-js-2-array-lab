let cats=["Milo", "Otis", "Garfield"];

function Arrays(){
    cats.length=0;
    cats.push("Milo", "Otis", "Garfield");
}

 function destructivelyAppendCat(){

    cats.push("Ralph");
    return cats;
 }
 console.log(cats);

function destructivelyPrependCat(){
        cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    return cats.slice(0, cats.length -1);
}

function removeFirstCat(){
    return cats.slice(1);
}
console.log(cats);

