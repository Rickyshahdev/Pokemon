// if ($ === undefined){
// console.log('rr');
// } else {
//   console.log('Gonna catch them all');
// }
$ (() => {



for (let i = 1; i <= 30; i++) {


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

$('.pokeball').on('click', (event) =>{
  // console.log($(event.currentTarget));
  console.log('hi');
  })


showPokemon()

})

}






})
