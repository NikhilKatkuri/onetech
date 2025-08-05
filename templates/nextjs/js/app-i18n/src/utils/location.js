export const getCurrentLocation = (
  options = {
    enableHighAccuracy: true,
    timeout: 15000,
    maximumAge: 0,
  }
) => {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new Error("Geolocation is not supported in this environment."));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      function (position) {
      resolve(position);
      },
      function (error) {
      var message = "An unknown error occurred.";
      switch (error.code) {
        case error.PERMISSION_DENIED:
        message =
          "Location permission was denied. Please enable it in settings.";
        break;
        case error.POSITION_UNAVAILABLE:
        message = "Location data is unavailable. Try again later.";
        break;
        case error.TIMEOUT:
        message = "Location request timed out. Ensure your GPS is enabled.";
        break;
      }
      reject(new Error(message));
      },
      options
    );
  });
};
