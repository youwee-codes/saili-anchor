"use client";

import React, { useEffect, useRef } from "react";

interface AntigravityCanvasProps {
  className?: string;
  opacity?: number;
}

export default function AntigravityCanvas({
  className = "",
  opacity = 0.6,
}: AntigravityCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes for subtle institutional 3D mesh
    const nodeCount = Math.min(Math.floor((width * height) / 18000), 75);
    const nodes: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      radius: number;
    }> = [];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 200 + 50,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        vz: (Math.random() - 0.5) * 0.1,
        radius: Math.random() * 1.5 + 1.0,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("resize", handleResize);

    const render = () => {
      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connective geometry with Walton primary blue #0D6199
      const maxDistance = 140;

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Motion physics
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        // Bounce boundaries
        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        if (node.z < 50 || node.z > 250) node.vz *= -1;

        // Subtle mouse influence (Antigravity repulsion)
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 180) {
          const force = (1 - distToMouse / 180) * 0.4;
          node.x -= (dx / distToMouse) * force * 2;
          node.y -= (dy / distToMouse) * force * 2;
        }

        // Perspective projection
        const scale = 200 / node.z;
        const alpha = Math.min(Math.max((node.z - 50) / 200, 0.15), 0.7);

        // Render point
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(13, 97, 153, ${alpha * 0.5})`;
        ctx.fill();

        // Connect nearby nodes with institutional fine lines
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const distNodes = Math.hypot(node.x - other.x, node.y - other.y);

          if (distNodes < maxDistance) {
            const lineAlpha = (1 - distNodes / maxDistance) * 0.12 * alpha;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(13, 97, 153, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className={`pointer-events-none fixed inset-0 z-0 ${className}`}
    />
  );
}
