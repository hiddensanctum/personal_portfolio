$(document).ready(function() {

  var CalcSize = function() {
    var number = 15;
    var width = $('#page-content-wrapper').width();
    var height = $(window).height();
    var area = height * width;
    var elementArea = parseInt(area / number);

    // Calculate side length if there is no "spill":
    var sideLength = parseInt(Math.sqrt(elementArea));

    // We now need to fit the squares. Let's reduce the square size
    // so an integer number fits the width.
    var numX = Math.ceil(width/sideLength);
    sideLength = width/numX;
    while (numX <= number) {
      // With a bit of luck, we are done.
      if (Math.floor(height/sideLength) * numX >= number) {
        // They all fit! We are done!
        return sideLength;
      }
      // They don't fit. Make room for one more square i each row.
      numX++;
      sideLength = width/numX;
    }
    // Still doesn't fit? The window must be very wide
    // and low.
    sideLength = height;
    return sideLength;
  }

  var height = $(window).height();
  $('.box').height(height);
});
