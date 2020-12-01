const API_KEY = '5cbf0e9f1a23d17846dd35964d53ed44';
const API_ID = 'eca8737f';

const requests = {
calories: (ingredient)=>`https://api.edamam.com/api/food-database/v2/parser?ingr=${ingredient}&app_id=${API_ID}&app_key=${API_KEY}`,
nutrients: ``,
recipes: ``,
foods: ``,
};

export default requests;