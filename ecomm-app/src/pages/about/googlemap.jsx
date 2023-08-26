import React from 'react';
import GoogleMapReact  from 'google-map-react';
import {MapPin} from "phosphor-react"

const MarkerIcon = () => <MapPin size={32} weight="duotone" color='red' />;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 40.90867823801735,
      lng: -73.1182832472208
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <Marker position={{ lat: 40.90867823801735, lng: -122.4194 }} /> */}
        <MarkerIcon lat={40.90867823801735} lng={-73.1182832472208} />
      </GoogleMapReact>
    </div>
  );
}
