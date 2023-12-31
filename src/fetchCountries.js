export function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Error fetching data');
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
            throw error;
        });
};
