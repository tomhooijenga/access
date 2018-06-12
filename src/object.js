import access from "./access";

access.register(Object, {
    get(obj, key) {
        return obj[key];
    },
    set(obj, key, value) {
        obj[key] = value;

        return obj;
    },
    has(obj, key) {
        return obj[key] !== undefined;
    },
    delete(obj, key) {
        return key in obj && delete obj[key];
    },
    clear(obj) {
        Object
            .keys(obj)
            .forEach(key => delete obj[key]);
    }
});