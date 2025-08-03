import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'
import * as dat from 'dat.gui'

//debug
const gui = new dat.GUI()

//canvas
const canvas = document.querySelector('canvas.webgl')

//scene
const scene = new THREE.Scene()

//fog
const fog = new THREE.Fog('#262837', 1, 15)
scene.fog = fog

//texture
const textureLoader = new THREE.TextureLoader()
const doorColorTexture = textureLoader.load('/doorTexture/Wood_Pattern_001_basecolor.jpg')
const doorAmbientOcclusionTexture = textureLoader.load('/doorTexture/Wood_Pattern_001_ambientOcclusion.jpg')
const doorHeightTexture = textureLoader.load('/doorTexture/Wood_Pattern_001_height.png')
const doorNormalTexture = textureLoader.load('/doorTexture/Wood_Pattern_001_normal.jpg')
const doorMetalnessTexture = textureLoader.load('/doorTexture/Wood_Pattern_001_metallic.jpg')
const doorRoughnessTexture =textureLoader.load('/doorTexture/Wood_Pattern_001_roughness.jpg')

const brickColorTexture = textureLoader.load('/wallTexture/Poliigon_BrickWallReclaimed_8320_BaseColor.jpg')
const brickDisplacementTexture = textureLoader.load('/wallTexture/Poliigon_BrickWallReclaimed_8320_Displacement.tiff')
const brickNormalTexture = textureLoader.load('/wallTexture/Poliigon_BrickWallReclaimed_8320_Normal.png')
const brickMetalnessTexture = textureLoader.load('/wallTexture/Poliigon_BrickWallReclaimed_8320_Metallic.jpg')
const brickRoughnessTexture =textureLoader.load('/wallTexture/Poliigon_BrickWallReclaimed_8320_Roughness.jpg')

const grassColorTexture = textureLoader.load('/grassTexture/Poliigon_GrassPatchyGround_4585_BaseColor.jpg')
const grassDisplacementTexture = textureLoader.load('/grassTexture/Poliigon_GrassPatchyGround_4585_Displacement.tiff')
const grassNormalTexture = textureLoader.load('/grassTexture/Poliigon_GrassPatchyGround_4585_Normal.png')
const grassMetalnessTexture = textureLoader.load('/grassTexture/Poliigon_GrassPatchyGround_4585_Metallic.jpg')
const grassRoughnessTexture =textureLoader.load('/grassTexture/Poliigon_GrassPatchyGround_4585_Roughness.jpg')

//for textures to repeat
grassColorTexture.repeat.set(8, 8)
grassDisplacementTexture.repeat.set(8, 8)
grassNormalTexture.repeat.set(8, 8)
grassMetalnessTexture.repeat.set(8, 8)
grassRoughnessTexture.repeat.set(8, 8)

grassColorTexture.wrapS = THREE.RepeatWrapping
grassDisplacementTexture.wrapS = THREE.RepeatWrapping
grassNormalTexture.wrapS = THREE.RepeatWrapping
grassMetalnessTexture.wrapS = THREE.RepeatWrapping
grassRoughnessTexture.wrapS = THREE.RepeatWrapping

grassColorTexture.wrapT = THREE.RepeatWrapping
grassDisplacementTexture.wrapT = THREE.RepeatWrapping
grassNormalTexture.wrapT = THREE.RepeatWrapping
grassMetalnessTexture.wrapT = THREE.RepeatWrapping
grassRoughnessTexture.wrapT = THREE.RepeatWrapping


//house group
const house = new THREE.Group()
scene.add(house)

//walls
const walls = new THREE.Mesh(
  new THREE.BoxGeometry(4, 2.5, 4),
  new THREE.MeshStandardMaterial({
    map: brickColorTexture,
    displacementMap: brickDisplacementTexture,
    displacementScale: 0.1,
    normalMap: brickNormalTexture,
    metalnessMap: brickMetalnessTexture,
    roughnessMap: brickRoughnessTexture
  })
)
walls.position.y = 2.5 / 2
house.add(walls)

//roof
const roof = new THREE.Mesh(
  new THREE.ConeGeometry(3.5, 1, 4),
  new THREE.MeshStandardMaterial({
    color: '#b35f45'
  })
)
roof.position.y = 2.5 + (1 / 2)
roof.rotation.y = Math.PI * 0.25   //or Math.PI / 4
house.add(roof)

//door 
const door = new THREE.Mesh(
  new THREE.PlaneGeometry(2, 2, 100, 100),
  new THREE.MeshStandardMaterial({
    map: doorColorTexture,
    aoMap: doorAmbientOcclusionTexture,
    displacementMap: doorHeightTexture,
    displacementScale: 0.1,
    normalMap: doorNormalTexture,
    metalnessMap: doorMetalnessTexture,
    roughnessMap: doorRoughnessTexture
    
  })
)
door.geometry.setAttribute(
  'uv2',
  new THREE.Float32BufferAttribute(door.geometry.attributes.uv.array, 2)
)
door.position.z = 2 + 0.0001 //to avoid z-fighting
door.position.y = 2 / 2
house.add(door)

//bushes
const bushGeometry = new THREE.SphereGeometry(1, 16, 16)
const bushMaterial = new THREE.MeshStandardMaterial({
  color: '#89c854'
})

const bush1 = new THREE.Mesh(bushGeometry, bushMaterial)
bush1.scale.set(0.5, 0.5, 0.5)
bush1.position.set(0.8, 0.2, 2.2)

