// components/ThreeScene.js
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
 
    const scene = new THREE.Scene();

  
    const aspectRatio = 1;
    
    
    const camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);

  
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setSize(300, 300); 
    renderer.setClearColor(0x000000, 0);


    camera.position.z = 2;

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    
    const animate = function () {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    animate();

   
    return () => {
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ maxWidth: '300px', maxHeight: '300px', width: '100%', height: '100%' }} />;
};

export default ThreeScene;
