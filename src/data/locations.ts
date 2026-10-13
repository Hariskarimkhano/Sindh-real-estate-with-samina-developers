import { OfficeLocation } from '../types';

export const OFFICIAL_EMAIL_PENDING = 'OFFICIAL_EMAIL_PENDING';

export const toTelephoneUri = (phone: string): string =>
  `tel:${phone.replace(/[^\d+]/g, '')}`;

export const LOCATIONS_DATA: OfficeLocation[] = [
  {
    id: 'uk',
    name: 'UK Office',
    region: 'United Kingdom',
    city: 'London',
    state: '',
    country: 'United Kingdom',
    address: 'Senna Building, 10th Floor, Office No. 1009, Gorsuch Place, London, E2-8JF, United Kingdom',
    phone: '+44 7892 489591',
    email: OFFICIAL_EMAIL_PENDING
  },
  {
    id: 'canada',
    name: 'Canada Office',
    region: 'Canada',
    city: 'Toronto',
    state: 'ON',
    country: 'Canada',
    address: 'Dominion Center, 3rd Floor, Office No. 3011, 66 Wellington Street, Toronto, ON M5 1A1, Canada',
    phone: '+1 (506) 863-3855',
    email: OFFICIAL_EMAIL_PENDING
  },
  {
    id: 'dubai',
    name: 'UAE — Dubai Office',
    region: 'United Arab Emirates',
    city: 'Dubai',
    state: 'Dubai',
    country: 'United Arab Emirates',
    address: 'Binary By OMNIYAT, 16th Floor, Business Center, Office No. 28, 32 Marasi Drive, Business Bay, Dubai, UAE',
    phone: '+971 50 583 386',
    email: OFFICIAL_EMAIL_PENDING
  }
];
