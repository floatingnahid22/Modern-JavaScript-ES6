function log(anything) {
    return console.log(anything);
}

const ws1 = new WeakSet();

class SomeClass {
    constructor() {
        ws1.add(this);
    }
    method() {
        if(!ws1.has(this)) {
            throw new Error('You can not access this method directly')
        } else {
            return 'i am method';
        }
    }
}

const w = new SomeClass();
log(w.method());