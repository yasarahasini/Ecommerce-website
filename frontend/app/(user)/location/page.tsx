
'use client';

import React from 'react';
import CountryMap from '@/app/components/CountryMap';

const LocationPage = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="text-2xl font-semibold mb-4">Location Map</h1>
      <div style={{ width: '100%', height: '500px' }}>
        <CountryMap mapColor="#E5E7EB" />
      </div>
    </div>
  );
};

export default LocationPage;
