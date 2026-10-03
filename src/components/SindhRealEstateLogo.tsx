import React from 'react';
import logoAsset from '../assets/images/new_3_sindhi_real_estate_s_d.png';

interface SindhRealEstateLogoProps {
  className?: string;
  variant?: 'stacked' | 'horizontal' | 'emblem-only';
  height?: number | string;
}

export const SindhRealEstateLogo: React.FC<SindhRealEstateLogoProps> = ({
  className = '',
  variant = 'stacked',
  height = 60
}) => {
  // Primary Stacked Logo (Building icon on top, company text directly below)
  // Clean, compact, vertically centered, preserving original proportions, colors, and typography
  if (variant === 'stacked') {
    return (
      <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
        <img
          src={logoAsset}
          alt="Sindhi Real Estate with Samina Developer"
          style={{ height: height, width: 'auto' }}
          className="block shrink-0 object-contain"
        />
      </div>
    );
  }

  // Emblem-only for compact icons or badges
  if (variant === 'emblem-only') {
    return (
      <svg
        viewBox="90 15 160 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: height, width: 'auto' }}
        className={`shrink-0 ${className}`}
        shapeRendering="geometricPrecision"
      >
        <g stroke="#DFB257" strokeLinecap="round" strokeLinejoin="miter">
          <path d="M 98 126 L 118 128" strokeWidth="3" />
          <path d="M 222 128 L 242 126" strokeWidth="3" />
          <path d="M 118 128 L 118 96 L 128 84 L 128 128" strokeWidth="3.5" />
          <path d="M 128 128 L 128 78 L 146 56 L 146 128" strokeWidth="3.8" />
          <path d="M 137 72 L 137 128" strokeWidth="2.5" />
          <path d="M 154 128 L 154 44 L 170 20 L 170 128" strokeWidth="4.2" />
          <path d="M 170 20 L 172 23 L 172 128" strokeWidth="3" />
          <path d="M 162 48 L 162 128" strokeWidth="2.5" />
          <path d="M 170 20 L 170 140" strokeWidth="3.5" />
          <path d="M 172 50 L 186 68 L 186 128" strokeWidth="3.8" />
          <path d="M 179 60 L 179 128" strokeWidth="2.5" />
          <path d="M 186 92 L 202 110 L 202 128" strokeWidth="3.5" />
        </g>
      </svg>
    );
  }

  // Fallback to stacked
  return (
    <SindhRealEstateLogo variant="stacked" height={height} className={className} />
  );
};
