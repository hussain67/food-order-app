//API key c18ec3820752eb04e570509bbb5723cb https://www.food2fork.com/api/search
 
// https://www.food2fork.com/api/get

/** Global state of the app
 * Search object
 * Current recipe object
 * Shopping list object
 * Liked recipes
 */

import Search from './models/Search';

import * as searchView from './views/searchView';

import {elements, renderLoader,clearLoader, elementStrings } from './views/base'

const state = {};

const controlSearch = async () => {
    //1 Get query from view
    const query = searchView.getInput();
    //console.log(query);
    
    if(query){
        //2 New search object and add to state
        state.search = new Search(query);
        //3 Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        //4 Search for recipes
        await state.search.getResults();
        clearLoader();
        //5 Render results on UI

      searchView.renderResults(state.search.result);

        //console.log(state.search.result)
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

//const search = new Search('pizza');



