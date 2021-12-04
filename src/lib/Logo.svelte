<svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo">
  <path d="M50 15L80.3109 32.5V67.5L50 85L19.6891 67.5V32.5L50 15Z" class="logo-body" />
  <path
    d="M20.6891 33.0774L50 16.1547L79.3109 33.0774V66.9226L50 83.8453L20.6891 66.9226V33.0774Z"
    stroke-width="3"
    class="logo-pulse"
  />
</svg>

<style>
  .logo {
    width: 1.75em;
    height: 1.75em;
  }

  .logo-body {
    fill: var(--color-brand);
  }

  .logo-pulse {
    transform-origin: center;
    stroke: var(--color-brand);
    animation: pulse 1s infinite;
  }

  @media (prefers-reduced-motion) {
    .logo-pulse {
      animation: none;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    100% {
      opacity: 0;
      transform: scale(1.5);
    }
  }
</style>
