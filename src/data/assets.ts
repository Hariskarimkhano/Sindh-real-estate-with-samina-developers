// Centralized visual assets with generated imagery and architectural SVG patterns

import heroConstruction from '../assets/images/hero_construction_skyline_1790754299942.jpg';
import projectModernTower from '../assets/images/project_modern_tower_1790754315689.jpg';
import projectStadium from '../assets/images/project_stadium_complex_1790754327761.jpg';
import heroEngineeringVdc from '../assets/images/hero_engineering_vdc_1790754339258.jpg';
import projectSustainableCampus from '../assets/images/project_sustainable_campus_1790754351392.jpg';

export const ASSETS = {
  heroConstruction,
  projectModernTower,
  projectStadium,
  heroEngineeringVdc,
  projectSustainableCampus,
};

// Generates an inline SVG architectural blueprint/render pattern data URI for rock-solid visual consistency
export function getArchitecturalPattern(type: 'steel' | 'grid' | 'facade' | 'timber' | 'glass', hue: string = '#1E242B'): string {
  if (type === 'steel') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><path d="M0 0 L60 60 M60 0 L0 60" stroke="${encodeURIComponent(hue)}" stroke-width="1" opacity="0.15"/><circle cx="30" cy="30" r="2" fill="${encodeURIComponent(hue)}" opacity="0.3"/></svg>`;
  }
  if (type === 'grid') {
    return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="${encodeURIComponent(hue)}" stroke-width="0.75" opacity="0.12"/></svg>`;
  }
  return `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect x="5" y="5" width="70" height="70" fill="none" stroke="${encodeURIComponent(hue)}" stroke-width="1" opacity="0.1"/><line x1="5" y1="40" x2="75" y2="40" stroke="${encodeURIComponent(hue)}" stroke-width="0.5" opacity="0.1"/></svg>`;
}
