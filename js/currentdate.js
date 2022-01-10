 const options = {weekday: 'long', day: 'numeric', month: 'short', year: 'numeric'};
 document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);