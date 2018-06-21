# Installation
```
npm i @teamawesome/access
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
