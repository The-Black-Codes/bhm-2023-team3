import React, { useEffect, useRef, useState } from 'react';
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

const Mapbox = () => {
  mapboxgl.accessToken = ""
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-122.4376);
  const [lat, setLat] = useState(37.7577);
  const [zoom, setZoom] = useState(8);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}

export default Mapbox