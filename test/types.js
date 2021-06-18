const types = [
    {
        name: 'Object',
        key1: 'key',
        key2: 'new_key',
        factory: () => ({key: 'value'})
    },
    {
        name: 'Object (no proto)',
        key1: 'key',
        key2: 'new_key',
        factory: () => Object.assign(Object.create(null), {key: 'value'})
    },
    {
        name: 'Array',
        key1: 0,
        key2: 1,
        factory: () => ['value']
    },
    {
        name: 'Map',
        key1: 'key',
        key2: {},
        factory: () => new Map([['key', 'value']])
    },
];

if (typeof window === 'object' && window.Storage) {
    types.push({
        name: 'Storage',
        key1: 'key',
        key2: 'new_key',
        factory: () => {
            localStorage.clear();
            localStorage.setItem('key', 'value');

            return localStorage
        }
    })
}

module.exports = types;