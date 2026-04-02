import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getAllContent() {
  const categories = ['synthetic', 'organic', 'verbal', 'logic'];
  let allContent = [];
  categories.forEach((category) => {
    const categoryPath = path.join(contentDirectory, category);
    if (fs.existsSync(categoryPath)) {
      const fileNames = fs.readdirSync(categoryPath);
      fileNames.forEach((fileName) => {
        if (!fileName.endsWith('.md')) return;
        const fileContents = fs.readFileSync(path.join(categoryPath, fileName), 'utf8');
        const { data, content } = matter(fileContents);
        allContent.push({ 
          slug: fileName.replace(/\.md$/, ''), 
          category, 
          content, 
          ...data 
        });
      });
    }
  });
  return allContent.sort((a, b) => (new Date(b.date) - new Date(a.date)));
}

export function getContentBySlug(category, slug) {
  const fullPath = path.join(contentDirectory, category, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, category, content, ...data };
}
