import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import golf from '../../assets/img/golf.png';
import cook from '../../assets/img/exploring.png';
import { IoIosStar } from "react-icons/io";

const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [38, 38],
  iconAnchor: [19, 38],
  popupAnchor: [0, -38],
});

const locations = [
  {
    id: 1,
    name: "Golf Tournament",
    image: golf,
    lat: 28.051561,
    lng: 34.715805,
  },
  {
    id: 2,
    name: "Cooking",
    image: cook,
    lat: 28.048796,
    lng: 34.717427,
  },
];

const Map = () => {
  return (
    <div className="h-[500px] w-full mt-[35px]">
      <MapContainer
        center={[28.05, 34.716]}
        zoom={17}
        style={{ height: "100%", width: "100%",padding:"0px",borderRadius:"8px" }}
      >
        <TileLayer url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}" />

        {locations.map((location) => (
          <Marker
            key={location.id}
            position={[location.lat, location.lng]}
            icon={customIcon}
          >
            <Popup>
              <div className="w-[188px] h-[100px] flex items-center gap-[8px]">
                <img
                  src={location.image}
                  alt={location.name}
                  className=" w-[81px] rounded"
                />
                <div className="flex h-[100px] flex-col">
                   <span style={{fontFamily:"Brown, sans-serif"}} className="text-[15px] text-left leading-[20px] tracking-[0.35px] text-[#222222] opacity-100">{location.name}</span>
                   <span style={{fontFamily:"BrownLight, sans-serif"}} className="text-[10px] mt-[5px] text-left text-[#222222]  tracking-[0.35px]">Nov 10-29</span>
                   <span style={{fontFamily:"Brown, sans-serif"}} className="text-[11px] mt-[10px] text-[#222222] tracking-[0.35px] ">10:30 AM - 7:30 PM</span>
                   <span  style={{fontFamily:"BrownLight, sans-serif"}} className="text-[10px] mt-[10px] flex gap-2 items-center justify-center"><IoIosStar className=" text-black"/>4.9 (123 reviews)</span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
