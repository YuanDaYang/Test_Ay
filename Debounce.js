var func,wait;

const debounce = (func,wait) =>{ 
  let call = func;
  let timeout = null;

  return function(){
    let context = this ; 
    let args = arguments;
    
    clearTimeout(timeout);
    timeout = setTimeout(function(){
      call.apply(context,args)
    },wait)
  }
}
const debounceFunc = debounce(func,wait) ;