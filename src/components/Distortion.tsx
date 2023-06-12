import React, { useEffect, useRef } from "react";
// import { extend, useFrame, useThree } from "@/react-three-fiber";
import { GUI } from "lil-gui";
import * as THREE from "three";
import fragment from "./shader/fragment.glsl";
import vertex from "./shader/vertex.glsl";
import { extend, useFrame, useThree } from "@react-three/fiber";

extend({ GUI });

const clamp = (number, min, max) => {
  return Math.max(min, Math.min(number, max));
};

const Sketch = () => {
  const { camera, size } = useThree();
  const containerRef = useRef<any>();
  const imgRef = useRef<any>();
  const materialRef = useRef<any>();
  const textureRef = useRef<any>();
  const dataTextureRef = useRef<any>();
  const mouse = useRef<any>({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    vX: 0,
    vY: 0,
  });
  const time = useRef(0);

  const getValue = (val: any) => {
    return parseFloat(containerRef.current.getAttribute(`data-${val}`));
  };

  const settings = {
    grid: getValue("grid") || 34,
    mouse: getValue("mouse") || 0.25,
    strength: getValue("strength") || 1,
    relaxation: getValue("relaxation") || 0.9,
  };

  const container = containerRef.current;

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  const regenerateGrid = () => {
    const width = settings.grid;
    const height = settings.grid;
    const size = width * height;
    const data = new Float32Array(3 * size);
    const color = new THREE.Color(0xffffff);

    const r = Math.floor(color.r * 255);
    const g = Math.floor(color.g * 255);
    const b = Math.floor(color.b * 255);

    for (let i = 0; i < size; i++) {
      let r = Math.random() * 255 - 125;
      let r1 = Math.random() * 255 - 125;

      const stride = i * 3;

      data[stride] = r;
      data[stride + 1] = r1;
      data[stride + 2] = r;
    }

    dataTextureRef.current.image.data = data;
    dataTextureRef.current.needsUpdate = true;
  };

  const updateDataTexture = () => {
    const data = dataTextureRef.current.image.data;
    const gridMouseX = settings.grid * mouse.current.x;
    const gridMouseY = settings.grid * (1 - mouse.current.y);
    const maxDist = settings.grid * settings.mouse;
    const aspect = size.height / size.width;

    for (let i = 0; i < settings.grid; i++) {
      for (let j = 0; j < settings.grid; j++) {
        const distance = (gridMouseX - i) ** 2 / aspect + (gridMouseY - j) ** 2;
        const maxDistSq = maxDist ** 2;

        if (distance < maxDistSq) {
          const index = 3 * (i + settings.grid * j);
          let power = maxDist / Math.sqrt(distance);
          power = clamp(power, 0, 10);

          data[index] += settings.strength * 100 * mouse.current.vX * power;
          data[index + 1] -= settings.strength * 100 * mouse.current.vY * power;
        }
      }
    }

    mouse.current.vX *= 0.9;
    mouse.current.vY *= 0.9;
    dataTextureRef.current.needsUpdate = true;
  };

  const render = () => {
    time.current += 0.05;
    updateDataTexture();
    materialRef.current.uniforms.time.value = time.current;
    renderer.render(sceneRef.current, camera);
  };

  useEffect(() => {
    renderer.setClearColor(0xeeeeee, 1);

    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    container.appendChild(renderer.domElement);

    const texture = new THREE.Texture(imgRef.current);
    texture.needsUpdate = true;

    const material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: true,
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector4() },
        uTexture: { value: texture },
        uDataTexture: { value: dataTextureRef.current },
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    });

    const geometry = new THREE.PlaneGeometry(1, 1, 1, 1);

    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    const mouseMoveHandler = (e: any) => {
      mouse.current.x = e.clientX / size.width;
      mouse.current.y = e.clientY / size.height;
      mouse.current.vX = mouse.current.x - mouse.current.prevX;
      mouse.current.vY = mouse.current.y - mouse.current.prevY;
      mouse.current.prevX = mouse.current.x;
      mouse.current.prevY = mouse.current.y;
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    const resizeHandler = () => {
      size.width = container.offsetWidth;
      size.height = container.offsetHeight;
      renderer.setSize(size.width, size.height);
      camera.aspect = size.width / size.height;

      const imageAspect = 1 / 1.5;
      let a1;
      let a2;

      if (size.height / size.width > imageAspect) {
        a1 = (size.width / size.height) * imageAspect;
        a2 = 1;
      } else {
        a1 = 1;
        a2 = size.height / size.width / imageAspect;
      }

      material.uniforms.resolution.value.x = size.width;
      material.uniforms.resolution.value.y = size.height;
      material.uniforms.resolution.value.z = a1;
      material.uniforms.resolution.value.w = a2;

      camera.updateProjectionMatrix();
      regenerateGrid();
    };

    window.addEventListener("resize", resizeHandler);

    return () => {
      container.removeChild(renderer.domElement);
      window.removeEventListener("mousemove", mouseMoveHandler);
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    regenerateGrid();
  }, [settings.grid]);

  useEffect(() => {
    render();
  }, [mouse]);

  return <div ref={containerRef} id="canvasContainer" />;
};
