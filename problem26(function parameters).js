/* js function does not perform any checking on parameter values 
RULES OF PARAMETERS
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.*/


// Setting a default value in afunction 
<!DOCTYPE html>
<html>
<body>

<p>Setting a default value to a function parameter.</p>
<p id="demo"></p>

<script>
  function myfirst(a, b){
    if(b === undefined){
      b = 2;
    }
   let result a * b;
    result result;
  }
document.getElementById("demo").innerHTML =myfirst(6);
</script>

</body>
</html>

  
