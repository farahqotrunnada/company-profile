import React from 'react';
import {Typography, Box } from '@mui/material';

import { client } from '../../../utils/contentful';
import { TypeHomePageFields } from '../../../types/contentful/TypeHomePage';
import dynamic from 'next/dynamic';
const HeroSection = dynamic(() => import('./heroSection'), { ssr: false });


const fetchHomePageContent = async (): Promise<TypeHomePageFields['fields'] | null> => {
  try {
    const data = await client.getEntries<TypeHomePageFields>({
      content_type: 'homePage',
      include: 2,
    });
    return data?.items[0].fields || null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const HomeSection = async () => {
  const content = await fetchHomePageContent();

  if (!content) {
    return <div>Error loading content</div>;
  }

  return (
        <Box mt={4}>
          <HeroSection/>
          <Box mt={2}>
            <Typography variant="h4" color="primary">
              Innovate, Evolve, and Succeed with Tech Innovators Inc.
            </Typography>
            <Typography color="primary" mt={2}>{content.companyOverview}</Typography>
          </Box>
        </Box>

  );
};

export default HomeSection;
