import React from 'react';
import Typical from 'react-typical';
import logo from './logo.svg';
import './App.css';
import ParticlesBg from 'particles-bg'

function App() {

  let config = {
    num: [4, 7],
    rps: 0.01,
    radius: [0, 1.5],
    life: [10, 30],
    v: [1, 0],
    tha: [0, 360],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [0, 1],
    position: "center",
    color: "random",
    cross: "dead", // cross or bround
    random: 3,  // or null,
    g: 0,    // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx, particle) => {
        ctx.beginPath();
        ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.closePath();
    }
  };

  return (
    <div>
      <div style={{
        position: 'absolute', left: '50%', top: '40%',
        transform: 'translate(-50%, -50%)',
        //backgroundColor: 'blue',
        fontSize: 120,
        fontWeight: 400,
        textAlign: 'center',

      }}>
        <Typical
          steps={['H', 2000, 'Harrison', 1500, 'Harrison Pearl', 0]}
          wrapper="p"
        />
      </div>

      <ParticlesBg type="custom" config={config} bg={true} />


      <div style={{
        position: 'absolute', left: '50%', top: '80%',
        transform: 'translate(-50%, -50%)',
        animation: 'App-logo-spin 3s 6s ease-in forwards',
        textAlign: 'center',
        color: 'grey',
        opacity:0}}>


            <div style={{
              //position: 'relative', left: '50%',
              //backgroundColor: 'blue',
              fontSize: 45,

            }}>
              portfolio
            </div>

            <div style={{
              //position: 'relative', left: '50%', top: '85%',
              //backgroundColor: 'blue',
              //animation: 'App-logo-spin infinite 8s ease-in-out alternate',
              fontSize: 40,
            }}>
              ˅
            </div>
      </div>




    </div>
  );
}

export default App;
