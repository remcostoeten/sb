export interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  key: string;
}

export interface RateLimitLog {
  id: string;
  key: string;
  ip_address: string;
  user_agent: string;
  timestamp: string;
  attempt_count: number;
  is_blocked: boolean;
  location?: {
    country?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
  };
  device_info?: {
    browser?: string;
    os?: string;
    device_type?: string;
  };
  time_between_attempts?: number;
  provider?: string;
}

export interface RateLimitService {
  checkLimit(key: string): Promise<boolean>;
  increment(key: string): Promise<void>;
  reset(key: string): Promise<void>;
}