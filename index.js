
//please examine the array in the pokemon.js file
//1.  import the array so that we can use it
const pokemon = require('./pokemon');

//2. create a variable that will use the imported array and will create a new array where only properties below exist for each element (assume the properties exist): 
// id
// name
// img
// type
// stats

const updatedList = pokemon.map(v => {
    return {
        id: v.id,
        name: v.name,
        img: v.img,
        type: v.type,
        stats: v.stats,
    }
});


// 3. the array create on step2 is too long. we only want a handful. only want those elements which are on index 13-17. 
// using the variable created on step 2, lets create another variable that will return elements which were on index 13-17. 

const shortenList = updatedList.filter((v, i) => {
    if (i >= 13 && i <= 17) {
        return true;
    } else {
        return false;
    }
})




// 4. using the variable created on step 3, we want to update some of the object values found at index 3. Lets just pretend that 3 value it provided via a url parameter ;p
// take a look at the variable below. it holds the data which will be to updated. Notice that NOT ALL VALUES will be replaced. 
//For eaxmple we do not want to update the value for the following keys: image, type id.
//the goal is to console log an array with the updated data from the variable below. 
const reqBody = {
    name: 'Pidgeotto!',
    hp: '1',
    attack: '2',
    defense: '3',
    spattack: '4',
    spdefense: '5',
    speed: '6'
}


shortenList[3] = {
    ...shortenList[3],
    name: 'Pidgeotto!',
    stats: {
        hp: '1',
        attack: '2',
        defense: '3',
        spattack: '4',
        spdefense: '5',
        speed: '6'
    }
}
// log should look like this:
// play attention to the change on the the object on index 3
// [
//     {
//         id: '014',
//         name: 'Kakuna',
//         img: 'http://img.pokemondb.net/artwork/kakuna.jpg',
//         type: ['Bug', 'Poison'],
//         stats: {
//             hp: '45',
//             attack: '25',
//             defense: '50',
//             spattack: '25',
//             spdefense: '25',
//             speed: '35'
//         }
//     },
//     {
//         id: '015',
//         name: 'Beedrill',
//         img: 'http://img.pokemondb.net/artwork/beedrill.jpg',
//         type: ['Bug', 'Poison'],
//         stats: {
//             hp: '65',
//             attack: '80',
//             defense: '40',
//             spattack: '45',
//             spdefense: '80',
//             speed: '75'
//         }
//     },
//     {
//         id: '016',
//         name: 'Pidgey',
//         img: 'http://img.pokemondb.net/artwork/pidgey.jpg',
//         type: ['Normal', 'Flying'],
//         stats: {
//             hp: '40',
//             attack: '45',
//             defense: '40',
//             spattack: '35',
//             spdefense: '35',
//             speed: '56'
//         }
//     },
//     {
//         id: '017',
//         name: 'Pidgeotto!',
//         img: 'http://img.pokemondb.net/artwork/pidgeotto.jpg',
//         type: ['Normal', 'Flying'],
//         stats: {
//             hp: '1',
//             attack: '2',
//             defense: '3',
//             spattack: '4',
//             spdefense: '5',
//             speed: '6'
//         }
//     },
//     {
//         id: '018',
//         name: 'Pidgeot',
//         img: 'http://img.pokemondb.net/artwork/pidgeot.jpg',
//         type: ['Normal', 'Flying'],
//         stats: {
//             hp: '83',
//             attack: '80',
//             defense: '75',
//             spattack: '70',
//             spdefense: '70',
//             speed: '91'
//         }
//     }
// ]