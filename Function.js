function onePlusAverage(x,y) {
    console.log("done");
    return Math.round( 1+(x+y)/2);
  }
  
  const hello=()=>{
    console.log("Hello Shraboni how are you");
    return "Hi";
  }
  
  const sum=(p , q)=>{  // this is a function
    return p+q;
  }
  
  let a = 1;
  let b = 2;
  let c = 3;
  
  console.log("a and b average", onePlusAverage(a,b))
  console.log("Smmation is",sum(4,3))
  let v = hello();
  console.log(v);