import { createContext } from 'react';

export const DataContext = createContext(
  {
    title: 'Greetings Edwin.',
    fullName: 'Edwin Hermans',
    dateOfBirth: '23 May 1974 (age 49)',
    placeOfBirth: 'Goirle, Netherlands'
  }
);
