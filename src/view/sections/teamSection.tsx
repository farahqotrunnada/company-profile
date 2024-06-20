
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";

import axios from 'axios';

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  location: {
    city: string;
    state: string;
  };
  email: string;
  picture: {
    large: string;
  };
  phone: string;
  login: {
    uuid: string;
  };
}

const fetchTeamMembers = async (): Promise<TeamMember[]> => {
  try {
    const response = await axios.get('https://randomuser.me/api/?results=3&nat=us');
    return response.data.results;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const TeamSection = async () => {
  const teamMembers = await fetchTeamMembers();

  const titles = ["CEO", "Head of Product", "Head of Marketing"];
  
  return (
    <Container maxWidth="lg">
      <Box mt={4}>
        <Typography variant="h3" align="center" gutterBottom>
          MEET OUR TEAMS
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={4} key={member.login.uuid}>
              <Card>
                <CardContent>
                  <Box display="flex" flexDirection="column" alignItems="center">
                    <Avatar alt={`${member.name.first} ${member.name.last}`} src={member.picture.large} sx={{ width: 80, height: 80, mb: 2 }} />
                    <Typography variant="h5" component="div" gutterBottom>
                      {`${member.name.first} ${member.name.last}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      {titles[index]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" gutterBottom>
                      {member.phone}
                    </Typography>
                    <Box display="flex" justifyContent="center" mt={2}>
                      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Facebook" src="/images/facebook.svg" sx={{ width: 24, height: 24, mx: 0.5 }} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Instagram" src="/images/instagram.svg" sx={{ width: 24, height: 24, mx: 0.5 }} />
                      </a>
                      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <Avatar alt="Twitter" src="/images/twitter.svg" sx={{ width: 24, height: 24, mx: 0.5 }} />
                      </a>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default TeamSection;
