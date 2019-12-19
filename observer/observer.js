class Observer {
    constructor(){
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter( function (subscriber) {
           return  subscriber !== fn
        });
    }
    broadcast(data){
        this.observers.forEach( function (subscriber){
            return subscriber(data)
        });
    }
}

const testObs = new Observer();

const textField = document.getElementById('textField');
const countField = document.getElementById('countField');

const getWordsCount = text =>
   text ? text.trim().split(/\s+/).length : 0

testObs.subscribe (text => {
    countField.innerHTML = getWordsCount(text)
})

textField.addEventListener('keyup' , () => {
    testObs.broadcast(textField.value)
})

