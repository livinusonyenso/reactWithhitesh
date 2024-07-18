import { useEffect, useState } from "react";

function useCurrencyIfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/usd.json')
      .then((response) => response.json())
      .then((response) => setData(response[currency]));
    }, [currency]);
    return data;
}

export default useCurrencyIfo;
