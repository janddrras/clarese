import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

function MapComponent() {
    
    const coordinate = [46.418686, 24.784296 ]
    
    return (
        <MapContainer center={coordinate} zoom={14} scrollWheelZoom={false} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinate}>
          <Popup>
            Ferma Clarese <br /> Vă așteptăm.
          </Popup>
        </Marker>
      </MapContainer>
    );
}

export default MapComponent;