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

export function matchByIndex(value, professions) {
    if (value === '') {
        return [];
    }

    return professions.filter(profession => {
        return profession.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
}