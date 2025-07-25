function showLocation(position) {
            const geolocationInput = document.getElementById('geolocation');
            const geolocationInfo = document.getElementById('geolocation-info');
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            geolocationInput.value = `${latitude}, ${longitude}`;
            geolocationInfo.innerHTML = `Geolocation fetched: Latitude ${latitude}, Longitude ${longitude}`;

         
        }

        function getLocation() {
            // console.log(showLocation);
            // console.log(showError);
            if (navigator.geolocation) {
                // console.log(navigator.geolocation.getCurrentPosition);
                navigator.geolocation.getCurrentPosition(showLocation, showError);
                
            } else {
                const geolocationInfo = document.getElementById('geolocation-info');
                geolocationInfo.innerHTML = "This browser does not support geolocation.";
            }
        }

        function showError(error) {
            const geolocationInfo = document.getElementById('geolocation-info');
            // document.write(error);
            console.log(error);
            // console.log(error.code);
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    console.log(error.UNKNOWN_ERROR);
                    geolocationInfo.innerHTML = "User denied the request for Geolocation.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    geolocationInfo.innerHTML = "Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    geolocationInfo.innerHTML = "The request to get the user location timed out.";
                    break;
                case error.UNKNOWN_ERROR:
                    geolocationInfo.innerHTML = "An unknown error occurred.";
                    break;
            }
            return false;
        }

        function submitForm(event) {
            console.log(event);
            event.preventDefault();

            
            const successMessage = document.getElementById('success-message');
            successMessage.innerHTML = "Shipping details submitted successfully!";

          
        }