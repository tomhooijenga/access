const types = new Map();

/**
 * Get a proxy for the type of object
 * s
 * @param {*} obj
 * @param {string} method
 * @param {...*} args
 */
function call(obj, method, ...args) {
    const proxy = types.get(obj.constructor);

    if (proxy !== undefined) {
        return proxy[method](obj, ...args)
    } else if (typeof obj[method] === 'function') {
        return obj[method](...args);
    }

    throw new TypeError(`No [${method}] handler for objects of type [${obj.constructor.name}]`);
}

export default {
    /**
     * Get a value by key
     *
     * @param obj
     * @param key
     * @return {*}
     */
    get(obj, key) {
        return call(obj, 'get', key)
    },

    /**
     * Set the value of a key
     *
     * @template T
     * @param {T} obj
     * @param key
     * @param value
     * @return {T}
     */
    set(obj, key, value) {
        return call(obj, 'set', key, value);
    },

    /**
     * Does the object contain the key
     * @param obj
     * @param key
     * @return {bool}
     */
    has(obj, key) {
        return call(obj, 'has', key);
    },

    /**
     * Delete the key
     * @param obj
     * @param key
     * @return {bool}
     */
    delete(obj, key) {
        return call(obj, 'delete', key);
    },

    /**
     * Remove all entries
     *
     * @param obj
     */
    clear(obj) {
        call(obj, 'clear');
    },

    /**
     * Register a type
     *
     * @param {*} type
     * @param {{}} proxy
     */
    register(type, proxy) {
        types.set(type, proxy);
    },

    /**
     * Remove a type
     *
     * @param type
     */
    unregister(type) {
        types.delete(type);
    }
};