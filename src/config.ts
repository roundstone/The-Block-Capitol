const config = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Eden Props", 
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000", // Default fallback URL
  secretKey: process.env.NEXT_PUBLIC_SECRET_KEY || "default-api-key", // Default fallback API key
  environment: process.env.NODE_ENV || "development", // Default to development
  debugMode: process.env.NEXT_PUBLIC_DEBUG_MODE === "true", // Convert to boolean
  maxRetries: parseInt(process.env.NEXT_PUBLIC_MAX_RETRIES || "3", 10), // Convert to number
  featureFlags: {
    enableNewFeature: process.env.NEXT_PUBLIC_ENABLE_NEW_FEATURE === "true", // Convert to boolean
  },
};

export default config;