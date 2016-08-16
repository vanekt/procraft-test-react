export function fetchData(url) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.onload = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(xhr.responseText);
                } else {
                    reject('Ошибка ' + xhr.status + ': ' + xhr.statusText);
                }
            }
        };
        xhr.onerror = function () {
            reject('Ошибка ' + xhr.status + ': ' + xhr.statusText);
        };
        xhr.send(null);
    });
}

export function match(value, professions) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return professions.filter(profession => regex.test(profession.name));
}

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}