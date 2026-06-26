export interface HeroContent {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
}

export function parseHero(md: string): HeroContent {
  const lines = md.split('\n');
  let title = '';
  let subtitle = '';
  let tagline = '';
  const descLines: string[] = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('# ')) {
      title = line.substring(2);
    } else if (line.startsWith('## ')) {
      subtitle = line.substring(3);
    } else if (line.startsWith('### ')) {
      tagline = line.substring(4);
    } else {
      descLines.push(line);
    }
  }

  return {
    title,
    subtitle,
    tagline,
    description: descLines.join(' ')
  };
}

export interface AboutContent {
  title: string;
  description: string;
}

export function parseAbout(md: string): AboutContent {
  const lines = md.split('\n');
  let title = '';
  const descLines: string[] = [];

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.startsWith('# ')) {
      title = line.substring(2);
    } else {
      descLines.push(line);
    }
  }

  return {
    title,
    description: descLines.join(' ')
  };
}

export interface FeatureContent {
  title: string;
  description: string;
}

export function parseFeatures(md: string): FeatureContent[] {
  const blocks = md.split(/\r?\n---\r?\n/);
  return blocks.map((block) => {
    const lines = block.split('\n');
    let title = '';
    const descLines: string[] = [];
    for (let line of lines) {
      line = line.trim();
      if (!line) continue;
      if (line.startsWith('# ')) {
        title = line.substring(2);
      } else {
        descLines.push(line);
      }
    }
    return {
      title,
      description: descLines.join(' ')
    };
  });
}
