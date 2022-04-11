import {
  createTheme,
  CssBaseline,
  Grid,
  Step,
  StepConnector,
  StepLabel,
  Stepper,
  styled,
  ThemeProvider,
  Typography,
  StepIconProps,
  stepConnectorClasses,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import logo from './assets/logo.svg';
import main from './assets/aics2022.webp';
import dog1 from './assets/dog1.jpeg';
import dog2 from './assets/dog2.jpeg';
import dog3 from './assets/dog3.jpeg';
import dog4 from './assets/dog4.jpeg';
import dog5 from './assets/dog5.jpeg';
import dog6 from './assets/dog6.jpeg';
import dog7 from './assets/dog7.jpeg';
import dog8 from './assets/dog8.jpeg';
import dog9 from './assets/dog9.jpeg';
import dog10 from './assets/dog10.jpeg';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: createColor('#6a8bff'),
      secondary: createColor('#8a2387'),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Grid
        container
        spacing={1}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ textAlign: 'center', px: 1 }}>
        <Grid item xs={12} sx={{ position: 'relative', mb: -2 }}>
          <img
            src={main}
            width={'100%'}
            height={300}
            style={{
              filter:
                'saturate(80%) hue-rotate(40deg) brightness(60%) contrast(80%)',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <Typography
            variant={'h3'}
            sx={{
              width: '95%',
              fontSize: 'clamp(2.5rem, 3vw, 3rem)',
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'bolder',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backdropFilter: 'blur(2px) saturate(60%)',
            }}
            children={'AI meets CS: Check out what our students are working on'}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'About'}
            variant={'h3'}
            color={'primary'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
          />
          <Typography
            children={
              '"AI meets CS: Check out what our students are working on" is a student-organized showcase on Artificial Intelligence and Cybersecurity at the University of Klagenfurt. The aim of this event is to leverage the synergy between various AI & CS fields, and to present our work to the public.'
            }
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'Event details'}
            variant={'h3'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
            color={'primary'}
          />
          <Typography children={'University of Klagenfurt'} sx={{ mt: 1 }} />
          <Typography children={'2022.06.17, 15:00-18:00'} sx={{ mb: 3 }} />
          <Stepper
            alternativeLabel
            activeStep={2}
            connector={<ColorlibConnector />}
            sx={{ mt: 1 }}>
            <Step key={'Event starts'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'Event starts'}
                  variant={'inherit'}
                  sx={{ mt: -1, mb: -2.5 }}
                />
                <br />
                <Typography children={'15:00'} variant={'caption'} />
              </StepLabel>
            </Step>
            <Step key={'Presentations'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'Presentations'}
                  variant={'inherit'}
                  sx={{ mt: -1, mb: -2.5 }}
                />
                <br />
                <Typography children={'16:00'} variant={'caption'} />
              </StepLabel>
            </Step>
            <Step key={'Event ends'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'Event ends'}
                  variant={'inherit'}
                  sx={{ mt: -1, mb: -2.5 }}
                />
                <br />
                <Typography children={'18:00'} variant={'caption'} />
              </StepLabel>
            </Step>
          </Stepper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'Team'}
            variant={'h3'}
            color={'primary'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
              mb: 1,
            }}
          />
          <Grid
            container
            spacing={1}
            justifyContent={'center'}
            alignItems={'center'}>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog1}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 1'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog2}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 2'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog3}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 3'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog4}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 4'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog5}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 5'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog6}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 6'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog7}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 7'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog8}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 8'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog9}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 9'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={4}>
              <Card>
                <CardActionArea disableRipple>
                  <CardMedia
                    component={'img'}
                    image={dog10}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dog 10'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Why dogs are superior creatures'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: 3 }}>
          <Typography
            children={'Come and see us on the'}
            variant={'h3'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
          />
          <Typography
            children={'17th June'}
            variant={'h3'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
            color={'primary'}
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

function ColorlibStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <EventNoteIcon />,
    2: <CoPresentIcon />,
    3: <AvTimerIcon />,
  };

  return (
    <ColorlibStepIconRoot
      ownerState={{ completed, active }}
      className={className}>
      {icons[String(props.icon)]}
    </ColorlibStepIconRoot>
  );
}

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage: `linear-gradient( 95deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor:
    theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: '#fff',
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  }),
  ...(ownerState.completed && {
    backgroundImage: `linear-gradient( 136deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  }),
}));
