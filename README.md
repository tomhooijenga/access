# Installation
```
npm i @th/access
```

# Usage
The interface implements get, set, has, delete and clear.

```
import access from '@th/access';

access.get(obj, key);
access.set(obj, key, value);
access.has(obj, key);
access.delete(obj, key);
access.clear(obj, key);
```

# Custom types
Objects and Arrays are supported out of the box. To use your own type with access, you must register a handler for it.

```
Class Type {
    _getById(id) {
        //
    }
}

access.register(Type, {
    get(obj, key) {
        return obj._getById(key);
    },
    // etc
});
```
If a type implements one of the used methods, it is not necessary to also add it to the handler. It will be called 
automatically for you. For example, Map and WeakMap are fully compatible without being registered.

```
Class Type {
    get(key) {
        // Still called!
    }
}

access.register(Type, {});
```
