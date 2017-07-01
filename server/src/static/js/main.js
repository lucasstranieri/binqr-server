window.onload = function(e){
    var form = document.getElementById('file-form');
    var fileSelect = document.getElementById('file-select');
    var uploadButton = document.getElementById('upload-button');

    form.onsubmit = function(event) {
        event.preventDefault();

        // Update button text.
        uploadButton.innerHTML = 'Uploading...';

        // Get the selected files from the input.
        var files = fileSelect.files;

        // Create a new FormData object.
        var formData = new FormData();

        // Loop through each of the selected files.
        for (var i = 0; i < files.length; i++) {
            var file = files[i];

            // Add the file to the request.
            formData.append('file', file, file.name);
        }

        // Set up the request.
        var xhr = new XMLHttpRequest();
        // Open the connection.
        xhr.open('POST', 'process', true);
        // Set up a handler for when the request finishes.
        xhr.onload = function () {
            if (this.status === 204) {
                window.location.replace('success');
            } else {
                alert(this.responseText);
            }
            uploadButton.innerHTML = 'Upload';
        };
        // Send the Data.
        xhr.send(formData);
    }
}