import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import styles from './Map.module.css';
import { useIP } from '../../contexts/IpContext';
import { useEffect, useState } from 'react';

export default function Map() {
  const [mapPosition, setMapPosition] = useState<[number, number]>([0, 0]);
  const [locationName, setLocationName] = useState('');

  const { locationInfo } = useIP();
  const { loc, city } = locationInfo;
  const [lat, lng] = loc.split(',');

  useEffect(() => {
    if (locationInfo) {
      setMapPosition(loc ? [+lat, +lng] : [0, 0]);
      setLocationName(city);
    } else {
      setMapPosition([0, 0]);
      setLocationName('');
    }
  }, [locationInfo, setLocationName, loc, city, lat, lng]);

  return (
    <>
      <MapContainer
        className={styles.map}
        center={mapPosition}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
        />
        <Marker position={mapPosition}>
          <Popup>{locationName}</Popup>
        </Marker>
        <ChangeCenter position={mapPosition} />
      </MapContainer>
    </>
  );
}

type ChangeCenterProps = {
  position: [number, number];
};

function ChangeCenter({ position }: ChangeCenterProps) {
  const map = useMap();
  map.setView(position);
  return null;
}
