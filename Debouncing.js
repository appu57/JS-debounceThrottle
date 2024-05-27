function validateInput()
{
    console.log("Validating");
}

let callDebounce = debounce(10000);// This will not immediately execute myFunction  If debouncedFunction is called again within the next 1000ms, the timer resets

function debounce(timeout)
{
    let setTimeOut;
    return ()=>{   //returns a function
        clearTimeout(setTimeout);//each time debounce is called it clears any previous setTimeOut and sets 1000 as a timeout so until the last time debounce is called it clears previous timeout and sets new timeout
        setTimeOut=setTimeOut(()=>{
          validateInput()
        },timeout)
    }
}

for(let i=0;i<5;i++)
{
    callDebounce();
}

//The timeoutId variable is used to keep track of the setTimeout timer.
//When the debounced function is called, the existing timeout is cleared using clearTimeout.
//A new timeout is set using setTimeout, and it will execute the original function after the specified delay