function checkInput()
 {
    if (document.getElementById('name').value &&
        document.getElementById('email').value &&
        document.getElementById('message').value)
         {
        alert('Suggestions Sent!');
         } 
         else {
        alert('Fill Credentials');
         }
}
