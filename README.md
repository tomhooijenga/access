# Installation
```
npm i @teamawesome/access
```

# Usage
The interface implements get, set, has, delete, clear, keys, values and entries.

```
import access from '@teamawesome/access';

access.get(obj, key);
access.set(obj, key, value);
access.has(obj, key);
access.delete(obj, key);
access.clear(obj, key);
access.keys(obj);
access.values(obj);
access.entries(obj);
```
Alternatively, wrap an object to provide the interface. An added benefit for this is better performance. Note that if
a proxy is necessary for the object, it must be registered before wrapping.
```
import wrap from '@teamawesome/access/wrap'

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
```

# Custom types
Objects, Arrays and types that implement the Map interface (like Map and WeakMap) are supported out of the box. To use your own type with access, you must register a handler for it.

```
Class Type {
    _getById(id) {
        //
    },
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

```
Class Type {
    get(key) {
        // Called automatically because it is detected.
    },
    
    set(key, value) {
        // Not called automatically because it is proxied.
    }
}

access.register(Type, {
    set(obj, value) {
        //
    }
});
```
