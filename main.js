import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'



const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render( scene, camera);


// const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
// const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
// const torus = new THREE.Mesh( geometry, material);

// scene.add(torus);

const axesHelper = new THREE.AxesHelper( 5 );
scene.add( axesHelper );

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,0,10);

const ambientLight = new THREE.AmbientLight(0xffffff);

const sphereSize = 1;
const lightHelper = new THREE.PointLightHelper(pointLight, sphereSize);

scene.add(pointLight, ambientLight);
scene.add(lightHelper)

const gridHelper = new THREE.GridHelper(1200,10);
scene.add(gridHelper);


const controls = new OrbitControls(camera, renderer.domElement);



function addStar() {
  const geometry = new THREE.SphereGeometry(0.1, 24, 24);
  const material = new THREE.MeshStandardMaterial({color: 0xffffff});
  const star = new THREE.Mesh( geometry, material);

  const [x,y,z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  star.position.set(x, y, z);
  scene.add(star);

}

Array(200).fill().forEach(addStar);

// Background
const spaceTexture = new THREE.TextureLoader().load('8k_stars_milky_way.jpg');
scene.background = spaceTexture;


// Sun
const sunTexture = new THREE.TextureLoader().load('8k_sun.jpg');
const sunGeometry = new THREE.SphereGeometry(200, 32, 32);
const sunMaterial = new THREE.MeshStandardMaterial({
  map: sunTexture,
  

}) 

const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);
sun.position.z = -277;
sun.position.x = 150;


// Mercury

const mercuryGeometry = new THREE.SphereGeometry(1, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load('8k_mercury.jpg');
const mercuryMaterial = new THREE.MeshStandardMaterial({
  map: mercuryTexture,

}) 

const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial)
scene.add(mercury);
mercury.position.x = 4.5;
mercury.position.z = 5;
// mercury.position.x = 5;



// Venus
const venusGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const venusTexture = new THREE.TextureLoader().load('8k_venus_surface.jpg');
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,

}) 
const venus = new THREE.Mesh(venusGeometry, venusMaterial)
scene.add(venus);
venus.position.x = -4;
venus.position.z = 12;


// Earth
const earthNormal = new THREE.TextureLoader().load('normal.jpg');
const earthGeometry = new THREE.SphereGeometry(3, 32, 32);
const earthTexture = new THREE.TextureLoader().load('8k_earth_daymap.jpg');
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
  normalMap:  earthNormal  

}) 
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.x = 6;
earth.position.z = 25;

// Moon
const moonNormal = new THREE.TextureLoader().load('normal.jpg');
const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const moonTexture = new THREE.TextureLoader().load('8k_moon.jpg');
const moonMaterial = new THREE.MeshStandardMaterial({
  map: moonTexture,
  normalMap:  moonNormal  

}) 

const moon = new THREE.Mesh(moonGeometry, moonMaterial)
earth.add(moon);

const moonObject = new THREE.Object3D();
moonObject.add(moon);
earth.add(moonObject);

// moon.position.setZ(25);
moon.position.setX(5);
// moon.position.setY(5);


// Mars
const marsNormal = new THREE.TextureLoader().load('normal.jpg');
const marsGeometry = new THREE.SphereGeometry(2, 32, 32);
const marsTexture = new THREE.TextureLoader().load('8k_mars.jpg');
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
  normalMap:  marsNormal  

}) 
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.x = -3;
mars.position.z = 35;

// Jupiter

const jupiterGeometry = new THREE.SphereGeometry(10, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load('8k_jupiter.jpg');
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture,
   

}) 
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.x = 7;
jupiter.position.z = 50;

// Saturn
const saturnGeometry = new THREE.SphereGeometry(8, 32, 32);
const saturnTexture = new THREE.TextureLoader().load('8k_saturn.jpg');
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture,
   

}) 
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
saturn.position.x = -11;
saturn.position.z = 70;

// Borg Cube
const borgGeometry = new THREE.BoxGeometry(3, 3, 3);
const borgTexture = new THREE.TextureLoader().load('borg.jpeg');
const borgMaterial = new THREE.MeshStandardMaterial({
  map: borgTexture,

}) 
const borgCube = new THREE.Mesh(borgGeometry, borgMaterial);
scene.add(borgCube);

borgCube.position.z = 200;
borgCube.position.y = 5;
borgCube.position.x = -5

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);

  // torus.rotation.x += 0.001;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01

  // moon.position.y += 0.01;
  // moon.position.z += 0.01

  // controls.update();

  earth.rotateY(0.004);
  moon.rotateY(0.04);
  moonObject.rotateY(-0.008);
}
animate()

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
  mercury.rotation.y += 0.05;
  // mercury.rotation.y += 0.075;
  // mercury.rotation.z =+ 0.05;

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

}

document.body.onscroll = moveCamera;