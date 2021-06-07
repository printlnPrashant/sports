const API_KEY = "4DHsu8rihjORio8Xlbj4AJuvA782";
export const getMatches=()=> {
const url= 'https://cricapi.com/api/matches/?apikey=4DHsu8rihjORio8Xlbj4AJuvA782'

return fetch(url).then((Response) => Response.json())
.catch((error) => console.log("Error:", error));


};

export const getMatchDetail = (id) => {
const url= `https://cricapi.com/api/cricketScore?unique_id=${id}&apikey=${API_KEY}`;

return fetch(url)
.then(Response =>Response.json())
.catch(error => console.log(error));
};