import axios from 'axios';

 class Search {
    constructor(query){
        this.query = query;
    }
    async getResults(){
        const proxy = 'https://cors-anywhere.herokuapp.com/'
        const key = 'c18ec3820752eb04e570509bbb5723cb';
        try{
          const res = await axios(`${proxy}www.food2fork.com/api/search?key=${key}&q=${this.query}`);
          //console.log(res) return an object
          this.result = res.data.recipes;
        
        }catch(error){
          alert(error);
        } 
    }
}
export default Search;





