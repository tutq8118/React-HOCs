import React from 'react';
import { useInView } from 'react-intersection-observer';
import './withFadeInWhenInView.css';

const withFadeInWhenInView = (WrappedComponent) => {
  function HOC() {
    const [ref, inView] = useInView({
      threshold: 0,
    });
    return (
      <div ref={ref} className={inView ? 'animate__animated animate__fadeInRight' : 'animate__animated'}>
        <WrappedComponent />
      </div>
    );
  }
  return HOC;
}

export default withFadeInWhenInView;