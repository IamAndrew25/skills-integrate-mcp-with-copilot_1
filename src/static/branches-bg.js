// Animated Git-style branch lines background
(function() {
  const canvas = document.getElementById('bg-branches');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }
  window.addEventListener('resize', resize);

  // Branch line objects
  const branches = [];
  const branchColor = '#32CD32';
  const branchCount = 7;
  for (let i = 0; i < branchCount; i++) {
    branches.push({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.2 + Math.random() * 0.3,
      length: 120 + Math.random() * 180,
      angle: Math.PI / 4 + Math.random() * Math.PI / 2,
      offset: Math.random() * 1000
    });
  }

  function drawBranches(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.save();
    ctx.globalAlpha = 0.18;
    ctx.lineWidth = 3;
    ctx.strokeStyle = branchColor;
    branches.forEach(branch => {
      // Animate y position with a slow sine wave
      const wave = Math.sin((time / 2000) + branch.offset) * 18;
      const startX = branch.x;
      const startY = (branch.y + wave) % height;
      const endX = startX + Math.cos(branch.angle) * branch.length;
      const endY = startY + Math.sin(branch.angle) * branch.length;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
      // Move branch slowly to the right
      branch.x += branch.speed;
      if (branch.x > width + 50) branch.x = -50;
    });
    ctx.restore();
  }

  function animate(time) {
    drawBranches(time);
    requestAnimationFrame(animate);
  }
  animate(0);
})();
