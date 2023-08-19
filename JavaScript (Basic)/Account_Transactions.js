       // Place the provided JavaScript code here
       'use strict';

       class Account {
           constructor(balance) {
               this.balance = balance;
           }

           debit = (amount) => {
               if (this.balance < amount) return false;
               this.balance -= amount;
               return true;
           }

           credit = (amount) => {
               this.balance += amount;
               return true;
           }

           getBalance = () => this.balance
       }

       // ... Rest of the code ...
