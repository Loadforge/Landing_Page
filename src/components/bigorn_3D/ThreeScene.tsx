import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const modelRef = useRef<THREE.Object3D | null>(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let scene: THREE.Scene | null = null;
    let camera: THREE.PerspectiveCamera | null = null;
    let controls: OrbitControls | null = null;
    let frameId: number | null = null;
    let inited = false;

    const init = () => {
      if (inited || !canvasRef.current || !containerRef.current) return;
      inited = true;

      scene = new THREE.Scene();

      const width = containerRef.current.clientWidth || 500;
      const height = containerRef.current.clientHeight || 500;
      camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
      camera.position.set(0, 2, 4);

      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: false,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setSize(width, height, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setClearColor(0x000000, 0);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      scene.add(ambientLight);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load(
        './anvil_-_bigorna (1).glb',
        (gltf) => {
          if (!scene) return;
          const model = gltf.scene;
          model.scale.set(4, 4, 4);
          model.position.set(0, 0, 0);
          scene.add(model);
          modelRef.current = model;
          setLoading(false);
        },
        undefined,
        (error) => {
          console.error('Error loading GLB model:', error);
          setLoading(false);
        }
      );

      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.enableZoom = false;

      const onResize = () => {
        if (!renderer || !camera || !containerRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      };
      window.addEventListener('resize', onResize);

      const animate = () => {
        frameId = window.requestAnimationFrame(animate);
        if (modelRef.current) {
          modelRef.current.rotation.y -= 0.005;
        }
        controls?.update();
        if (renderer && scene && camera) renderer.render(scene, camera);
      };
      animate();

      // Cleanup on unmount
      return () => {
        window.removeEventListener('resize', onResize);
      };
    };

    // Defer initialization until visible to the user
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            init();
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      if (frameId) cancelAnimationFrame(frameId);
      if (controls) controls.dispose();
      if (renderer) {
        renderer.dispose();
      }
      if (scene) {
        scene.traverse((obj: any) => {
          if (obj.isMesh) {
            obj.geometry?.dispose?.();
            if (obj.material?.dispose) obj.material.dispose();
          }
        });
      }
      modelRef.current = null;
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full">
      {loading && (
       <img
       src="/Component 5.svg"
       alt="Carregando modelo 3D"
       className="absolute inset-0 w-full h-full object-contain z-10"
     />
     
      )}
      <canvas
        ref={canvasRef}
        style={{ width: '100%', height: '100%' }}
        className={loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}
      />
    </div>
  );
};

export default ThreeScene;
