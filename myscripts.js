jQuery(document).ready(function($) {
  $('#coin').on('click', function() {
      var flipResult = Math.random();
      $('#coin').removeClass();
      $('#result').text(''); // Clear the previous result

      setTimeout(function() {
          if (flipResult <= 0.5) {
              $('#coin').addClass('heads');
              setTimeout(function() { $('#result').text('It is heads!'); }, 3000); // Wait for the animation
              console.log('It is heads');
          } else {
              $('#coin').addClass('tails');
              setTimeout(function() { $('#result').text('It is tails!'); }, 3000); // Wait for the animation
              console.log('It is tails');
          }
      }, 100);
  });
});