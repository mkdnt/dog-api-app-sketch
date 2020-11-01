function getDogImages(numImages) {
  fetch('https://dog.ceo/api/breeds/image/random/' + numImages)
    .then(response => response.json())
    .then(responseJson =>
      displayResults(responseJson))
    .catch(error => alert('Something went wrong.Try again later.'))  
}


function displayResults(responseJson) {
  let images = []
  for(let i = 0; i < responseJson.message.length; i++) {
    images.push(`<img src="${responseJson.message[i]}">`)
  }
  $('.results-imgs').html(images)
  console.log(images)
}

function watchForm() {
  $('form').submit (event => {
    event.preventDefault();
    let imageNumber = $('input').val()
    if (imageNumber < 3) {
      imageNumber = 3
    }
    getDogImages(imageNumber)
  })
}

$(function() {
  console.log(`App loaded! Waiting for submit!'`);
  watchForm()
})
