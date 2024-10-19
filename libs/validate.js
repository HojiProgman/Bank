export function validate(inps,regex){
    let isValid = false
     inps.forEach(inp=>{
        let name = inp.getAttribute("name")
  
        if(regex[name].test(inp.value)){
           isValid = true
        }
     })
  
      return isValid 
  }
