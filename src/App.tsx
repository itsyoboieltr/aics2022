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
  Box,
} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import main from './assets/aics2022.webp';
import mehmet from './assets/mehmet.jpg';
import nina from './assets/nina.png';
import norbert from './assets/norbert.png';
import jakub from './assets/jakub.jpg';
import dimitra from './assets/dimitra.jpg';
import alvaro from './assets/alvaro.jpg';
import ebin from './assets/ebin.jpg';
import chiara from './assets/chiara.jpg';

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
      <Box sx={{ position: 'relative', mb: -2, textAlign: 'center' }}>
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
            top: '33%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backdropFilter: 'blur(2px) saturate(60%)',
          }}
          children={'AI meets CS'}
        />
        <Typography
          variant={'h3'}
          sx={{
            width: '95%',
            fontSize: 'clamp(2rem, 3vw, 3rem)',
            textTransform: 'lowercase',
            fontVariant: 'small-caps',
            fontWeight: 'bolder',
            position: 'absolute',
            top: '55%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backdropFilter: 'blur(2px) saturate(60%)',
          }}
          children={'Check out what our students are working on'}
        />
      </Box>
      <Grid
        container
        spacing={1}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{ textAlign: 'center', px: 1 }}>
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
          <Typography children={'2022.06.17, 17:00-21:00'} sx={{ mb: 3 }} />
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
                <Typography children={'17:00'} variant={'caption'} />
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
                <Typography children={'18:00'} variant={'caption'} />
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
                <Typography children={'21:00'} variant={'caption'} />
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
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={mehmet}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Mehmet Daglioglu'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Super Resolution GANs'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={nina}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Nina Suette'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={"Yao's protocol"}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={norbert}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Norbert Elter'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Digit Recognition'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={jakub}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Jakub Ciborowski'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Network IDS for IoT'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={dimitra}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Dimitra Brountsou'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'RPA Bot Development'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={alvaro}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Alvaro Sanchez'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Deception Detection Using Brain Signals'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={ebin}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Ebin Sebastian'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Sokoban solver'}
                      sx={{ fontWeight: 'lighter' }}
                    />
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={6} md={3}>
              <Card>
                <CardActionArea disableRipple sx={{ cursor: 'default' }}>
                  <CardMedia
                    component={'img'}
                    image={chiara}
                    width={200}
                    height={200}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography
                      children={'Chiara Marita Szolderits'}
                      color={'primary'}
                      sx={{ fontWeight: 'bold' }}
                    />
                    <Typography
                      children={'Mathematical Equation Solver'}
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
