/*                  CHAIN OF RESPONSIBILITY
- use when you have a bunch of handlers and you need to run them in specific order
- you can construct the order in a realtime
- each handler knows only about the next possible handler
- each handler can stop processing and break the chain
*/


interface IRequest {
  type: string;
};

class Handler {
  next: Handler | null = null;

  setNext(handler: Handler) {
    this.next = handler;
    return handler;
  }

  handle(request: IRequest) {
    if (this.next) this.next.handle(request);
    else console.log('cannot process the request')
  }
}

const request = { type: 'manager'}

class Support extends Handler {
  handle(request: IRequest): void {
    if (request.type === 'support') {
      console.log('handling support request')
    } else {
      console.log('support passes request')
      super.handle(request);
    }
  }
}

class SeniorSupport extends Handler {
  handle(request: IRequest): void {
    if (request.type === 'senior-support') {
      console.log('handling senior support request')
    } else {
      console.log('senior-support passes request')
      super.handle(request);
    }
  }
}

class Manager extends Handler {
  handle(request: IRequest): void {
    if (request.type === 'manager') {
      console.log('handling manager request')
    } else {
      super.handle(request);
    }
  }
}


const supportHandler = new Support().setNext(new SeniorSupport()).setNext(new Manager());

supportHandler.handle({ type: 'manager'})