// Create a directive called 'matrix-rain'
const matrixRainDirective = {
    mounted(el) {
      const c = el;
      const ctx = c.getContext('2d');
  
      // Making the canvas full screen
      c.height = window.innerHeight;
      c.width = window.innerWidth;
  
      // Chinese characters - taken from the unicode charset
      var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
      // Converting the string into an array of single characters
      matrix = matrix.split("");
  
      var font_size = 10;
      var columns = c.width / font_size; // Number of columns for the rain
      // An array of drops - one per column
      var drops = [];
      // x below is the x coordinate
      // 1 = y co-ordinate of the drop(same for every drop initially)
      for (var x = 0; x < columns; x++) drops[x] = 1;
  
      // Drawing the characters
      function draw() {
        // Black BG for the canvas
        // Translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.04)";
        ctx.fillRect(0, 0, c.width, c.height * 100);
  
        ctx.fillStyle = "#44f24f"; // Green text
        ctx.font = font_size + "px arial";
        // Looping over drops
        for (var i = 0; i < drops.length; i++) {
          // A random chinese character to print
          var text = matrix[Math.floor(Math.random() * matrix.length)];
          // x = i * font_size, y = value of drops[i] * font_size
          ctx.fillText(text, i * font_size, drops[i] * font_size);
  
          // Sending the drop back to the top randomly after it has crossed the screen
          // Adding randomness to the reset to make the drops scattered on the Y axis
          if (drops[i] * font_size > c.height && Math.random() > 0.975) drops[i] = 0;
  
          // Incrementing Y coordinate
          drops[i]++;
        }
      }
  
      setInterval(draw, 35);
    }
  };
  
  export default matrixRainDirective;
  