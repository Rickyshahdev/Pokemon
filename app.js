// if ($ === undefined){
// console.log('rr');
// } else {
//   console.log('Gonna catch them all');
// }
$ (() => {


for (var i = 0; i < 150; i++) {


 $.ajax({

    url: `https://pokeapi.co/api/v2/pokemon/${i}`


   }
 ).then(
   (data) => {
    const pokemon = []
    pokemon['name'] = data.name;
    pokemon['id']= data.id;
    pokemon['image'] = data.sprites['front_default']
console.log(pokemon);

})


}





})
