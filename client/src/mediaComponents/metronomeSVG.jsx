import React from "react";

const MetronomeSVG = ({ className, id, handleToggleMetronome }) => {
  return (
    <svg
      id={id}
      onClick={handleToggleMetronome}
      className={className}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
    >
      <g transform="translate(-1)">
        <g>
          <path
            d="M474.023,176.215c-8.718-7.925-22.21-7.283-30.136,1.435l-27.494,30.243L395.383,81.826
			C393.668,71.539,384.768,64,374.34,64h-5.957l-16.471-49.413C349.008,5.876,340.856,0,331.673,0H161.006
			c-9.182,0-17.335,5.876-20.239,14.587L124.297,64h-5.957c-10.429,0-19.329,7.539-21.043,17.826l-42.667,256
			c-1.784,10.703,4.697,20.61,14.397,23.782L33.827,484.806C29.933,498.434,40.166,512,54.34,512h384
			c14.173,0,24.406-13.566,20.512-27.194l-35.199-123.198c9.699-3.172,16.181-13.079,14.397-23.782l-12.722-76.332l50.131-55.144
			C483.384,197.632,482.742,184.14,474.023,176.215z M203.673,106.667h85.333V320h-85.333V106.667z M331.673,106.667h21.333h3.261
			l23.573,141.435l-48.167,52.984V106.667z M176.383,42.667h139.914L323.408,64H310.34h-128h-13.068L176.383,42.667z
			 M136.412,106.667h3.261h21.333V320h-60.15L136.412,106.667z M82.622,469.333l30.476-106.667h69.242h93.351l-45.136,49.65
			c-7.926,8.718-7.283,22.21,1.435,30.136s22.21,7.283,30.136-1.435l71.228-78.35h46.229l30.476,106.667H82.622z M391.823,320
			h-19.683l16.633-18.297L391.823,320z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default MetronomeSVG;
