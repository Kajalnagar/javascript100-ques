// Functions are basic buildind blocks , with the help of Functions are reusable block of code designed to perform a particular task. 
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Functions</h1>

<p>Call a function to compute the product of p1 and p2 and return the result:</p>

<p id="demo"></p>
  <p id="name"></p>

<script>
// Function to compute the product of p1 and p2
  function myFunction(p1,p2)
{
    return p1*p2;
}
let result = myfunction(4,3);
document.getElementById("demo").innerHTML="The result is: " +result;

// invoke(call) a function that convert fvrom Fahrenheit to celsius
function toCelsius(f) {
  return (5/9) * (f-32);
}

let value = toCelsius(77);
document.getElementById("name").innerHTML = value;
</script>

</body>
</html>
