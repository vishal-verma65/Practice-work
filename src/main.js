import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'

//canvas 
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//**  Loaders */

//Texture Loader
const textureLoader = new THREE.TextureLoader()

//Draco Loader
const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('draco/')

//GLTF loader
const gltfLoader = new GLTFLoader()
gltfLoader.setDRACOLoader(dracoLoader)

//* textures */
const bakedTexture = textureLoader.load('portal/baked.jpg')
bakedTexture.flipY = false
bakedTexture.encoding = THREE.sRGBEncoding


//* Objects */

//* Materials */
const bakedMaterial =new THREE.MeshBasicMaterial({
  map: bakedTexture
})

// *Model */
gltfLoader.load(
  'portal/portal.glb',
  (gltf) => 
    {
      gltf.scene.traverse((child) =>{
        child.material = bakedMaterial
      })
    scene.add(gltf.scene)
    // console.log(gltf)
  }
)


//* Lights */
//ambient light 
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

//* Sizes */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

window.addEventListener('resize', ()=>{

  //update sizes
  sizes.width = window.innerWidth,
  sizes.height = window.innerHeight

  //update camera 
  camera.aspect = sizes.width / sizes.height
  camera.updateProjectionMatrix()

  //update renderer
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

})

//* Camera */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 4
scene.add(camera)

//controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
controls.dampingFactor = 0.1

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas : canvas,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding
// renderer.setClearColor('#262837')

//* animation loop */
const tick = ()=>{
  //update controls
  controls.update()

  //render
  renderer.render(scene, camera)

  //call tick function again on the next frame
  window.requestAnimationFrame(tick)
}
tick()