import { createClient } from '@supabase/supabase-js';
import { RateLimitConfig, RateLimitLog } from './types';
import { getBrowserInfo, getDeviceInfo, getLocationInfo } from './utils';

export class RateLimitService {
  private supabase;
  private config: RateLimitConfig;

  constructor(config: RateLimitConfig) {
    this.supabase = createClient(
      import.meta.env.VITE_SUPABASE_URL,
      import.meta.env.VITE_SUPABASE_ANON_KEY
    );
    this.config = config;
  }

  async checkLimit(key: string): Promise<boolean> {
    const { data: attempts } = await this.supabase
      .from('rate_limit_logs')
      .select('timestamp')
      .eq('key', key)
      .gte('timestamp', new Date(Date.now() - this.config.windowMs).toISOString())
      .order('timestamp', { ascending: false });

    return (attempts?.length || 0) >= this.config.maxAttempts;
  }

  async logAttempt(key: string, isBlocked: boolean): Promise<void> {
    const { data: previousAttempt } = await this.supabase
      .from('rate_limit_logs')
      .select('timestamp')
      .eq('key', key)
      .order('timestamp', { ascending: false })
      .limit(1)
      .single();

    const timeBetweenAttempts = previousAttempt
      ? Date.now() - new Date(previousAttempt.timestamp).getTime()
      : null;

    const log: Partial<RateLimitLog> = {
      key,
      ip_address: await this.getIpAddress(),
      user_agent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      is_blocked: isBlocked,
      device_info: getDeviceInfo(),
      location: await getLocationInfo(),
      time_between_attempts: timeBetweenAttempts,
      provider: new URL(window.location.href).hostname
    };

    await this.supabase.from('rate_limit_logs').insert([log]);
  }

  private async getIpAddress(): Promise<string> {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return 'unknown';
    }
  }
}