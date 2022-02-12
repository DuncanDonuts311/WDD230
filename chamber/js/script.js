function arrowup() {
    $(document).ready(function(){
    
        $('.icon-up').click(function(){
            $('body, html').animate({
                scrollTop: '0px'
            }, 300);
        });
    
        $(window).scroll(function(){
            if( $(this).scrollTop() > 0 ){
                $('.icon-up').slideDown(300);
            } else {
                $('.icon-up').slideUp(300);
            }
        });
    
    });
    }
    arrowup();
    
    function date() {

      document.getElementById("current-year").innerHTML = new Date().getFullYear();
    

      const now = new Date(document.lastModified);
      const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(now);
      document.getElementById("date").innerHTML = fulldate;
    

    const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
    document.getElementById("headerDate").textContent = new Date().toLocaleDateString('en-UK', options); 
    }

    date();
    

    const banner = document.getElementById('banner');
    let today = new Date();
    let day = today.getDay();
    
    const showbanner = () => {
      banner.style.display = "block";
    };
    
    if (day == 1 || day == 2) {showbanner();
    };
    

    function toggleMenu() {
      document.getElementById("primaryNav").classList.toggle("open");
      document.getElementById("hamburgerBtn").classList.toggle("open");
    }
    
    const x = document.getElementById('hamburgerBtn');
    x.onclick = toggleMenu;