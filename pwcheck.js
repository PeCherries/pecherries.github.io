function validateForm() {
        var pw = document.getElementById("inputPassword").value;
        var password = "cannoli";
        //please don't judge me
        if (pw == password) {
            console.log("hey");
            window.location.replace("https://photos.google.com/share/AF1QipMMSSGoJle1jGLYpNY1IkD4bERwuhGGG0e7V5u4JycgtCPUpgYof7piWipJvLIO7w?key=QUNRSG8wRVBpMEFxRWtJV0pJUkJZb0JHQXJIMUJn");
            return false;
        }
        else {
            alert ("Login was unsuccessful, please retry password");
            console.log("well that worked");
            return false;
        }
    }