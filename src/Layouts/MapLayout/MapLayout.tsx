import Map from '../../components/Map/Map';
import styles from './MapLayout.module.css';
const MapLayout = () => {
  return (
    <div className={styles.mapContainer}>
      <Map />
    </div>
  );
};

export default MapLayout;
