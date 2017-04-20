var eventMixin={
  on:function(eventName,handler){
    if(!this._eventHandlers) this._eventHandlers={};
    if(!this._eventHandlers[eventName]){
      this._eventHandlers[eventName]=[];
    };
    this._eventHandlers[eventName].push(handler);
  },

  off:function(eventName,handler){
    var handlers=this._eventHandlers && this._eventHandlers[eventName];
    if(!handlers) return;

    for(var i=0;i<handlers.length;i++){
      if(handlers[i]==handler){
        handlers.splice(i--,1);
      }
    }
  },

  trigger:function(eventName){
    if(!this._eventHandlers || !this._eventHandlers[eventName]) return;
    var handlers=this._eventHandlers[eventName];

    for(var i=0;i<handlers.length;i++){
      handlers[i].apply(this,Array.prototype.slice.call(arguments,1));
    }
  }
};

function Menu(){};

for (var key in eventMixin){
  Menu.prototype[key]=eventMixin[key];
};

Menu.prototype.choose=function(value){
  this.trigger('select',value);
};

var menu=new Menu();

menu.on('select',function(value){
  console.log('trigger1'+value);
});

menu.on('select',function(value){
  console.log('trigger2'+value);
});

menu.choose(" 4444");


