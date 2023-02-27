import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";

const Map = ({ accessToken }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    mapboxgl.accessToken = accessToken;
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-86.6, 35.9],
      zoom: 7,
    });

    setMap(newMap);

    newMap.on("load", () => {
      newMap.addSource("states", {
        type: "geojson",
        data: "https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json",
      });

      newMap.addLayer({
        id: "state-borders",
        type: "line",
        source: "states",
        layout: {},
        paint: {
          "line-color": "#ff0000",
          "line-width": 2,
        },
        filter: ["==", "name", "Tennessee"],
      });
    });

    return () => {
      newMap.remove();
    };
  }, [accessToken]);

  return (
    <div id="map" style={{ height: "800px" }}>
      {map && <div>// Add map controls here</div>}
    </div>
  );
};

export default Map;
