console.log('Hello World!');

// Add event listener to profile picture input field
document.getElementById('profile_picture').addEventListener('change', function() {
  // Get the selected file
  var file = this.files[0];

  // Create a new FileReader object
  var reader = new FileReader();

  // Add event listener to FileReader object
  reader.addEventListener('load', function() {
    // Get the base64 encoded string
    var base64String = reader.result;

    // Set the src attribute of the profile picture image
    document.getElementById('profile-picture').src = base64String;
  });

  // Read the selected file as a data URL
  reader.readAsDataURL(file);
});