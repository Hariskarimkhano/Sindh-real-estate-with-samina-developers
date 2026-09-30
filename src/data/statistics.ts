export interface CompanyStatistic {
  id: string;
  value: number;
  prefix?: string;
  suffix: string;
  label: string;
  sublabel: string;
  detail: string;
}

export const COMPANY_STATISTICS: CompanyStatistic[] = [
  {
    id: 'employees',
    value: 16000,
    suffix: '+',
    label: 'Employees Worldwide',
    sublabel: 'Dedicated Builders & Engineers',
    detail: 'Field leaders, technical specialists, virtual design engineers and craft professionals working in unison.'
  },
  {
    id: 'volume',
    prefix: '$',
    value: 28,
    suffix: 'B+',
    label: 'Annual Construction Volume',
    sublabel: 'Complex Work Completed Annually',
    detail: 'Financial capacity and procurement scale to execute the world’s most demanding capital programs.'
  },
  {
    id: 'experience',
    value: 120,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'Founded in 1902',
    detail: 'Over a century of pioneering reinforced concrete, technical innovation, and civic landmarks.'
  },
  {
    id: 'projects',
    value: 1500,
    suffix: '+',
    label: 'Active Projects',
    sublabel: 'Across Global Markets',
    detail: 'From community medical centers and universities to international airport terminals and high-density towers.'
  }
];

export const SUSTAINABILITY_STATISTICS = [
  {
    label: 'Green Building Work',
    value: '$50B+',
    description: 'Cumulative value of certified sustainable, LEED, and Net Zero energy projects.'
  },
  {
    label: 'Jobsite Waste Diversion',
    value: '84%',
    description: 'Average construction and demolition debris diverted away from municipal landfills.'
  },
  {
    label: 'Net Zero Target',
    value: '2030',
    description: 'Commitment to 50% operational GHG reduction by 2030 and Net Zero across operations.'
  },
  {
    label: 'Diverse Business Spend',
    value: '$3.5B+',
    description: 'Direct procurement contracts awarded annually to Underrepresented Business Enterprises.'
  }
];
