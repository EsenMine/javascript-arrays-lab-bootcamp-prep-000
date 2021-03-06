var kittens = ["Milo","Otis","Garfield"]; //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  return kittens.concat(name);
}

function prependKitten(name){
  var newArray = [name,...kittens];
  return newArray;
}

function removeLastKitten(){
  return kittens.slice(0,length -1);
}

function removeFirstKitten(){
  return kittens.slice(1);
}