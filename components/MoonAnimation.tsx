'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const MoonAnimation = () => {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    if (!canvas.current) return;
    const renderer = new THREE.WebGLRenderer({ canvas: canvas.current, antialias: true, alpha: true });
    renderer.setSize(200, 200);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setClearColor(0x000000, 0);

    const camera = new THREE.PerspectiveCamera(50, 1);
    camera.position.set(-8, 0, 18);
    const loader = new GLTFLoader();

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 2);
    scene.add(light);

    loader.load(
      '/dear_mum_and_dad_i_have_made_it_to_the_moon.../scene.gltf',
      (gltf: { scene: THREE.Object3D<THREE.Event> }) => {
        scene.add(gltf.scene);
        renderer.render(scene, camera);

        const animate = () => {
          requestAnimationFrame(animate);
          gltf.scene.rotation.x += 0.005;
          renderer.render(scene, camera);
        };
        animate();
      },
    );
  }, []);

  return <canvas ref={canvas} width={200} height={200} />;
};

export default MoonAnimation;
