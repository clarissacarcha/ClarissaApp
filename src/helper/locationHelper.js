export const getBoundingBox = ({latitude, longitude}) => {
  const defaultDetla = 0.1;
  const southLat = parseFloat(latitude) - defaultDetla;
  const northLat = parseFloat(latitude) + defaultDetla;
  const westLng = parseFloat(longitude) - defaultDetla;
  const eastLng = parseFloat(longitude) + defaultDetla;
  return `${southLat},${northLat},${westLng},${eastLng}`;
};
