/*
  1) Here we pass setup function to constructor that runs it with
  configurator object
  2) after the config completes we freeze the settings Object for further modification
  3) we expose get and getAll methods inside the constructor because only
     inside there is a rererence to settings
  4) so we effectively hid the settings object and it can be configured only
    once during the constructor phase
  5) this is useful when we need to hide some data from changing
*/

class Config {
  constructor(setup) {
    const settings = {};
    const configurator = {
      set: (key, value) => {
        settings[key] = value;
      },
      setMultiple: (newValues) => {
        Object.assign(settings, newValues || {})
      }
    }
    setup(configurator);
    Object.freeze(settings);
    this.get = (key) => settings[key];
    this.getAll = () => ({ ...settings })
  }
}

const config = new Config((configurator) => {
  configurator.set('configField1', 123);
  configurator.setMultiple({ configField2: 'aaa', configField3: '123bbb'});
})

const allSettings = config.getAll();
console.log('allSettings: ', allSettings);