function mypwd()
{
  var x = document.getElementById("pwd1").value;
  var y = document.getElementById("pwd2").value;
  console.log(x);
  console.log(y);
  return vaild(x,y)

}
function vaild(a,b)
{
  if (a===b && a.length>=8 )
  {
    alert("All set, thank you!");
  }
  else if (a.length<8 || b.length<8)
  {
    alert("The passwords are not at least 8 characters long!");
  }
  else if (a!=b)
  {
    alert("Passwords are not match!");
  }
}
