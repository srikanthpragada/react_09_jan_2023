// function component 
export default function Wish() {
  var hours = new Date().getHours()
  var message = "Good Evening"
  if(hours < 12)
     message = "Good Morning"
  else
  if(hours < 17)
     message = "Good Afternoon"

  function wish() {
      var name = document.getElementById("txtName").value;
      window.alert( message + " " + name);
  }
  return (
      <>
        <h2>Wish</h2>
        Name : <input type="text" id="txtName" />
        <button onClick={wish}>Wish</button>
      </>
  );
}

 
