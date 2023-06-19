import { BoxBufferGeometry, Mesh, MeshStandardMaterial } from 'three';

function createCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(2, 2, 2);

  // Swith the old "basic" material to a physically correct "standard" material
  const material = new MeshStandardMaterial( { color: 'rebeccapurple'} );

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  cube.rotation.set( -.5, -.1, .8 );

  return cube;
}

export { createCube };
