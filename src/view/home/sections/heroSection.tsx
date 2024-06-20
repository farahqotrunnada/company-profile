import Image from 'next/image';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
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
        '@media (max-width: 600px)': {
          paddingLeft: '2%',
        },
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
          background: 'rgba(0, 0, 0, 0.5)', 
          borderRadius: '10px',
          '@media (max-width: 650px)': {
            width: '90%'
          },
        }}
      >
        <Typography 
          variant="h2" 
          gutterBottom 
          sx={{ 
            color: '#FF8C00', 
            fontWeight: 'bold', 
            '@media (max-width: 650px)': {
              fontSize: '3rem'
            },
          }}
        >
          {hero.title}
        </Typography>
        <Typography 
          variant="body1" 
          gutterBottom
          sx={{ 
            '@media (max-width: 600px)': {
              fontSize: '1rem'
            },
          }}
        >
          {hero.description}
        </Typography>
        <Link href="/services" passHref>
          <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
            Evolve Today
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroSection;
