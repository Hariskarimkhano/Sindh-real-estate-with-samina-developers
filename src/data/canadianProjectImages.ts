interface CityProjectImages {
  city: string;
  files: Record<string, { default: string }>;
}

const cityProjectImages: CityProjectImages[] = [
  {
    city: 'Ottawa',
    files: import.meta.glob<{ default: string }>(
      '../assets/Canada Ottawa/*.{jpg,jpeg,png,webp}',
      { eager: true, query: '?url' }
    )
  },
  {
    city: 'Montreal',
    files: import.meta.glob<{ default: string }>(
      '../assets/Montreal City Canada/*.{jpg,jpeg,png,webp}',
      { eager: true, query: '?url' }
    )
  },
  {
    city: 'Calgary',
    files: import.meta.glob<{ default: string }>(
      '../assets/Calgary/*.{jpg,jpeg,png,webp}',
      { eager: true, query: '?url' }
    )
  }
];

export const CANADIAN_PROJECT_GALLERIES = cityProjectImages.map(({ city, files }) => ({
  city,
  images: Object.entries(files)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([path, image], index) => ({
      src: image.default,
      alt: `${city}, Canada project image ${index + 1}`,
      caption: `${city}, Canada · Image ${index + 1}`
    }))
}));
