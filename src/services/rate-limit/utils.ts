export const getDeviceInfo = () => {
  const ua = navigator.userAgent;
  const browser = getBrowser(ua);
  const os = getOS(ua);
  const deviceType = getDeviceType(ua);

  return { browser, os, device_type: deviceType };
};

export const getBrowser = (ua: string) => {
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  return 'Unknown';
};

export const getOS = (ua: string) => {
  if (ua.includes('Windows')) return 'Windows';
  if (ua.includes('Mac')) return 'MacOS';
  if (ua.includes('Linux')) return 'Linux';
  if (ua.includes('Android')) return 'Android';
  if (ua.includes('iOS')) return 'iOS';
  return 'Unknown';
};

export const getDeviceType = (ua: string) => {
  if (ua.includes('Mobile')) return 'mobile';
  if (ua.includes('Tablet')) return 'tablet';
  return 'desktop';
};

export const getLocationInfo = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();
    
    return {
      country: data.country_name,
      city: data.city,
      latitude: data.latitude,
      longitude: data.longitude
    };
  } catch {
    return {};
  }
};