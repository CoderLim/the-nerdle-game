import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 语言配置
export const locales = ['en', 'zh', 'ja', 'ko', 'pt', 'es'] as const;
export const defaultLocale = 'en';

// 语言路径映射
export const localePathMap: Record<string, string> = {
  'en': '/',
  'zh': '/zh',
  'ja': '/jp',
  'ko': '/ko',
  'pt': '/pt',
  'es': '/es',
};

// 路径到语言的反向映射
export const pathToLocaleMap: Record<string, string> = {
  '/': 'en',
  '/zh': 'zh',
  '/jp': 'ja',
  '/ko': 'ko',
  '/pt': 'pt',
  '/es': 'es',
};

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // 跳过静态文件和 API 路由
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // 文件扩展名
  ) {
    return NextResponse.next();
  }

  // 检查路径是否已经包含语言前缀
  const pathnameHasLocale = Object.keys(pathToLocaleMap).some(
    (localePath) => pathname === localePath || pathname.startsWith(localePath + '/')
  );

  if (pathnameHasLocale) {
    return NextResponse.next();
  }

  // 如果访问 /privacy 或 /terms，保持原样
  if (pathname === '/privacy' || pathname === '/terms') {
    return NextResponse.next();
  }

  // 默认重定向到英文
  return NextResponse.redirect(new URL(`/${pathname}`, request.url));
}

export const config = {
  matcher: [
    // 匹配所有路径，除了以下：
    '/((?!_next|api|static|.*\\..*).*)',
  ],
};

