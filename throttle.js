const throttle= function(func,delay)
{
    let called = false; //initially false to enter the function 
    return function (...args){
        if(!called) //comdition true 
        {
            called=true;//sets as true so that until the called is set to false the if block is not executed . Called is set to false after delay so even 10000 calls are made until delay is completed the api is not called
            setTimeout(() => {
                called=false;
            }, delay);
            func(...args);
        }
    }
}

const search= (query)=>{
    console.log("Search",query);
}



const onSubmit= (query)=>{
    console.log("Submitted",query);
}
//Throttle time is made to execute/call api after a "delay" , if there in DOM we have to call api on every mouse movement we can use throttle to call api once in "delay" seconds so even if u move 100 times the api is called only after "delay" seconds . Suppose delay is "500ms" then even if 10000 mouse movement was called , an api is only called once


// After func is executed, it sets called to true to indicate that the function has been called.
// It then sets a timeout using setTimeout to reset called to false after the specified delay. This ensures that the function cannot be called again until the timeout has elapsed.
// If the throttled function is called again while called is still true (i.e., before the timeout has elapsed), it will skip executing the original function func.
// This mechanism ensures that the original function func is only executed once within the specified delay period, even if the throttled function is called multiple times during that period by the event listener added to the DOM elements.

throttle(onSubmit,1000);