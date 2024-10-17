import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import { useState } from 'react';
import { LatLngExpression, LatLngTuple } from 'leaflet';

// interface MapPositionType {
//   lat: number;
//   lng: number;
// }

export default function Map() {
  const [mapPosition, setMapPosition] = useState<
    LatLngExpression | LatLngTuple
  >([40, 0]);
  console.log(setMapPosition);
  console.log(mapPosition);

  return (
    <>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        <Marker position={mapPosition}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}
