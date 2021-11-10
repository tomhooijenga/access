# Access
Access provides a unified interface for all sorts of objects. Supported types are:

* Object
* Array
* Storage (localStorage, sessionStorage)
* [@teamawesome/multi-dict](https://www.npmjs.com/package/@teamawesome/multi-dict)
* [DOMStringMap](https://developer.mozilla.org/en-US/docs/Web/API/DOMStringMap) (dataset)
* Map
* WeakMap
* __Any object with the map interface__

Alternatively, you could write your own handler to add support for a custom type.

# Installation
```
npm i @teamawesome/access
```

# Usage
The interface implements get, set, has, delete, clear, keys, values, entries and size.

```js
import access from '@teamawesome/access';

access.get(obj, key);
access.set(obj, key, value);
access.has(obj, key);
access.delete(obj, key);
access.clear(obj, key);
access.keys(obj);
access.values(obj);
access.entries(obj);
access.size(obj);
```
Alternatively, wrap an object to provide the interface. An added benefit for this is better performance. Note that if
a handler is necessary for the object, it must be registered before wrapping.
```js
import { wrap } from '@teamawesome/access'

const wrapped = wrap(obj);

wrapped.get(key);
wrapped.set(key, value);
wrapped.has(key);
wrapped.delete(key);
wrapped.clear();
wrapped.keys();
wrapped.values();
wrapped.entries();
wrapped[Symbol.iterator]();
wrapped.size;
```

# Custom types
Objects that implement the Map interface are supported out of the box. To use your own type with access, you must
register a handler for it.

```js
class Type {
    _getById(id) {
        //
    }

    del(id) {
        //
    }
}

access.register(Type, {
    get(obj, key) {
        return obj._getById(key);
    },
    
    // Alias methods in one line:
    delete: (obj, key) => obj.del(key)
});
```

If a type implements one of the methods with the same signature, it is not necessary to add it to the handler. It 
will be called automatically for you. For example, Map and WeakMap are fully compatible without being registered.
A proxied method has precedence over auto-detected methods.

```js
class Type {
    get(key) {
        // Called automatically because it is detected.
    }
    
    set(key, value) {
        // Not called automatically because it is proxied.
    }
}

access.register(Type, {
    set(obj, key, value) {
        //
    }
});
```

## Handler information
Access provides two helper functions to register and unregister types.
```js
access.register(type, handler);
access.unregister(type);
```
If you would like to access a handler, you can import `types`. `types` is a regular `Map` of constructors and handlers.
```js
import { types } from '@teamawesome/access';

const handler = types.get(type);
// Same as access.register(type, handler)
types.set(type, handler);
// Same as access.unregister(type)
types.delete(type);
```
Note that calling `types.clear()` removes _all_ types, not just custom ones.