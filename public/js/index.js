const inputOutputUrl = document.querySelector('#input-output-url');
const shortenUrlButton = document.querySelector('#shorten-url-button');
// inputOutputUrl.addEventListener('input', () => {
//     console.log(inputOutputUrl.value);
// });
let flag = true;
shortenUrlButton.addEventListener('click', () => {
    if (flag) {
        // eslint-disable-next-line no-undef
        axios
            .post('https://ur--l.herokuapp.com/urls/', {
                longUrl: `${inputOutputUrl.value}`,
            })
            .then((response) => {
                // console.log('response.data.shortUrl is', response.data.shortUrl);
                inputOutputUrl.value = response.data.shortUrl;
                shortenUrlButton.value = 'Copy';
                flag = false;
            })
            .catch((error) => {
                // console.log(error);
            });
    } else {
        const textarea = document.getElementById('input-output-url');
        textarea.select();
        document.execCommand('copy');
    }
});
