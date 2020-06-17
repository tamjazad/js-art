// inspired by a three.js tutorial:
// https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var color = new THREE.Color( 0xffffff );
renderer.setClearColor( color );
document.body.appendChild( renderer.domElement );

var torus_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 2, 3 );
var torus_material = new THREE.MeshBasicMaterial({
  color : 0x000000;
})
var torus = new THREE.Mesh( torus_geo, torus_material );

var dodec_geo = new THREE.DodecahedronGeometry( 50, 0 );
var dodec_material = new THREE.MeshBasicMaterial({
  color : 0x45f32e;
})
var dodec = new THREE.Mesh( dodec_geo, dodec_material );

var torus_outline_geo = new THREE.TorusKnotGeometry( 150, 25, 100, 10, 2, 3 );
var t_outline_material = new THREE.MeshBasicMaterial({
  color : 0x75aefb;
})
var torus_outline = new THREE.Mesh( torus_outline_geo, t_outline_material );

scene.add( torus );
scene.add( torus_outline );
scene.add( dodec );

camera.position.z = 500;

function animate() {
  requestAnimationFrame( animate );
  torus.rotation.x += 0.03;
  torus.rotation.y += 0.07;
  torus_outline.rotation.x += 0.03;
  torus_outline.rotation.y += 0.07;
  dodec.rotation.x += -0.02;
  dodec.rotation.y -= 0.05;

  renderer.render( scene, camera );
}

animate();
