var func,timeout;

const throttle = (func,timeout) =>{
    let timer = null;
    let first = true;

    return function(){
      var context = this;
      var args = arguments;
      
      if(first){
          func.apply(contet,args);
          first = false;
          return;
      }
      if(timer){
          return;
      }
      timer = setTimeout(function(){
          clearTimeout(timer);
          timer = null;
          func.apply(context,args);
      },timeout);
    }
}
const throttleFunc =  throttle(func, timeout) ;