class Counter {
    constructor(initialValue = 0) {
        this.value = initialValue;
    }

    changeBy(amount) {
        this.value += amount;
    }

    getValue() {
        return this.value;
    }
}

function getFixedCounter(k) {
    let fixedCounter = new Counter(); // Create a new Counter instance
    return {
        increment: () => {
            fixedCounter.changeBy(k);
        },
        decrement: () => {
            fixedCounter.changeBy(-k); // Decrement by negative k to achieve decrement
        },
        getValue: () => {
            return fixedCounter.getValue();
        }
    };
}

// Example usage
const counter = getFixedCounter(5);
console.log(counter.getValue()); // Output: 0

counter.increment();
console.log(counter.getValue()); // Output: 5

counter.decrement();
console.log(counter.getValue()); // Output: 0
