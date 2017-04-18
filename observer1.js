var eventMixin={

  on:function(eventName,handler){
    if(!this._eventHandlers) this._eventHandlers={};
    if(!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName]=[];
    };
    this_eventHandlers[eventName].push(handler);
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

  }
}
