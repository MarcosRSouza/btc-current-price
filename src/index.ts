import axios from 'axios';

const consultBTCPrice = async () => {
    const data = await axios.get('https://api.coincap.io/v2/assets/bitcoin').then((response) => {
        return response?.data?.data?.priceUsd;
    });
    console.log(`Current BTC Price (USD): $${data}`);
}

consultBTCPrice();