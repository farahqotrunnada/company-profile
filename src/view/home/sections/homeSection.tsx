import React from 'react';
import {Typography, Box } from '@mui/material';

import { client } from '../../../utils/contentful';
import { TypeHomePageFields } from '../../../types/contentful/TypeHomePage';
import HeroSection from './heroSection';


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
          {/* <Typography variant="h3" color="primary" gutterBottom>
            {content.heroTitle}
          </Typography> */}
          {/* <Typography
            variant="subtitle1"
            color="textSecondary"
            gutterBottom
            sx={{
              backgroundColor: '#213260',
              padding: '10px 20px',
              borderRadius: '5px',
              display: 'inline-block',
              color: 'white',
            }}
          >
            {content.heroSubtitle}
          </Typography> */}
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