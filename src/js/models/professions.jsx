export function fetch(value, cb) {
   getProfessions(value).then(items => cb(items));
}

export function getProfessions(value) {
    let professions = [
        { id: 1, name: "Парикмахер" },
        { id: 2, name: "Парикмахер-Визажист" },
        { id: 3, name: "Сантехник" },
        { id: 4, name: "Автомеханик" },
        { id: 5, name: "Программист" },
        { id: 6, name: "Адвокат" },
        { id: 7, name: "Частный детектив" },
        { id: 8, name: "Телохранитель" },
        { id: 9, name: "Муж на час" },
    ];

    if (value) {
        professions = professions.filter((state) => {
            return matchStateToTerm(state, value);
        });
    }

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(professions);
        }, 1);
    });

    return promise;
}

export function matchStateToTerm (state, value) {
    return state.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
}