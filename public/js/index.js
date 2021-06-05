/* eslint-disable no-console */

const inputOutputUrl = document.querySelector('#input-output-url');
const shortenUrlButton = document.querySelector('#shorten-url-button');
inputOutputUrl.addEventListener('input', () => {
    console.log(inputOutputUrl.value);
});
shortenUrlButton.addEventListener('click', () => {
    const urlValue = 'https://ur--l.herokuapp.com/urls';
    axios
        .post('https://ur--l.herokuapp.com/urls/', {
            longUrl: `${inputOutputUrl.value}`,
        })
        .then((response) => {
            // console.log('response.data is',response.data);
            console.log('response.data.shortUrl is', response.data.shortUrl);
            inputOutputUrl.value = response.data.shortUrl;
        })
        .catch((error) => {
            console.log(error);
        });

    // fetch(request).then(res => res.json()).then((json) => {
    //   // console.log(json)
    //   inputOutputUrl.value=json.shortUrl;
    //   console.log(json.shortUrl)
    // });
});
// });
