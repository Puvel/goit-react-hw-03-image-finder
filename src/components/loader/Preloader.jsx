import { ThreeCircles } from 'react-loader-spinner';

export const Preloader = () => (
  <div className="spinnerOverlay ">
    <ThreeCircles
      height="100"
      width="100"
      color="#4fa94d"
      wrapperStyle={{
        backgroundColor: 'rgba(0,0,0,0.9)',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1200,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </div>
);
