import * as React from 'react'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function Map({ lat, lng }: { lat: number; lng: number }) {
  const position: [number, number] = [lat, lng]
  if (typeof window !== 'undefined') {
    return (
      <MapContainer className="h-96" center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Visit us today!</Popup>
        </Marker>
      </MapContainer>
    )
  } else {
    return <div className="h-96" />
  }
}
