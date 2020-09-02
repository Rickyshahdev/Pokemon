$ (() => {


  for (let i = 10; i <= 60; i++) {


   $.ajax({

      url: `https://pokeapi.co/api/v2/pokemon/${i}`


     }
   ).then(
     (data) => {

      const pokemon = []
// console.log(data.);
  const showPokemon = () => {
    $image = $('<img class ="front">').attr('src', data.sprites.front_default)
    $('#list').append($image)

    $name = $('<div class = name>').text('NAME: ' + data.name).attr('id', data.name)
  $('#list').append($name)

   $move1 = $('<li class = moves>').text('Attack: '+(data.moves[0].move.name) +', '+(data.moves[1].move.name))
   $('#list').append($move1)

   $move3 = $('<li class = moves>').text('Special Attack: '+ (data.moves[2].move.name))
   $('#list').append($move3)
  }




  showPokemon()

  })

  }






  })
