import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth /window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render( scene, camera);


// const axesHelper = new THREE.AxesHelper( 500 );
// scene.add( axesHelper );

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10,0,10);

const ambientLight = new THREE.AmbientLight(0xffffff);

const sphereSize = 1;
// const lightHelper = new THREE.PointLightHelper(pointLight, sphereSize);

scene.add(pointLight, ambientLight);
// scene.add(lightHelper)

// const gridHelper = new THREE.GridHelper(1200,10);
// scene.add(gridHelper);


// const controls = new OrbitControls(camera, renderer.domElement);


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
const spaceTexture = new THREE.TextureLoader().load('img/8k_stars_milky_way.jpg');
scene.background = spaceTexture;


// Sun
const sunTexture = new THREE.TextureLoader().load('img/8k_sun.jpg');
const sunGeometry = new THREE.SphereGeometry(200, 32, 32);
const sunMaterial = new THREE.MeshStandardMaterial({
  map: sunTexture,
  

}) 

const sun = new THREE.Mesh(sunGeometry, sunMaterial);

scene.add(sun);
sun.position.z = -150;
sun.position.x = 150;


// Mercury

const mercuryGeometry = new THREE.SphereGeometry(1, 32, 32);
const mercuryTexture = new THREE.TextureLoader().load('img/mercury.jpg');
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
const venusTexture = new THREE.TextureLoader().load('img/8k_venus_surface.jpg');
const venusMaterial = new THREE.MeshStandardMaterial({
  map: venusTexture,

}) 
const venus = new THREE.Mesh(venusGeometry, venusMaterial)
scene.add(venus);
venus.position.x = -4;
venus.position.z = 18;


// Earth
const earthNormal = new THREE.TextureLoader().load('img/normal.jpg');
const earthGeometry = new THREE.SphereGeometry(3, 32, 32);
const earthTexture = new THREE.TextureLoader().load('img/8k_earth_daymap.jpg');
const earthMaterial = new THREE.MeshStandardMaterial({
  map: earthTexture,
  normalMap:  earthNormal  

}) 
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
earth.position.x = 8;
earth.position.z = 28;

// Moon
const moonNormal = new THREE.TextureLoader().load('img/normal.jpg');
const moonGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const moonTexture = new THREE.TextureLoader().load('img/8k_moon.jpg');
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
const marsNormal = new THREE.TextureLoader().load('img/normal.jpg');
const marsGeometry = new THREE.SphereGeometry(2, 32, 32);
const marsTexture = new THREE.TextureLoader().load('img/8k_mars.jpg');
const marsMaterial = new THREE.MeshStandardMaterial({
  map: marsTexture,
  normalMap:  marsNormal  

}) 
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
scene.add(mars);
mars.position.x = -5;
mars.position.z = 39;

// Jupiter

const jupiterGeometry = new THREE.SphereGeometry(10, 32, 32);
const jupiterTexture = new THREE.TextureLoader().load('img/8k_jupiter.jpg');
const jupiterMaterial = new THREE.MeshStandardMaterial({
  map: jupiterTexture,
   

}) 
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
scene.add(jupiter);
jupiter.position.x = 25;
jupiter.position.z = 70;

// Saturn
const saturnGeometry = new THREE.SphereGeometry(8, 32, 32);
const saturnTexture = new THREE.TextureLoader().load('img/8k_saturn.jpg');
const saturnMaterial = new THREE.MeshStandardMaterial({
  map: saturnTexture,
   

}) 
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
scene.add(saturn);
saturn.position.x = -21;
saturn.position.z = 130;

// Rings of Saturn
const ringOneGometry = new THREE.RingGeometry(11, 16, 32);
const ringOneTexture = new THREE.TextureLoader().load('img/polar.png')
const ringOneMaterial = new THREE.MeshStandardMaterial({
 map: ringOneTexture
})


const ringOne = new THREE.Mesh(ringOneGometry, ringOneMaterial)
ringOne.position.x = -20;
ringOne.position.z = 130
ringOne.rotateY(0);
ringOne.rotateX(4.9);
ringOne.rotateZ(0);
scene.add(ringOne);


// Uranus
const uranusGeometry = new THREE.SphereGeometry(8, 32, 32);
const uranusTexture = new THREE.TextureLoader().load('img/2k_uranus.jpg');
const uranusMaterial = new THREE.MeshStandardMaterial({
  map: uranusTexture,
   

}) 
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
scene.add(uranus);
uranus.position.x = 20;
uranus.position.z = 170;



// Neptune
const neptuneGeometry = new THREE.SphereGeometry(6, 32, 32);
const neptuneTexture = new THREE.TextureLoader().load('img/2k_neptune.jpg');
const neptuneMaterial = new THREE.MeshStandardMaterial({
  map: neptuneTexture
})

const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
scene.add(neptune);

neptune.position.x = -12;
neptune.position.z = 190;

// Pluto 

const plutoGeometry = new THREE.SphereGeometry(0.2, 32, 32);
const plutoTexture = new THREE.TextureLoader().load('public/img/plutomap2k.jpg');
const plutoMaterial = new THREE.MeshStandardMaterial({
  map: plutoTexture
})

const pluto = new THREE.Mesh(plutoGeometry, plutoMaterial);
scene.add(pluto);
pluto.position.x = 6;
pluto.position.z  = 229;
pluto.position.y = 5;


// Borg Cube
const borgGeometry = new THREE.BoxGeometry(3, 3, 3);
const borgTexture = new THREE.TextureLoader().load('public/img/borg.jpeg');
const borgMaterial = new THREE.MeshStandardMaterial({
  map: borgTexture,

}) 
const borgCube = new THREE.Mesh(borgGeometry, borgMaterial);
scene.add(borgCube);

borgCube.position.z = 290;
borgCube.position.y = 5;
borgCube.position.x = -5


 

function animate() {
  requestAnimationFrame( animate );
  renderer.render(scene, camera);


  // controls.update();
  mercury.rotateY(0.0004)
  venus.rotateY(0.0002)
  earth.rotateY(0.004);
  mars.rotateY(0.004)
  moon.rotateY(0.04);
  jupiter.rotateY(0.009)
  saturn.rotateY(0.009)
  uranus.rotateY(0.007);
  neptune.rotateY(0.007);
  moonObject.rotateY(-0.008);
}
animate()

function moveCamera() {

  const t = document.body.getBoundingClientRect().top;
 

  camera.position.z = t * -0.01;
  camera.position.x = t * -0.0002;
  camera.position.y = t * -0.0002;

  

}


document.body.onscroll = moveCamera;

$(window).on("load resize scroll", function() {
  $(".bg-static").each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop + 300;
      $(this)
        .find(".bg-move")
        .css({ left: leftPosition });
  });
});
