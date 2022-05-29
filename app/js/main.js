const scrollLinks = document.querySelectorAll(".links")

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        let position = element.offsetTop - 172;
    
        window.scrollTo({
          top: position,
            left: 0,
        });
    })
  
});