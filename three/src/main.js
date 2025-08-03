
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

//scene
const scene = new THREE.Scene();
//camera
const camera = new THREE.PerspectiveCamera(
  35, 
  window.innerWidth / window.innerHeight,
  0.1,
  200
);
//renderer
const canvas = document.querySelector('canvas.threejs');
const renderer = new THREE.WebGLRenderer({canvas:canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//mesh


