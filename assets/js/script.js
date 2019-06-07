var topics = ['puppies', 'dogs', 'cats', 'pandas'];

$("#gifBTN").on("click", function () {
  event.preventDefault();
  var myKey = 'TRqFZfF9BvaQon8dF4sa3ZXyUPB7BAF4';
  var userTag = document.querySelector('#myTag').value;
  var queryURL = `https://api.giphy.com/v1/gifs/random?api_key=${myKey}&tag=${userTag}`;
//
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    console.log(queryURL);
    var imageUrl = response.data.image_original_url;
    console.log(imageUrl);
    myImage(imageUrl, userTag);



  });
});

function myImage(image, tag) {
  var gifImage = $("<img>");

  gifImage.attr("src", image);
  gifImage.attr("alt", `${tag} image`);
  
  $("#gifDisplay").prepend(gifImage);
}