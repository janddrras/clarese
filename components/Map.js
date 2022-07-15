import { useState, useEffect, useRef } from 'react';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';
import {fromLonLat} from 'ol/proj';

function MapComponent() {
    const [map, setMap] = useState();
    const mapElement = useRef();
    const mapRef = useRef();
    mapRef.current = map;

    useEffect(() => {
        const initialMap = new Map({
          target: mapElement.current,
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: fromLonLat([24.784296, 46.418686 ]),
                zoom: 14,
                maxZoom: 18,
                constrainOnlyCenter: true,
            }),
        });
        setMap(initialMap);
    }, []);

    return (
      <div style={{height:'400px',width:'50%'}} ref={mapElement} className="map-container" />
    );
}

export default MapComponent;