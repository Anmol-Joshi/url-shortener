axios.get('https://ur--l.herokuapp.com/urls').then((res) => {
    const table = document.querySelector('#recentURL');
    if (!res.data) {
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        cell1.innerHTML = 'No recently shortened URL exist';
    } else {
        Object.keys(res.data).forEach((key) => {
            const value = res.data[key];
            const row = table.insertRow(0);
            const cell1 = row.insertCell(0);
            const cell2 = row.insertCell(1);
            cell1.innerHTML = `<a target="_blank" href='https://ur--l.herokuapp.com/urls/${key}'>https://ur--l.herokuapp.com/urls/${key}</a>`;
            cell2.innerHTML = `<a target="_blank" href=${value}>${value}<a>`;
        });
        const row = table.insertRow(0);
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.innerHTML = 'Short URL';
        cell2.innerHTML = 'Long URL';
    }
});
