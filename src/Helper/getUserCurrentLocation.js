async function getUserCurrentLocationCoordinates() {
  // get and return the position of the user
  return new Promise((resolve, reject) => {
    function success(position) {
      let location_detials = {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      };
      resolve(location_detials);
    }

    function errorCallback() {
      console.log("Error occured");
    }

    // get position if geolocation is supported on user brower
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(success, errorCallback);
    } else {
      console.log("Geolocation doesn't esist");
      return { code: 1, msg: "Geolocation doesn't esist" };
    }
  });
}

export default getUserCurrentLocationCoordinates;
