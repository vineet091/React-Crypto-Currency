export const GET_CRYPTOCCY_DATA_URL = 'https://api.coinmarketcap.com/v1/ticker/?limit=5&convert=';


//API to fetch Crypto details based on Currency
export function getCryptoData(displayCcy = 'SGD') {
    return fetch(`${GET_CRYPTOCCY_DATA_URL}${displayCcy}`, {method: 'GET'})
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res);
            }
        });
}
