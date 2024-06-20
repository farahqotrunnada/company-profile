import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { client } from '../../../utils/contentful';
import { TypeHeroFields } from '@/types/contentful/TypeOverview';
import Link from 'next/link';

export async function fetchCompanyOverview() {
  try {
    const data = await client.getEntries<TypeHeroFields>({
      content_type: 'companyOverview',
      include: 2,
    });
    return data.items || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

const OverviewSection = async () => {
  const companyOverviewData = await fetchCompanyOverview();

  if (companyOverviewData.length === 0) {
    return <div>Error loading company overview content</div>;
  }

  return (
    <Box mt={4}>
      <Grid container spacing={4}>
        {companyOverviewData.map((overview, index) => {
          const { fields }: { fields: { file: { url: string } } } = overview.fields.heroImage;
          const heroImageUrl = `https:${fields.file.url}`;

          return (
            <Grid item xs={12} key={overview.sys.id}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: { xs: 'column', md: index % 2 === 0 ? 'row' : 'row-reverse' },
                  mb: 4,
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={heroImageUrl}
                  alt={overview.fields.title}
                  sx={{
                    flex: 1,
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '200px', md: 'auto' },
                    objectFit: 'cover',
                  }}
                />
                <Box sx={{ flex: 1, padding: '1rem', backgroundColor: '#f5f5f5' }}>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {overview.fields.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary" paragraph>
                    {overview.fields.description}
                  </Typography>
                  <Link href="/services" passHref>
                    <Button variant="contained" color="secondary" sx={{ mt: 2 }} >
                      Join Us
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default OverviewSection;
