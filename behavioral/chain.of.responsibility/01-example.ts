interface IHandler {
  next: IHandler | null;
  handle(request: any): void;
  setNext(handler: IHandler): void;
}

class Handler implements IHandler {
  next: IHandler | null = null;
  handle(request: any): void {
    
  }

  setNext(handler: IHandler): void {
    this.next = handler;
  }
}