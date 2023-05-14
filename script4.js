"use strict";

const wrapper = document.querySelector(".pokemonWrapper");
const footer = document.querySelector(".footer");

const fetchPokemonData = async () => {
  return await fetch(
    "https://api.pokemontcg.io/v2/cards?" +
      new URLSearchParams({
        pageSize: 50,
      })
  )
    .then((response) => response.json())
    .then((data) => generateCards(data));
};
const generateSingleCard = (singleCardData) => {
  const cardImage = document.createElement("img");
  cardImage.setAttribute("src", singleCardData.images.small);
  cardImage.setAttribute("alt", singleCardData.name);
  cardImage.setAttribute("onerror", "this.style = 'display:none;'");
  wrapper.appendChild(cardImage);
};

const generateStrongestInfo = (data) => {
    let resString = "";
    data.forEach((e,i) => (resString +=
        i === data.length - 1 ?
            `and ${e.name} with ${e.hp} hit points` :
            `${e.name} with ${e.hp} hit points, `
    ));
    footer.textContent = `Strongest Pokemon are : ${resString} `;

};
function generateCards(data) {
    // data.data.forEach(el => {
    //     generateSingleCard(el);
    // });

    const strongPokemonOnly = data.data.filter((el) => Number(el.hp) >= 100);
    
    strongPokemonOnly.sort((a, b) => parseInt(b.hp - a.hp));
    strongPokemonOnly.forEach((el) => {
        generateSingleCard(el);
    });

    const newDataObjects = strongPokemonOnly.reduce((acc, val) => {
        if (val.hp > 200) {
            const { name, hp, types } = val;
            acc.push({ name, hp, types })
        }
            return acc;
        
}, [])
generateStrongestInfo(newDataObjects)
  console.log(newDataObjects);
}

fetchPokemonData();
