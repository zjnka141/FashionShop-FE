import React from 'react';
import { Slide } from 'react-reveal';
const Banner = () => {
  return (
    <>
      <Slide bottom cascade>
        <div style={{ marginTop: 200 }}>
          <div
            style={{
              width: 500,
              height: 200,
              background: 'tomato',
              display: 'inline-block',
            }}
          ></div>
          <div
            style={{
              width: 500,
              height: 200,
              background: 'green',
              display: 'inline-block',
              marginLeft: 20,
            }}
          ></div>
        </div>
        <div>
          <div
            style={{
              width: 500,
              height: 200,
              background: 'tomato',
              display: 'inline-block',
            }}
          ></div>
          <div
            style={{
              width: 500,
              height: 200,
              background: 'green',
              display: 'inline-block',
              marginLeft: 20,
            }}
          ></div>
        </div>
      </Slide>
    </>
  );
};

export default Banner;
