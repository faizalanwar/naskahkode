import { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import SceneInit from '../public/SceneInit.js'

const Model = () => {
  useEffect(() => {
    const test = new SceneInit('canvasId', 'canvasEl')
    test.initialize()
    test.animate()

    // test.scene.background = new THREE.Color(0xffffff);

    let loadedModel
    const glftLoader = new GLTFLoader()
    glftLoader.load('./static/images/naskahkode.gltf', (gltfScene) => {
      // glftLoader.load("./model/scene.gltf", (gltfScene) => {
      loadedModel = gltfScene
      gltfScene.scene.rotation.x = 45
      gltfScene.scene.rotation.y = 0
      gltfScene.scene.rotation.z = 0
      gltfScene.scene.scale.set(0.4, 0.4, 0.4)
      test.scene.add(gltfScene.scene)
    })
    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.x += 0.01
        loadedModel.scene.rotation.y += 0.01
        loadedModel.scene.rotation.z += 0.01
      }
      requestAnimationFrame(animate)
    }
    animate()
  }, [])
  return (
    <div id="canvasEl">
      <canvas id="canvasId"></canvas>
    </div>
  )
}

export default Model
