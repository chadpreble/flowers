
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('I Love You So Much! - Chad').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  setTimeout(function() {
    const dvdLogo = document.getElementById('dvdLogo');
    dvdLogo.style.opacity = 1;
    const container = document.body;
    
    let x = 0;
    let y = 0;
    let xSpeed = 3; // Pixels per frame
    let ySpeed = 2;
    
    let logoWidth = dvdLogo.offsetWidth;
    let logoHeight = dvdLogo.offsetHeight;
    let containerWidth = container.clientWidth;
    let containerHeight = container.clientHeight;
    
    function getRandomColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r},${g},${b})`;
    }
    
    function animate() {
        x += xSpeed;
        y += ySpeed;
    
        // Bounce off horizontal walls
        if (x + logoWidth > containerWidth || x < 0) {
            xSpeed *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
            // Adjust position slightly to prevent sticking to the edge
            if (x < 0) x = 0;
            if (x + logoWidth > containerWidth) x = containerWidth - logoWidth;
        }
    
        // Bounce off vertical walls
        if (y + logoHeight > containerHeight || y < 0) {
            ySpeed *= -1;
            dvdLogo.style.backgroundColor = getRandomColor();
            // Adjust position slightly to prevent sticking to the edge
            if (y < 0) y = 0;
            if (y + logoHeight > containerHeight) y = containerHeight - logoHeight;
        }
    
        dvdLogo.style.left = `${x}px`;
        dvdLogo.style.top = `${y}px`;
    
        requestAnimationFrame(animate);
    }
    
    // Initial setup for responsiveness
    window.addEventListener('resize', () => {
        containerWidth = container.clientWidth;
        containerHeight = container.clientHeight;
    });
    
    animate();
  }, 5000); 
};


