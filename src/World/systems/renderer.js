import { WebGL1Renderer } from "three";

function createRenderer() {
  const renderer = new WebGL1Renderer();

  // Turn on the physically correct lighting model
  renderer.physicallyCorrectLights = true;

  return renderer;

}

export { createRenderer }