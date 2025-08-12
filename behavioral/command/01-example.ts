/*                 COMMAND PATTERN
- all commands are separate objects which adhere to some interface which should have:
   at least 'execute' method. They have all the information about themselves inside
- each command can take own parameters or arguments (in constructor) and store them inside
  which will make it independent of other alike commands
- we need a receiver which is a main orchestrating class which has at least a 'run'
  method whict takes a command and runs it's execute method
- we can store executed commands, we can undo and redo them

- so command pattern allows transforming some method to an object (i.e. command object).
  And we can do many interesting things with these objects - store them, manipulate in
  runtime etc
- we can use the pattern when we need to queue operations, store them remotely, delay their running
- it's a json object so can be serialized. Can be saved and restored.
- should use id when we need to implement operations that need to be undone or redone
- single responsibility - we decouple operations (which are commands) from the execution functions
- open closed principle - we can add new commands and extend the functionality without changes
  in the existing ones
*/

interface Command {
  name: string;
  execute: () => void;
  undo: () => void;
}

class Receiver {
  trace: Command[] = [];
  undone: Command[] = [];

  run(command: Command) {
    command.execute();
    this.trace.push(command);
  }

  printTrace() {
    console.log('------TRACE LIST:')
    this.trace.forEach((command) => {
      console.log(command.name)
    })
    console.log('-----------------')
  }

  undo() {
    const lastCommand = this.trace.pop();
    if (lastCommand === undefined) return;
    lastCommand.undo();
    this.undone.push(lastCommand);
  }

  redo() {
    const lastCommand = this.undone.pop();
    if (lastCommand === undefined) return;
    lastCommand.execute();
    this.trace.push(lastCommand);
  }
}

const receiver = new Receiver();

class Exit implements Command {
  get name() {
    return 'exit command';
  }

  execute() {
    console.log('execute Exit')
  }

  undo() {
    console.log('UNDO exit')
  }
}

class Create implements Command {
  fileName: string;
  constructor(fileName: string) {
    this.fileName = fileName;
  }

  get name() {
    return 'create file' + this.fileName;
  }

  execute() {
    console.log('Creating ' + this.fileName)
  }

  undo() {
    console.log('UNDO create')
  }
}

function inputFromUI(command: string, fileName?: string) {
  switch (command) {
    case 'exit':
      receiver.run(new Exit());
      break;
    case 'create':
      receiver.run(new Create(fileName || 'no_file_name'))
      break;
  }
}

inputFromUI('create', 'new_file.txt')
inputFromUI('exit')
inputFromUI('create', 'new_file_2222.txt')
receiver.printTrace();
receiver.undo();
receiver.undo();