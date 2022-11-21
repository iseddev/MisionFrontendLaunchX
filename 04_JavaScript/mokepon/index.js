let d = document

let $searchBtn = d.getElementById("search-btn")


const fetchPokemon = async () => {
  
  let $pokeNameInput = d.getElementById("poke-name-input")
  let pokeNameInputValue = $pokeNameInput.value.toLowerCase()

  // let $spanType = d.getElementById("poke-type")
  // let $spanStatics = d.getElementById("poke-statics")
  // let $spanMovements = d.getElementById("poke-movements")

  // let pokeName = $spanName.value

  const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokeNameInputValue}`


  let data = await fetch(urlAPI).then((res) => {
    if(res.status != "200") {
      let errorMsg = "Ups... Algo anda mal!!!"
      const $spanError = d.getElementById("error")
      $spanError.innerHTML = errorMsg
      pokePhoto("./images/poke-error.gif")
    } else {
      const $spanError = d.getElementById("error")
      $spanError.innerHTML = ""
      return res.json()
    }
  })
  
  if(data) {
    console.log(data)
    let pokeApiImage = data.sprites.front_default
    let pokeApiName = data.name
    let pokeApiTypes = data.types
    let pokeApiMoves = data.moves
    let pokeApiStats = data.stats
    pokePhoto(pokeApiImage)
    pokeName(pokeApiName)
    pokeTypes(pokeApiTypes)
    pokeStats(pokeApiStats)
    pokeMoves(pokeApiMoves)

    let pokeBeforeId = data.id - 1
    let pokeAfterId = data.id + 1
    pokeBeforeName(pokeBeforeId)
    pokeAfterName(pokeAfterId)
  }
}

const pokePhoto = (url) => {
  const pokePhoto = d.getElementById("poke-photo")
  pokePhoto.src = url
}

const pokeName = (name) => {
  let $spanName = d.getElementById("poke-name")
  $spanName.innerHTML = name.replace(/^\w/, c => c.toUpperCase())
}

const pokeTypes = (types) => {
  const typeNames = types.map(item => item.type.name)
  let $ulPokeTypes = d.getElementById("poke-types")
  $ulPokeTypes.innerHTML = ""
  typeNames.forEach(type => {
    let $li = d.createElement("li")
    $li.innerHTML = type
    $li.classList.add("poke-data_details")
    $ulPokeTypes.appendChild($li)
  });
}

const pokeStats = (stats) => {
  const statNames = stats.map(item => item.stat.name)
  let $ulPokeStats = d.getElementById("poke-stats")
  $ulPokeStats.innerHTML = ""
  statNames.forEach(type => {
    let $li = d.createElement("li")
    $li.innerHTML = type
    $li.classList.add("poke-data_details")
    $ulPokeStats.appendChild($li)
  });
}

const pokeMoves = (moves) => {

  const moveNames = moves.map(item => item.move.name)
  let $ulPokeMoves = d.getElementById("poke-moves")
  $ulPokeMoves.innerHTML = ""
  
  moveNames.forEach(type => {
    let $li = d.createElement("li")
    $li.innerHTML = type
    $li.classList.add("poke-data_details")
    $ulPokeMoves.appendChild($li)
  });
}

const pokeBeforeName = (pokeBeforeId) => {
  
  const fetchPokemon = async () => {  
    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokeBeforeId}`
  
    let data = await fetch(urlAPI).then((res) => res.json())
    
    if(data) {  
      let pokeApiName = data.name      
      let $spanBeforeName = d.getElementById("poke-before-name")
      $spanBeforeName.innerHTML = pokeApiName.replace(/^\w/, c => c.toUpperCase())
    }
  }
  fetchPokemon()
}

const pokeAfterName = (pokeAfterId) => {
  
  const fetchPokemon = async () => {  
    const urlAPI = `https://pokeapi.co/api/v2/pokemon/${pokeAfterId}`
  
    let data = await fetch(urlAPI).then((res) => res.json())
    
    if(data) {
      let pokeApiName = data.name      
      let $spanAfterName = d.getElementById("poke-after-name")
      $spanAfterName.innerHTML = pokeApiName.replace(/^\w/, c => c.toUpperCase())
    }
  }
  fetchPokemon()
}

$searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  fetchPokemon()
})