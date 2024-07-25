import { CarType } from "./types";

const options = {
	method: 'GET',
	headers: {
		/* 'x-rapidapi-key': '4881877b7fmsh063d77fae5a42d9p1be6e9jsn8d4ae58e7971', */
        "x-rapidapi-key": "75dc092df0msh3c03138e5cc1ea2p19035ejsn916bcc592247",
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
};

const fetchCars =async ():Promise<CarType[]>=> {

    const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=m';

const res = await fetch(url, options);

const data = await res.json();

//console.log(data);
return data;

};



export default fetchCars;