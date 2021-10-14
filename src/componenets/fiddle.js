const accurateTimer = (fn, time = 1000) => {
  let nextAt, timeout;
  nextAt = new Date().getTime() + time;
    const wrapper = () => {
   
    nextAt += time;
    
    timeout = setTimeout(wrapper, nextAt — new Date().getTime());
   
    fn();
  };
 
  
  const cancel = () => clearTimeout(timeout);
 

  timeout = setTimeout(wrapper, nextAt — new Date().getTime());
 

  return { cancel };
};