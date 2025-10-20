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

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return [
    {
      url: `${siteUrl}/`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 1,
    },
  ];
}


