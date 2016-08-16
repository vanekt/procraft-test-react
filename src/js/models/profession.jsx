const professions = [
    { id: 1, name: "Автомеханик" },
    { id: 2, name: "Адвокат" },
    { id: 3, name: "Бухгалтер" },
    { id: 4, name: "Визажист" },
    { id: 5, name: "Грузчик" },
    { id: 6, name: "Дантист" },
    { id: 7, name: "Муж на час" },
    { id: 8, name: "Парикмахер" },
    { id: 9, name: "Парикмахер-Визажист" },
    { id: 10, name: "Программист" },
    { id: 11, name: "Садовник" },
    { id: 12, name: "Сантехник" },
    { id: 13, name: "Телохранитель" },
    { id: 14, name: "Частный детектив" }
];

export function match(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');

    return professions.filter(language => regex.test(language.name));
}

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}