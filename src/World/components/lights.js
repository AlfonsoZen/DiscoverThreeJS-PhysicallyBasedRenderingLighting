import { DirectionalLight } from 'three';

function createLights() {
  // Create a directional light
  const light = new DirectionalLight('snow', 8);

  // Move the light right, up and towards us
  light.position.set(10, 10, 0);
  
  return light;
}

export { createLights }