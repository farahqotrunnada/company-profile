
import dynamic from 'next/dynamic';
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { TypeProductFields, TypeTestimonialFields } from '@/types/contentful';
import { client } from '@/utils/contentful';
import ThemeWrapper from '../components/themeWrapper';
import Image from 'next/image';
const CustomCarousel = dynamic(() => import('../components/customCarousel'), { ssr: false });


export async function fetchProducts() {
  try {
    const data = await client.getEntries<TypeProductFields>({
      content_type: 'product',
      include: 2,
    });
    return data.items || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function fetchTestimonials() {
  try {
    const data = await client.getEntries<TypeTestimonialFields>({
      content_type: 'testimonial',
      include: 2,
    });
    return data.items || [];
  } catch (err) {
    console.error(err);
    return [];
  }
}

const ProductSection = async () => {
  const products = await fetchProducts();
  const testimonials = await fetchTestimonials();

  return (
    <ThemeWrapper>
      <Box mt={4}>
        <Typography variant="h4" color="primary" mb={2}>
          Our Top Selections
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => {
            const { fields }: { fields: { file: { url: string } } } = product.fields.productImage;
            return (
              <Grid item xs={12} sm={4} md={4} key={product.sys.id}>
                <Card raised sx={{ display: 'flex', flexDirection: 'column', height: '100%', border: `1px solid #213260` }}>
                <CardMedia sx={{ position: 'relative', height: '140px', width: '100%' }}>
                  <Image
                        src={`https:${fields.file.url}`}
                        alt={product.fields.title}
                        layout="fill"
                        objectFit="cover"
                        quality={75}
                        loading="lazy"
                      />
                </CardMedia>
                  <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flexGrow: 1, display: 'grid', flexDirection: 'column' }}>
                      <Typography variant="h5" color="primary" sx={{ minHeight: '3.8rem' }}>
                        {product.fields.title}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="body2" color="textSecondary">
                        {product.fields.description}
                      </Typography>
                    </CardContent>
                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" color="secondary" sx={{ marginTop: 'auto' }}>
                        Price: {product.fields.price}
                      </Typography>
                    </CardContent>
                  </CardContent>
                  <Button variant="contained" color="primary" fullWidth sx={{ borderRadius: 0 }}>
                    Learn More
                  </Button>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Box mt={4}>
        <Typography variant="h4" color="primary" mb={2}>
          What People Say About Us
        </Typography>
        <CustomCarousel
          items={testimonials.map((testimonial, index) => (
            <Box key={index} px={2}>
              <Card raised sx={{ height: '100%', border: `1px solid #213260` }}>
                <CardContent>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    &quot;{testimonial.fields.quote}&quot;
                  </Typography>
                  <Typography variant="body2" color="textSecondary" align="right">
                    - {testimonial.fields.author}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
        />
      </Box>
    </ThemeWrapper>
  );
};

export default ProductSection;
