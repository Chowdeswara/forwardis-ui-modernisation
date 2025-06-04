
export const APP_CONFIG = {
  app: {
    name: 'Logistics',
    version: '1.0.0',
    description: 'Professional Logistics Management Application',
  },
  api: {
    baseUrl: process.env.NODE_ENV === 'production' 
      ? 'https://api.logistics.com' 
      : 'http://localhost:3001',
    timeout: 10000,
    retryAttempts: 3,
  },
  ui: {
    debounceDelay: 300,
    animationDuration: 200,
    toastDuration: 3000,
    itemsPerPage: 10,
  },
  storage: {
    keys: {
      user: 'logistics_user',
      preferences: 'logistics_preferences',
      theme: 'logistics_theme',
    },
  },
} as const;

export const TRIP_STATUS = {
  RELEASED: 'released',
  UNDER_EXECUTION: 'under_execution',
  INITIATED: 'initiated',
  CANCELLED: 'cancelled',
  DELETED: 'deleted',
  CONFIRMED: 'confirmed',
} as const;

export const TRIP_BILLING_STATUS = {
  DRAFT_BILL_RAISED: 'draft_bill_raised',
  NOT_ELIGIBLE: 'not_eligible',
  REVENUE_LEAKAGE: 'revenue_leakage',
  INVOICE_CREATED: 'invoice_created',
  INVOICE_APPROVED: 'invoice_approved',
} as const;

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
  TRIP_EXECUTION: '/trip-execution',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
} as const;
