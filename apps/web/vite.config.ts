export default {
  plugins: [
    (await import('@vitejs/plugin-react')).default(),
  ],
  server: {
    port: 5173,
    host: '0.0.0.0'
  }
};
