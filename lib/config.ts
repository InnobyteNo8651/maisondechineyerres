export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://maisondechine-valerres.fr',
  name: {
    fr: "Maison de Chine de Val d'Yerres",
    zh: '瓦莱里斯中国之家',
  },
  description: {
    fr: "Apprenez le chinois, découvrez la culture chinoise et créez des liens entre les cultures.",
    zh: '学习中文，探索中国文化，构建文化之间的纽带。',
  },
};

export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function getAssetPath(src: string): string {
  return src.startsWith('/') ? `${basePath}${src}` : src;
}
