import { MetadataRoute } from 'next';

function getSiteUrl(): string {
  const envUrl = (globalThis as any)?.process?.env?.NEXT_PUBLIC_SITE_URL?.trim();
  if (envUrl) {
    try {
      const u = new URL(envUrl);
      return u.origin;
    } catch {
      // ignore parse error and continue to next fallback
    }
  }

  const vercelUrl = (globalThis as any)?.process?.env?.VERCEL_URL?.trim();
  if (vercelUrl) {
    try {
      const u = new URL(vercelUrl.startsWith('http') ? vercelUrl : `https://${vercelUrl}`);
      return u.origin;
    } catch {
      // ignore parse error and continue to next fallback
    }
  }

  return 'https://thenerdlegame.com';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  // 语言路由配置
  const languageRoutes = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/zh', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/jp', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/ko', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/pt', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/es', priority: 1.0, changeFrequency: 'daily' as const },
  ];

  // 静态页面
  const staticPages = [
    { path: '/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/terms', priority: 0.5, changeFrequency: 'monthly' as const },
  ];

  return [
    // 语言路由
    ...languageRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    // 静态页面
    ...staticPages.map((page) => ({
      url: `${siteUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
  ];
}


