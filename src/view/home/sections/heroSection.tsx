import Image from 'next/image';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { client } from '../../../utils/contentful';
import { TypeHeroFields } from '@/types/contentful/TypeHero';

export async function fetchHero() {
  try {
    const data = await client.getEntries<TypeHeroFields>({
      content_type: 'hero',
      include: 2,
    });
    return data.items || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

const HeroSection = async () => {
  const heroData = await fetchHero();

  if (heroData.length === 0) {
    return <div>Error loading hero content</div>;
  }

  const hero = heroData[0].fields;

  const { fields: { file: { url: heroImageUrl } } } = hero.heroImage;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '600px',
        backgroundColor: '#ffff', // Fallback color
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        paddingLeft: '5%',
      }}
    >
      <Image
        src={`https:${heroImageUrl}`}
        alt={hero.title}
        layout="fill"
        objectFit="cover"
        quality={75}
        priority
        style={{ zIndex: 1 }}
      />
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'left',
          maxWidth: '600px',
          padding: '2rem',
          background: 'rgba(0, 0, 0, 0.5)', // Optional: add background for better text readability
          borderRadius: '10px', // Optional: add border-radius
        }}
      >
        <Typography variant="h2" gutterBottom sx={{ color: '#FF8C00', fontWeight: 'bold' }}>
          {hero.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {hero.description}
        </Typography>
        <Button variant="contained" color="secondary" sx={{ mt: 2 }} href="/services">
          Evolve Today
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
