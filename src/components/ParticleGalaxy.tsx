import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectIntensity } from '../types/portfolio';

interface ParticleGalaxyProps {
  intensity: EffectIntensity;
  reducedMotion: boolean;
}

export const ParticleGalaxy: React.FC<ParticleGalaxyProps> = ({ intensity, reducedMotion }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameId = useRef<number | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    if (intensity === 'off' || !containerRef.current) {
      return;
    }

    const container = containerRef.current;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene & Camera
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050508, 0.0018);

    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 250;

    // Renderer
    const isHeadless = navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: intensity === 'high',
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(isHeadless ? 1 : Math.min(window.devicePixelRatio, 1.75));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Particle count according to settings
    const particleCount =
      intensity === 'high' ? 2400 : intensity === 'medium' ? 1200 : 450;

    // Procedural Particle Texture Generator (radial soft purple glow dot)
    const createParticleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.2, 'rgba(216, 180, 254, 0.9)'); // lavender
        gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.5)'); // electric purple
        gradient.addColorStop(1, 'rgba(126, 34, 206, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      texture.colorSpace = THREE.SRGBColorSpace;
      return texture;
    };

    const particleTexture = createParticleTexture();

    // 1. Galaxy Core & Spiral Star Field Geometry
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorCore = new THREE.Color(0xd8b4fe); // lavender
    const colorMid = new THREE.Color(0xa855f7); // electric purple
    const colorOuter = new THREE.Color(0x6366f1); // deep indigo/violet
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Cylindrical/spherical cosmic distribution with spiral arms
      const radius = Math.pow(Math.random(), 1.6) * 350;
      const spinAngle = radius * 0.008;
      const branchAngle = ((i % 3) * (2 * Math.PI)) / 3;

      const randomX = (Math.random() - 0.5) * 45;
      const randomY = (Math.random() - 0.5) * 55;
      const randomZ = (Math.random() - 0.5) * 45;

      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = (Math.random() - 0.5) * 110 + randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

      // Color gradation from core to arm edges
      const ratio = radius / 350;
      let particleColor = new THREE.Color();
      if (Math.random() > 0.85) {
        particleColor.copy(colorWhite);
      } else if (ratio < 0.3) {
        particleColor.lerpColors(colorWhite, colorCore, ratio / 0.3);
      } else if (ratio < 0.7) {
        particleColor.lerpColors(colorCore, colorMid, (ratio - 0.3) / 0.4);
      } else {
        particleColor.lerpColors(colorMid, colorOuter, (ratio - 0.7) / 0.3);
      }

      colors[i3] = particleColor.r;
      colors[i3 + 1] = particleColor.g;
      colors[i3 + 2] = particleColor.b;

      scales[i] = Math.random() * 1.5 + 0.8;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 4.8,
      map: particleTexture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      vertexColors: true,
      opacity: 0.85,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // 2. Cosmic Torus Ring (Subtle Celestial Orbit around APS Brand Axis)
    const ringGeometry = new THREE.TorusGeometry(120, 0.45, 16, 120);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const orbitRing = new THREE.Mesh(ringGeometry, ringMaterial);
    orbitRing.rotation.x = Math.PI / 3;
    orbitRing.rotation.y = Math.PI / 6;
    scene.add(orbitRing);

    // 3. Ambient Star Dust (Deep background slow drift)
    const dustCount = intensity === 'high' ? 400 : 200;
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount * 3; i += 3) {
      dustPositions[i] = (Math.random() - 0.5) * 800;
      dustPositions[i + 1] = (Math.random() - 0.5) * 800;
      dustPositions[i + 2] = (Math.random() - 0.5) * 600;
    }
    const dustGeometry = new THREE.BufferGeometry();
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({
      size: 2.2,
      color: 0x9333ea,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const starDust = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(starDust);

    // Mouse movement interaction handler
    const handlePointerMove = (e: MouseEvent) => {
      if (reducedMotion) return;
      const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
      const normalizedY = -(e.clientY / window.innerHeight) * 2 + 1;
      mouseRef.current.targetX = normalizedX * 25;
      mouseRef.current.targetY = normalizedY * 20;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Window resize handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Clock for smooth frame-rate independent rotation
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const speedMultiplier = reducedMotion ? 0.2 : 1;

      // Gentle continuous rotation
      particles.rotation.y += 0.08 * delta * speedMultiplier;
      particles.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.05;

      orbitRing.rotation.z += 0.12 * delta * speedMultiplier;
      starDust.rotation.y -= 0.03 * delta * speedMultiplier;

      // Pointer parallax spring damping
      if (!reducedMotion) {
        mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
        mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;
        camera.position.x = mouseRef.current.x;
        camera.position.y = mouseRef.current.y;
        camera.lookAt(scene.position);
      }

      renderer.render(scene, camera);
      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    // Cleanup on unmount or settings change
    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('resize', handleResize);
      if (animFrameId.current) {
        cancelAnimationFrame(animFrameId.current);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [intensity, reducedMotion]);

  if (intensity === 'off') {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-90 transition-opacity duration-1000"
      aria-hidden="true"
    />
  );
};
