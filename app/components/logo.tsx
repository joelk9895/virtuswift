import React from "react";

interface LogoProps {
  isHovered: boolean;
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ isHovered, isScrolled }) => {
  const fillColorPrimary = isHovered || isScrolled ? "#3236AB" : "#FFFFFF";
  const fillColorSecondary = isHovered || isScrolled ? "#E15016" : "#FFFFFF";
  const fillColorTertiary = isHovered || isScrolled ? "#FF8643" : "#FFFFFF";

  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 1000 1000"
      style={{ background: "new 0 0 1000 1000" }}
    >
      <style type="text/css">{`
        @keyframes whirlpoolAndFly {
            0% {
                transform: rotate(0deg) scale(0);
                opacity: 0;
            }
            25% {
                transform: rotate(360deg) scale(1.2);
                opacity: 1;
            }
            50% {
                transform: rotate(720deg) scale(1);
                opacity: 1;
            }
            75% {
                transform: translateY(-20px) scaleY(0.9);
            }
            100% {
                transform: translateY(0) scaleY(1);
            }
        }

        .bird-symbol {
            transform-origin: center;
            animation: whirlpoolAndFly 4s ease-in-out infinite;
        }
      `}</style>

      <g className="bird-symbol">
        <polygon
          style={{ fill: fillColorPrimary }}
          points="688.72,568.71 804.53,568.71 748.83,530.63"
        />
        <polygon
          style={{ fill: fillColorPrimary }}
          points="888.78,519.54 858.99,519.54 910,427.72 806.73,493.93 804.53,568.71 815.61,568.71 870.57,546.75 
            904.21,545.76 888.78,532.65"
        />
        <polygon
          style={{ fill: fillColorSecondary }}
          points="793.62,483.09 637.8,454.71 748.83,530.63 748.83,530.63 806.73,493.93"
        />
        <polygon
          style={{ fill: fillColorTertiary }}
          points="748.83,530.63 804.53,568.71 804.53,568.71 806.73,493.93"
        />
      </g>

      <g>
        <g>
          <polygon
            style={{ fill: fillColorPrimary }}
            points="86.62,568.21 82.54,498.56 112.25,498.56 110.97,551.84 112.87,552.32 140.45,498.56 169.87,498.56 
                128.51,568.21"
          />
          <path
            className="st0"
            style={{ fill: fillColorPrimary }}
            d="M154.74,568.21l14.56-54.25h23.52l-14.56,54.25H154.74z M170.84,508.09l2.56-9.54h23.52l-2.56,9.54H170.84z"
          />
          <path
            className="st0"
            style={{ fill: fillColorPrimary }}
            d="M184.33,568.21l14.56-54.25h23.53l-0.66,2.52l1.82-0.68c4.13-1.55,8.49-2.34,12.95-2.34
                c3.66,0,6.48,0.04,8.41,0.13l-2.84,10.63c-3.63-0.57-7.38-0.87-11.17-0.87c-7.31,0-12.18,4.31-14.48,12.8l-8.6,32.06H184.33z"
          />
          <polygon
            className="st0"
            style={{ fill: fillColorPrimary }}
            points="246.88,568.21 257.84,527.3 245.34,527.3 248.94,513.96 261.45,513.96 265.55,498.56 289.07,498.56 
                284.97,513.96 297.47,513.96 293.86,527.3 281.36,527.3 270.4,568.21"
          />
          <path
            className="st0"
            style={{ fill: fillColorPrimary }}
            d="M309.92,568.71c-11.81,0-17.55-4.35-17.55-13.3c0-2.4,0.42-5.15,1.26-8.18l8.9-33.27h23.52l-9.41,35.09
                c-0.39,1.48-0.58,2.81-0.58,3.96c0,3.71,2.15,5.76,6.06,5.76c4.99,0,8.35-3.11,9.98-9.25l9.55-35.56h23.52l-14.56,54.25h-23.53
                l0.68-2.57l-1.86,0.74C322.04,567.93,316.66,568.71,309.92,568.71z"
          />
        </g>
        <g>
          <path
            className="st1"
            style={{ fill: fillColorPrimary }}
            d="M358.7,568.21l3.61-13.34h33.04c6.16,0,9.88-2.32,11.08-6.9c0.22-0.72,0.33-1.44,0.33-2.1
                c0-2.42-1.42-5.31-8.16-5.31h-13.8c-9.92,0-14.75-3.73-14.75-11.39c0-2.14,0.38-4.61,1.11-7.34l1.05-3.96
                c3.46-12.96,11.44-19.26,24.38-19.26l44.1-0.05l-3.56,13.39H406.6c-6.15,0-9.9,2.32-11.13,6.9c-0.22,0.73-0.33,1.45-0.33,2.11
                c0.03,2.43,1.46,5.31,8.16,5.31h13.8c9.92,0,14.75,3.73,14.75,11.4c0,2.14-0.36,4.59-1.07,7.3l-1.05,3.95
                c-3.5,12.99-11.49,19.31-24.43,19.31H358.7z"
          />
          <polygon
            className="st1"
            style={{ fill: fillColorPrimary }}
            points="479.09,568.21 479.99,548.41 478.08,547.92 468.18,568.21 442.68,568.21 442.39,513.96 
                465.82,513.96 461.54,542.81 463.44,543.4 477.82,513.96 498.74,513.96 497.34,542.86 499.28,543.28 510.69,513.96 533.91,513.96 
                504.55,568.21"
          />
          <path
            className="st1"
            style={{ fill: fillColorPrimary }}
            d="M524.8,568.21l14.56-54.25h23.52l-14.56,54.25H524.8z M540.9,508.09l2.56-9.54h23.52l-2.56,9.54H540.9z"
          />
          <path
            className="st1"
            style={{ fill: fillColorPrimary }}
            d="M565.9,568.21l10.95-40.91h-12.5l3.61-13.34h13.11l0.27-0.57c6.12-12.63,18.24-19.04,36-19.04h7.24
                l-2.92,10.99h-4.88c-5.38,0-9.35,2.4-11.8,7.15l-0.76,1.47h12.24l-3.61,13.34h-12.51l-10.95,40.91H565.9z"
          />
          <polygon
            className="st1"
            style={{ fill: fillColorPrimary }}
            points="621.4,568.21 632.35,527.3 619.85,527.3 623.46,513.96 635.96,513.96 640.06,498.56 663.59,498.56 
                659.49,513.96 671.98,513.96 668.38,527.3 655.87,527.3 644.92,568.21"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
