module.exports = {
  server: {
    command: 'http-server -p 8080',
  },
  launch: {
    headless: false,
    timeout: 30000,
  },
  preset: 'jest-puppeteer',
};
