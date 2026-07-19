import { defineConfig, devices } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'Brave',
      use: {
        ...devices['Desktop Chrome'],
        channel: 'chromium',
        executablePath: 'C:\Program Files\BraveSoftware\Brave-Browser\Application\brave.exe',
        //viewport: null,
        launchOptions: {
          args: ['--start-maximized']
        },
        headless: false,
        ignoreDefaultArgs: ['--enable-automation'],
      },
    },
  ],
});

