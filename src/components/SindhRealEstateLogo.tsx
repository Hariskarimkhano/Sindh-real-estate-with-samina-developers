import React from 'react';

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
        <svg
          viewBox="70 16 200 238"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: height, width: 'auto' }}
          className="shrink-0 overflow-visible"
          shapeRendering="geometricPrecision"
          textRendering="geometricPrecision"
        >
          {/* Gold Gradient Definition */}
          <defs>
            <linearGradient id="sindhGoldStacked" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#E5C16C" />
              <stop offset="50%" stopColor="#DFB257" />
              <stop offset="100%" stopColor="#CFA03C" />
            </linearGradient>
          </defs>

          {/* Architectural Skyscraper Emblem */}
          <g stroke="url(#sindhGoldStacked)" strokeLinecap="round" strokeLinejoin="miter">
            {/* Horizontal Baseline Wings with subtle end upturns */}
            <path d="M 98 126 L 98 128 L 118 128" strokeWidth="3.2" />
            <path d="M 222 128 L 242 128 L 242 126" strokeWidth="3.2" />

            {/* Left Outer Stepped Wing */}
            <path d="M 118 128 L 118 96 L 128 84 L 128 128" strokeWidth="3.6" />

            {/* Left Main Stepped Tower */}
            <path d="M 128 128 L 128 78 L 146 56 L 146 128" strokeWidth="3.8" />
            {/* Left Inner Accent Line */}
            <path d="M 137 72 L 137 128" strokeWidth="2.6" />

            {/* Center Spire (Tallest Tower) */}
            <path d="M 154 128 L 154 44 L 170 20 L 170 128" strokeWidth="4.2" />
            {/* Center Tower Right Wall */}
            <path d="M 170 20 L 172 23 L 172 128" strokeWidth="3.2" />
            {/* Center Inner Accent Line */}
            <path d="M 162 48 L 162 128" strokeWidth="2.6" />

            {/* Central Vertical Spine extending down through SINDH between N and D */}
            <path d="M 170 20 L 170 182" strokeWidth="3.6" />

            {/* Right Main Stepped Tower */}
            <path d="M 172 50 L 186 68 L 186 128" strokeWidth="3.8" />
            {/* Right Inner Accent Line */}
            <path d="M 179 60 L 179 128" strokeWidth="2.6" />

            {/* Right Outer Stepped Wing */}
            <path d="M 186 92 L 202 110 L 202 128" strokeWidth="3.6" />
            <path d="M 202 128 L 222 128" strokeWidth="3.2" />
          </g>

          {/* Typography Stack: SINDH in Gold */}
          <text
            x="170"
            y="178"
            textAnchor="middle"
            fill="url(#sindhGoldStacked)"
            fontFamily="'Playfair Display', 'Cinzel', 'Times New Roman', serif"
            fontSize="46"
            fontWeight="700"
            letterSpacing="5"
          >
            SINDH
          </text>

          {/* Typography Stack: REAL ESTATE in Crisp White */}
          <text
            x="170"
            y="205"
            textAnchor="middle"
            fill="#FFFFFF"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="17.5"
            fontWeight="700"
            letterSpacing="5.5"
          >
            REAL ESTATE
          </text>

          {/* Typography Stack: Divider with 'with' */}
          <g>
            <line x1="92" y1="218" x2="148" y2="218" stroke="#FFFFFF" strokeWidth="0.9" opacity="0.8" />
            <text
              x="170"
              y="222"
              textAnchor="middle"
              fill="#FFFFFF"
              fontFamily="'Plus Jakarta Sans', Georgia, serif"
              fontSize="13"
              fontStyle="italic"
              fontWeight="400"
            >
              with
            </text>
            <line x1="192" y1="218" x2="248" y2="218" stroke="#FFFFFF" strokeWidth="0.9" opacity="0.8" />
          </g>

          {/* Typography Stack: SAMINA DEVELOPERS in Gold */}
          <text
            x="170"
            y="245"
            textAnchor="middle"
            fill="url(#sindhGoldStacked)"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontSize="15"
            fontWeight="700"
            letterSpacing="2.8"
          >
            SAMINA DEVELOPERS
          </text>
        </svg>
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
