import React from 'react';
import {Typography, Box } from '@mui/material';
import { TypeAboutUsFields } from '@/types/contentful';
import { client } from '@/utils/contentful';
import ThemeWrapper from '../components/themeWrapper';



const fetchAboutUsContent = async (): Promise<TypeAboutUsFields['fields'] | null> => {
  try {
    const data = await client.getEntries<TypeAboutUsFields>({
      content_type: 'aboutUs',
      include: 2,
    });
    return data?.items[0].fields || null;
  } catch (err) {
    console.error(err);
    return null;
  }
};

const AboutUsSection = async () => {
  const content = await fetchAboutUsContent();

  if (!content) {
    return <div>Error loading content</div>;
  }

  return (
    <ThemeWrapper>

        <Box mt={4}>
          <Typography variant="h2" color="primary" gutterBottom>
            About Us
          </Typography>
          <Box mt={2}>
            <Typography variant="h4" color="primary">
              Our History
            </Typography>
            <Typography color="primary">{content.history}</Typography>
          </Box>
          <Box mt={2}>
            <Typography variant="h4" color="primary">
              Our Culture
            </Typography>
            <Typography color="primary">{content.culture}</Typography>
          </Box>
        </Box>
    </ThemeWrapper>
  );
};

export default AboutUsSection;
