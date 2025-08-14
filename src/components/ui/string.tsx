interface String {
  time: string;
  color:string;
}

function String({time, color}: String) {
return (
      <div className="overflow-hidden w-full h-full relative z-0">
        <svg
          viewBox="0 0 1440 320"
          className={`absolute top-0 left-0 w-[400%] h-full ${time}`}
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke={color}
            strokeWidth="3"
            d="M0,160 C120,80 240,240 360,160 C480,80 600,240 720,160 C840,80 960,240 1080,160 C1200,80 1320,240 1440,160"
          />
        </svg>
      </div>
    );
  };

  export default String;
