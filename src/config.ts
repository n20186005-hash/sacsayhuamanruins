/**
 * 站点级集中配置：域名、统计、POI 元数据。
 * 优先读取 CURRENT_SITE_DOMAIN 环境变量，回退到占位域名。
 */
export function resolveBaseUrl(): string {
  return (process.env.CURRENT_SITE_DOMAIN || 'https://www.sacsayhuamanruins.com').replace(/\/$/, '');
}

export const siteConfig = {
  name: 'Sacsayhuaman Ruins',
  gaId: 'G-HXM22WWPKP',
  rating: 4.7,
  reviewCount: 14200,
};

export const poi = {
  name: 'Sacsayhuaman',
  address: 'Cusco 08000, Peru',
  geo: { latitude: -13.5097, longitude: -71.9695 },
  openingHours: 'Mo-Su 07:00-18:00',
  mapsUrl: 'https://maps.app.goo.gl/bBdBGNwo6QqUcx7L8',
};
