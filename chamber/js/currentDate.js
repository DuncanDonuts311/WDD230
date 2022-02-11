function date() {
	document.getElementById("current-year").innerHTML = new Date().getFullYear();
  
	const now = new Date(document.lastModified);
	const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
	document.getElementById("date").innerHTML = fulldate;
  
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  document.getElementById("headerDate").textContent = new Date().toLocaleDateString('en-UK', options); 
  }
  date();