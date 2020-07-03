// Import stylesheets
import './style.css';

// Write Javascript code!
for(var i=1;i<20;i++)
{
  if(i%3==0)
  {
    if(i%5==0)
    console.log(i+"fizzbuzz");
    else
     console.log(i+"fizz");
  }
  else if(i%5==0)
  console.log(i+"buzz");
  else
  console.log(i);
}
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;