const bush2 = new THREE.Mesh(bushGeometry, bushMaterial)
bush2.scale.set(0.25, 0.25, 0.25)
bush2.position.set(1.4, 0.1, 2.1)

const bush3 = new THREE.Mesh(bushGeometry, bushMaterial)
bush3.scale.set(0.4, 0.4, 0.4)
bush3.position.set(-0.8, 0.1, 2.2)

const bush4 = new THREE.Mesh(bushGeometry, bushMaterial)
bush4.scale.set(0.15, 0.15, 0.15)
bush4.position.set(-1, 0.05, 2.6)

house.add(bush1, bush2, bush3, bush4)

//graves
const graves = new THREE.Group()
scene.add(graves)

const graveGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.2)
const graveMaterial = new THREE.MeshStandardMaterial({
  color: '#b2b6b1'
})

for(let i=0; i < 50; i++){
  const angle = Math.random() * Math.PI * 2
  const radius = 3 + Math.random() * 6
  const x = Math.sin(angle) * radius
  const z = Math.cos(angle) * radius

  const grave = new THREE.Mesh(graveGeometry, graveMaterial)
  grave.position.set(x, 0.3, z)
  grave.rotation.y = (Math.random() - 0.5) * 0.4
  grave.rotation.z = (Math.random() - 0.5) * 0.4

  //shadow
  grave.castShadow = true

  graves.add(grave)
}

//floor
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(20, 20),
  new THREE.MeshStandardMaterial({
    map: grassColorTexture,
    displacementMap: grassDisplacementTexture,
    displacementScale: 0.1,
    normalMap: grassNormalTexture,
    metalnessMap: grassMetalnessTexture,
    roughnessMap: grassRoughnessTexture
  })
)
floor.rotation.x = -Math.PI * 0.5
floor.position.y = 0
scene.add(floor)

//light 
//ambient light 
const ambientLight = new THREE.AmbientLight('#b9d5ff', 0.12)
gui.add(ambientLight, 'intensity').min(0).max(1).step(0.001)
scene.add(ambientLight)

//directional light 
const moonLight = new THREE.DirectionalLight('#b9d5ff', 0.12)
moonLight.position.set(4, 5, -2)
gui.add(moonLight, 'intensity').min(0).max(1).step(0.001)
gui.add(moonLight.position, 'x').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'y').min(-5).max(5).step(0.001)
gui.add(moonLight.position, 'z').min(-5).max(5).step(0.001)
scene.add(moonLight)

//door light
const doorLight = new THREE.PointLight('#ff7d46', 5, 7) //changed 1 to 5 for better visibility
doorLight.position.set(0, 2.2, 2.7)
house.add(doorLight)

//ghosts
const ghost1 = new THREE.PointLight('#ff00ff', 2, 3)
const ghost2 = new THREE.PointLight('#00ffff', 2, 3)
const ghost3 = new THREE.PointLight('#ffff00', 2, 3)
scene.add(ghost1, ghost2, ghost3)

//sizes
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

//camera

//base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 4
camera.position.y = 2
camera.position.z = 4
scene.add(camera)

//controls
const Controls = new OrbitControls(camera, canvas,)
Controls.enableDamping = true //smooth controls
Controls.dampingFactor = 0.1

//renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.setClearColor('#262837')

//shadows
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFSoftShadowMap

moonLight.castShadow = true
doorLight.castShadow = true

ghost1.castShadow = true
ghost2.castShadow = true
ghost3.castShadow = true
walls.castShadow = true

bush1.castShadow = true
bush2.castShadow = true
bush3.castShadow = true
bush4.castShadow = true

walls.receiveShadow = true
floor.receiveShadow = true

doorLight.shadow.mapSize.width = 256
doorLight.shadow.mapSize.height = 256
doorLight.shadow.camera.far = 7

ghost1.shadow.mapSize.width = 256
ghost1.shadow.mapSize.height = 256
ghost1.shadow.camera.far = 7

ghost2.shadow.mapSize.width = 256
ghost2.shadow.mapSize.height = 256
ghost2.shadow.camera.far = 7

ghost3.shadow.mapSize.width = 256
ghost3.shadow.mapSize.height = 256
ghost3.shadow.camera.far = 7

//animate
const clock = new THREE.Clock()
const tick = ()=>{
  const elapsedTime = clock.getElapsedTime()

  //ghosts animation
  const ghost1Angle = elapsedTime * 0.5
  ghost1.position.x = Math.cos(ghost1Angle) * 4
  ghost1.position.z = Math.sin(ghost1Angle) * 4
  ghost1.position.y = Math.sin(elapsedTime  * 3)

  const ghost2Angle = - elapsedTime * 0.32
  ghost2.position.x = Math.cos(ghost2Angle) * 5
  ghost2.position.z = Math.sin(ghost2Angle) * 5
  ghost2.position.y = Math.sin(elapsedTime  * 4) + Math.sin(elapsedTime * 2.5)

  const ghost3Angle = - elapsedTime * 0.18
  ghost3.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
  ghost3.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5))
  ghost3.position.y = Math.sin(elapsedTime  * 5) + Math.sin(elapsedTime * 2)

  //update controls
  Controls.update()

  //renderer
  renderer.render(scene, camera)

  //calling tick again on the next frame
  window.requestAnimationFrame(tick)
}

tick()