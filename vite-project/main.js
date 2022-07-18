import './style.css'
import * as THREE from 'three'
import {MapControls, OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import { Vector3 } from 'three';
'use strict';

const scene  = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(65, window.innerWidth/window.innerHeight,0.1,11000);

const renderer = new THREE.WebGLRenderer({
 canvas: document.querySelector('#bg'),
});

let skybox1, skybox2, skybox3, skybox4, skybox5;
let previous; //глобальная переменная (без типа), которая хранит в себе ПОСЛЕДНЮЮ созданную сцену

renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.set(-450, 30, -700)

function init() {
    SceneFirst();
    setAmbientLight();
}

function SceneFirst() {
  scene.remove(previous);
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'arid2_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'arid2_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'arid2_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'arid2_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'arid2_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'arid2_lf.jpg');
  
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
   
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox1 = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add(skybox1);
  previous = skybox1; //последняя созданная сцена принимает значение скайбокс1
}

function SceneSecond() {
  scene.remove(previous);
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'divine_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'divine_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'divine_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'divine_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'divine_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'divine_lf.jpg');
  
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
   
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox2 = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add(skybox2);
  previous = skybox2;
}

function SceneThird() {
  scene.remove(previous);
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'bay_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'bay_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'bay_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'bay_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'bay_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'bay_lf.jpg');
  
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
   
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox3 = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add(skybox3);
  previous = skybox3;
}

function SceneFourth() {
  scene.remove(previous);
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'meadow_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'meadow_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'meadow_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'meadow_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'meadow_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'meadow_lf.jpg');
  
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
   
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox4 = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add(skybox4);
  previous = skybox4;
}

function SceneFifth() {
  scene.remove(previous);
  let materialArray = [];
  let texture_ft = new THREE.TextureLoader().load( 'humble_ft.jpg');
  let texture_bk = new THREE.TextureLoader().load( 'humble_bk.jpg');
  let texture_up = new THREE.TextureLoader().load( 'humble_up.jpg');
  let texture_dn = new THREE.TextureLoader().load( 'humble_dn.jpg');
  let texture_rt = new THREE.TextureLoader().load( 'humble_rt.jpg');
  let texture_lf = new THREE.TextureLoader().load( 'humble_lf.jpg');
  
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_ft }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_bk }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_up }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_dn }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_rt }));
  materialArray.push(new THREE.MeshBasicMaterial( { map: texture_lf }));
   
  for (let i = 0; i < 6; i++)
    materialArray[i].side = THREE.BackSide;
   
  let skyboxGeo = new THREE.BoxGeometry( 10000, 10000, 10000);
  skybox5 = new THREE.Mesh( skyboxGeo, materialArray );
  scene.add(skybox5);
  previous = skybox5;
}

function setAmbientLight() {
    const ambientLight = new THREE.AmbientLight();
    scene.add(ambientLight);
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init(); 
animate();

let controls = new OrbitControls(camera, renderer.domElement);

controls.maxDistance = 1000;
controls.minDistance = 500;
controls.zoomSpeed = 2.2; //скорость
controls.rotateSpeed = 0.5; //вращение
controls.enablePan = false; //

document.addEventListener('keydown', (event) => {
  var name = event.key;
  if (name == '1') {
    SceneFirst();
    
  }
  else if (name == '2') {
    SceneSecond();
    
  }
  else if (name == '3') {
    SceneThird();
    
  }
  else if (name == '4') {
    SceneFourth();
    
  }
  else if (name == '5') {
    SceneFifth();
    
  }
}, false);