'use strict'

function getFixedCounter(k) {
    let fixCounter = counter;
    return {
        increment: () => {
            fixCounter.changeBy(k)

        },
        decrement: () => {
            fixCounter.changeBy(-k)
        },
        getValue: () => {
            return fixCounter.getValue();
        }
    }
}