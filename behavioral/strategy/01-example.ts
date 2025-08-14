/*               STRATEGY pattern
  - allows changing some functionality depending on conditions (including dymamically)
  - single responsibility: each strategy is responsible for own functionality
  - open-closed principle: allows adding more strategies without touching existing
  - can be used when you have some common functionality but with different algorightms
    and you need to use different algos depeding on some condition
  - should be used when having a log of ifs
*/

interface IStrategy {
  processPamyment: () => void;
}

class PaymentProcessor {
  currentStrategy: IStrategy | null = null;

  setStrategy(str: IStrategy) {
    this.currentStrategy = str;
  }

  processPayment() {
    if (this.currentStrategy) this.currentStrategy.processPamyment();
  }
}

class CardStrategy implements IStrategy {
  cardNumber: string | null = null;
  
  constructor(cardNumber: string) {
    this.cardNumber = cardNumber;
  }

  processPamyment() {
    console.log(`Paying with card ${this.cardNumber}`);
  }
}

class PaypalStrategy implements IStrategy {
  email: string | null = null;
  
  constructor(email: string) {
    this.email = email;
  }

  processPamyment() {
    console.log(`Paying with Paypal email ${this.email}`);
  }
}

class BankAccountStrategy implements IStrategy {
  account: string | null = null;
  
  constructor(account: string) {
    this.account = account;
  }

  processPamyment() {
    console.log(`Paying with Bank account ${this.account}`);
  }
}

const payWithStrategy = (name: string, details: string) => {
  const paymentProcessor = new PaymentProcessor();
  switch (name) {
    case 'card':
      paymentProcessor.setStrategy(new CardStrategy(details));
      break;
    case 'paypal':
      paymentProcessor.setStrategy(new PaypalStrategy(details));
      break;
    case 'bank_account':
      paymentProcessor.setStrategy(new CardStrategy(details));
      break;
  }
  if (paymentProcessor.currentStrategy) paymentProcessor.processPayment();
}

payWithStrategy('card', '1231-2132-2323-43434')
payWithStrategy('paypal', 'asdf@gmail.com')
payWithStrategy('bank_account', '34242342342344324243')