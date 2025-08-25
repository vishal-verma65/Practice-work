import * as THREE from "three";

const w = window.innerWidth;
const h = window.innerHeight;

const scene = new THREE.Scene();

const fov = 75;
const aspect = w / h;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);


const geometry = new THREE.BoxGeometry( 1, 1, 1);
const  material = new THREE.MeshBasicMaterial({ color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

function animate(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
