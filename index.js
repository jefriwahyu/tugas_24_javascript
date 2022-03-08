
function angka(){
  var urutanAngka = [32,33,16,40,9,7,11,2,44,1,66];
  function apa(){
    return urutanAngka;
  }
  console.log("Sebelumnya : " + apa());
  function api(){
    return urutanAngka.sort();
  }
  console.log("Ascending : " + api());

  var urutanAngka2 = urutanAngka.reverse();
  return urutanAngka2;
}

console.log("Descending : " + angka());
