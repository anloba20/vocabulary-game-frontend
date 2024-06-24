const fetchData= async () => {
    const response = await fetch('http://127.0.0.1:4000', {mode: 'no-cors', method: 'get',  headers: {
        "Content-Type": "application/json",
      }});
    console.log('response', await response.text());
}

export {
    fetchData
}