// if ($ === undefined){
// console.log('rr');
// } else {
//   console.log('Gonna catch them all');
// }
$ (() => {

  let currentImgIndex = 0;
  let numOfImages = $('.pics').children().length-1;
  // console.log(numOfImages);
 $('.pics').on('click', () => {
   $('.pics').children().eq(currentImgIndex).hide()
   if (currentImgIndex < numOfImages) {

   currentImgIndex ++;
}else {
  currentImgIndex = 0
}
   $('.pics').children().eq(currentImgIndex).show()

 })
 

for (let i = 1; i <= 120; i++) {
// loop for iterating over the url

 $.ajax({

    url: `https://pokeapi.co/api/v2/pokemon/${i}`


   }
 ).then(
   (data) => {

    const pokemon = []
    pokemon['image'] = data.sprites['front_default']
    pokemon['name'] = data.name;
    pokemon['move1']= data.moves[0].move.name
    pokemon['move2']= data.moves[1].move.name
    pokemon['move3']= data.moves[2].move.name
    // pokemon['experience']= data.base_experience;
  // console.log(data.moves[1].move.name);
// console.log(data);
const showPokemon = () => {
  $image = $('<img class ="pokeball">').attr('src', pokemon.image)
  $('#list').append($image)
  $name = $('<div class = name>').text('NAME: ' + pokemon.name)
$('#list').append($name)
  // $experience = $('<li class = experience>').text('expo ' + pokemon.experience)
  // $('#list').append($experience)
 $move1 = $('<li class = moves>').text('Attack: ' + pokemon.move1 +',  '+pokemon.move2)
 $('#list').append($move1)
 // $move2 = $('<li class = moves>').text( pokemon.move2)
 // $('#list').append($move2)
 $move3 = $('<li class = moves>').text('Special Attack: '+pokemon.move3)
 $('#list').append($move3)
}




showPokemon()

})

}






})
