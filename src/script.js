import * as THREE from 'three'
import gsap from 'gsap'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Axes helper, ejes de coordenadas de ayuda
const axesHelper = new THREE.AxesHelper(2)
scene.add(axesHelper)

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
  wireframe: true,
})
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// Sizes
const sizes = {
  width: 800,
  height: 600,
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(sizes.width, sizes.height)
// renderer.render(scene, camera)

// Animations

// let time = Date.now()

// const clock = new THREE.Clock()

gsap.to(mesh.position, {
  duration: 1,
  delay: 1,
  x: 2,
})

gsap.to(mesh.position, {
  duration: 1,
  delay: 2,
  x: 0,
})

const tick = () => {
  // console.log('tick')

  // para que la animacion se ejecute a la misma velocidad en cualquier ordenador
  //   const currentTime = Date.now()
  //   const deltaTime = currentTime - time
  //   time = currentTime

  // console.log(deltaTime)

  //   const elapsedTime = clock.getElapsedTime()

  //   console.log(elapsedTime)

  /* Actualizar los objetos */

  //   mesh.rotation.y += 0.002 * deltaTime // para eso multiplicamos por el deltaTime
  //   mesh.rotation.y = elapsedTime * 1
  //   mesh.rotation.y = elapsedTime * (Math.PI * 2) // para que de una vuelta completa por segundo

  //   mesh.position.y = elapsedTime
  //   mesh.position.x = elapsedTime

  //   camera.position.x = Math.sin(elapsedTime)
  //   camera.position.y = Math.cos(elapsedTime)

  //   camera.lookAt(mesh.position)

  //   mesh.rotation.x += 0.01
  //   mesh.rotation.z += 0.01

  //   mesh.scale.x += 0.01
  //   mesh.scale.x += -0.01

  /* Renderizar la escena y la camara */

  renderer.render(scene, camera)

  /* llamar a tick de nuevo en el siguiente frame */
  window.requestAnimationFrame(tick)
}

tick()
