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


for (let i = 1; i <= 9; i++) {
// loop for iterating over the url

 $.ajax({

    url: `https://pokeapi.co/api/v2/pokemon/${i}`


   }
 ).then(
   (data) => {

    const pokemon = []
// console.log(pokemon);
const pokeGallery = () => {
  $image = $('<img class ="front">').attr('src', data.sprites.front_default)
  $('#list').append($image)
  // console.log((data.sprites['front_default']));
  $name = $('<div class = name>').text('NAME: ' + data.name).attr('id', data.name)
$('#list').append($name)
// console.log(data.name);

 $move1 = $('<li class = moves>').text('Attack: '+(data.moves[0].move.name) +', '+(data.moves[1].move.name))
 $('#list').append($move1)
   // console.log(data.moves[1].move.name);
 // $move2 = $('<li class = moves>').text( pokemon.move2)
 // $('#list').append($move2)

 $experience = $('<li class = experience>').text('Base Experience: ' + data.base_experience)
 $('#list').append($experience)
}


pokeGallery()

})

}






})
