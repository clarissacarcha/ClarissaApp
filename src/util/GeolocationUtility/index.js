import Geolocation from 'react-native-geolocation-service';

export class GeolocationUtility {
  // Get coordinates
  static getCurrentLocation = async () => {
    try {
      return new Promise((resolve, reject) => {
        Geolocation.getCurrentPosition(
          position => {
            resolve(position);
          },
          error => {
            reject(error);
          },
          {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 10000,
          },
        );
      });
    } catch (error) {}
  };
}
