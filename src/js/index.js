//API key c18ec3820752eb04e570509bbb5723cb
// https://www.food2fork.com/api/search 
// https://www.food2fork.com/api/get

import axios from 'axios';

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = 'c18ec3820752eb04e570509bbb5723cb';
    try{
      const res = await axios(`${proxy}www.food2fork.com/api/search?key=${key}&q=${query}`);
      const recipes = res.data.recipes;
      console.log(recipes)
    }catch(error){
      alert(error);
    }
  ;

}
getResults('drinks') ;
