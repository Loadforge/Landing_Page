import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeScene = () => {
  const canvasRef = useRef(null);
  const modelRef = useRef<THREE.Object3D | null>(null); 

  useEffect(() => {
    const scene = new THREE.Scene();

    const aspectRatio = 1;
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    camera.position.set(0, 2, 5);

    if (!canvasRef.current) {
      console.error('Canvas element is not available.');
      return;
    }
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true, alpha: true });
    renderer.setSize(500, 500);
    renderer.setClearColor(0x000000, 0);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const loader = new GLTFLoader();
    loader.load('./anvil_-_bigorna (1).glb', (gltf) => {
      const model = gltf.scene;
      model.scale.set(4, 4, 4);
      model.position.set(0, 0, 0);
      scene.add(model);
      modelRef.current = model;
    }, undefined, (error) => {
      console.error('Error loading GLB model:', error);
    });

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enableZoom = false;

    const animate = () => {
      requestAnimationFrame(animate);

      
      if (modelRef.current) {
        modelRef.current.rotation.y -= 0.01; 
      }

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ maxWidth: '500px', maxHeight: '500px', width: '100%', height: '100%' }} />;
};

export default ThreeScene;
