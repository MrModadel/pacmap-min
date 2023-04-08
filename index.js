let start = confirm('начать игру?')
if (start) {
   let time = +prompt('сколько секунд?')
   if (time !== 0) {
      let point = 0;
      let pointText = document.querySelector('.point span');
      let save = time
      let timer = document.querySelector('.timer span');
      timer.innerHTML = time
      let intir = setInterval(() => {
         time--
         timer.innerHTML = time
         if (time <= 0) {
            alert(`за ${save}-секунд ${point}-очков`)
            clearInterval(intir)
            document.location.href = "https://www.google.co.uz/";
         }
      }, 1000)
      let d22 = document.querySelector('.d22')
      let food = document.querySelector('.food')
      let winW = window.innerWidth;
      let winH = window.innerHeight;
      setInterval(() => {
         d22.classList.toggle('mouse_open')
      }, 300);
      let x = 0
      let y = 0
      window.onkeydown = (event) => {
         winW = window.innerWidth;
         winH = window.innerHeight;
         switch (event.which) {
            case 38:
               if (!(y <= 0)) {
                  y -= 25
               }
               d22.style.rotate = "270deg"
               moveD22()
               break;
            case 40:
               if (!(y >= winH - 334)) {
                  y += 25
               }
               moveD22()
               d22.style.rotate = "90deg"
               break;
            case 37:
               if (!(x <= 0)) {
                  x -= 25
               }
               d22.style.rotate = "180deg"
               moveD22()
               break;
            case 39:
               if (!(x >= winW - 180)) {
                  x += 25
               }
               d22.style.rotate = "0deg"
               moveD22()
               break;
         }
      }
      function moveD22() {
         let food_pos = food.getBoundingClientRect()
         d22.style.translate = `${x}px ${y}px`
         let d22_pos = d22.getBoundingClientRect()
         if (d22_pos.x >= food_pos.x - 117 && d22_pos.x <= food_pos.x + 58.5 && d22_pos.y >= food_pos.y - 117 && d22_pos.y <= food_pos.y + 58.5) {
            let xFood = Math.round(Math.random() * winW-50)
            let yFood = Math.round(Math.random() * winH - 190)
            function infinit() {
               yFood = Math.round(Math.random() * winH - 190)
               if (yFood <= 0) {
                  infinit()
               }
            }
            if (yFood <= 0) {
               infinit()
            }
            food.style.translate = `${xFood}px ${yFood}px`
            food.style.top = '184px'
            food.style.left = 0;
            point++
            console.log(point, pointText);
            pointText.innerHTML = point
         }
      }
   } else {
      document.location.href = "https://www.google.co.uz/";
   }
} else {
   document.location.href = "https://www.google.co.uz/";
}