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
  CardMedia,
  Button,
  Link,
} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import TapasIcon from '@mui/icons-material/Tapas';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import background from './assets/aics2022.webp';
import poster from './assets/aics2022-poster.pdf';
import mehmet from './assets/mehmet.jpg';
import nina from './assets/nina.png';
import norbert from './assets/norbert.png';
import jakub from './assets/jakub.jpg';
import dimitra from './assets/dimitra.jpg';
import alvaro from './assets/alvaro.jpg';
import ebin from './assets/ebin.jpg';
import chiara from './assets/chiara.jpg';
import sensolligent from './assets/sensolligent-logo.png';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

const team = [
  {
    name: 'Dimitra Brountsou',
    project: 'RPA Bot Development',
    time: '17:20 - 17:30',
    image: dimitra,
  },
  {
    name: 'Alvaro Sanchez',
    project: 'Deception Detection Using Brain Signals',
    time: '17:30 - 17:40',
    image: alvaro,
  },
  {
    name: 'Mehmet Daglioglu',
    project: 'Super Resolution GANs',
    time: '17:40 - 17:50',
    image: mehmet,
  },
  {
    name: 'Jakub Ciborowski',
    project: 'Network IDS for IoT',
    time: '17:50 - 18:00',
    image: jakub,
  },
  {
    name: 'Norbert Elter',
    project: 'Digit Recognition',
    time: '18:15 - 18:25',
    image: norbert,
  },
  {
    name: 'Nina Suette',
    project: "Yao's protocol",
    time: '18:25 - 18:35',
    image: nina,
  },
  {
    name: 'Chiara Marita Szolderits',
    project: 'Mathematical Equation Solver',
    time: '18:35 - 18:45',
    image: chiara,
  },
  {
    name: 'Ebin Sebastian',
    project: 'Sokoban solver',
    time: '18:45 - 18:55',
    image: ebin,
  },
];

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: createColor('#6a8bff'),
      secondary: createColor('#a14f9f'),
      info: createColor('#ff3cb7'),
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <img
        src={background}
        width={'100%'}
        height={200}
        draggable={false}
        style={{
          position: 'relative',
          filter:
            'saturate(80%) hue-rotate(40deg) brightness(60%) contrast(80%)',
          objectFit: 'cover',
          userSelect: 'none',
          zIndex: -1,
          marginBottom: -10,
        }}
      />
      <Grid
        container
        alignItems={'center'}
        justifyContent={'center'}
        sx={{ position: 'absolute', top: 0, left: 0, textAlign: 'center' }}>
        <Grid item xs={12} sx={{ mt: 1, mr: 1 }}>
          <Typography
            variant={'h3'}
            sx={{
              textAlign: 'right',
              fontSize: 'clamp(0.7rem, 2vw, 1.2rem)',
              textTransform: 'uppercase',
              fontWeight: 'bolder',
              letterSpacing: '0.15rem',
              color: theme.palette.info.main,
              userSelect: 'none',
            }}
            children={'June 17. 17:00 - 21:00'}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant={'h3'}
            sx={{
              fontSize: 'clamp(3.5rem, 9.5vw, 3.8rem)',
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'bolder',
              lineHeight: '0.8',
              letterSpacing: '0.1rem',
              textShadow: `0 0 7px ${theme.palette.primary.main}, 0 0 10px ${theme.palette.primary.main}, 0 0 21px ${theme.palette.primary.main}`,
              userSelect: 'none',
            }}>
            Artificial <br /> Intelligence
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ mt: 1, mb: 1 }}>
          <Typography
            variant={'h3'}
            sx={{
              fontSize: 'clamp(1.4rem, 4vw, 3rem)',
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'bolder',
              letterSpacing: '0.4rem',
              color: theme.palette.primary.main,
              textShadow: `0 0 4px ${theme.palette.primary.main}`,
              userSelect: 'none',
            }}
            children={'Meets Cybersecurity'}
            noWrap
          />
        </Grid>
      </Grid>
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
            children={'Schedule'}
            variant={'h3'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
            color={'primary'}
          />
          <Typography children={'University of Klagenfurt'} sx={{ mt: 1 }} />
          <Typography children={'Building O, Event hall'} />
          <Typography children={'2022. 06. 17, 17:00 - 21:00'} sx={{ mb: 3 }} />
          <Button
            sx={{ mt: -3 }}
            children={'Recording of the Livestream'}
            size={'large'}
            onClick={() =>
              window.open('https://bbb.aau.at/playback/presentation/2.3/b08840a02008883b37f3eb4f5687e9d241ec5ce1-1655472225060
')
            }
            endIcon={<FiberManualRecordIcon />}
          />
          <Stepper
            alternativeLabel
            activeStep={3}
            connector={<ColorlibConnector />}
            sx={{ mt: 1 }}>
            <Step key={'Start'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'Start'}
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
                <Typography children={'17:20 - 19:00'} variant={'caption'} />
              </StepLabel>
            </Step>
            <Step key={'Snacks & Networking'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'Snacks & Networking'}
                  variant={'inherit'}
                  sx={{ mt: -1, mb: -2.5 }}
                />
                <br />
                <Typography children={'19:00 - 21:00'} variant={'caption'} />
              </StepLabel>
            </Step>
            <Step key={'End'}>
              <StepLabel StepIconComponent={ColorlibStepIcon}>
                <Typography
                  children={'End'}
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
          <Grid container spacing={1.5}>
            {team.map((member) => (
              <Grid item xs={6} md={3} key={member.name}>
                <Card sx={{ height: '100%' }}>
                  <Grid container direction={'column'} spacing={1}>
                    <Grid item>
                      <CardMedia
                        component={'img'}
                        draggable={false}
                        image={member.image}
                        height={200}
                        sx={{ objectFit: 'cover', userSelect: 'none' }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography
                        children={member.name}
                        color={'primary'}
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Grid>
                    <Grid item sx={{ mb: 1.5, mx: 1 }}>
                      <Typography
                        children={member.project}
                        sx={{ fontWeight: 'lighter' }}
                      />
                      <Typography
                        children={member.time}
                        sx={{ fontWeight: 'lighter' }}
                      />
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: -2 }}>
          <Button
            children={'Contact'}
            size={'large'}
            href={'mailto:aics2022@aau.at'}
          />
          <Button
            children={'Poster'}
            size={'large'}
            onClick={() => window.open(poster)}
          />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: 1 }}>
          <Typography
            children={'Come and see us on'}
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
        <Grid item xs={12} md={8}>
          <Button
            children={'Sponsored by Sensolligent'}
            sx={{ color: 'white', fontSize: 16 }}
            size={'large'}
            onClick={() => window.open('https://www.sensolligent.com/')}
          />
          <br />
          <img src={sensolligent} width={160} draggable={false} />
        </Grid>
        <Grid item xs={12} md={8} sx={{ mb: 3 }}>
          <Typography
            children={'Impressum'}
            variant={'h5'}
            sx={{
              textTransform: 'lowercase',
              fontVariant: 'small-caps',
              fontWeight: 'lighter',
            }}
          />
          <Typography
            children={'Prof. Dr. Wolfgang Faber'}
            sx={{ fontWeight: 'lighter' }}
          />
          <Typography
            children={
              'Universitätsstraße 65-67, 9020 Klagenfurt am Wörthersee, Austria'
            }
            sx={{ fontWeight: 'lighter' }}
          />
          <Typography
            children={
              'Function: Member of the Working Group for Equal Opportunities, Head of the Institute'
            }
            sx={{ fontWeight: 'lighter' }}
          />
          <Typography sx={{ fontWeight: 'lighter' }}>
            Email:{' '}
            <Link
              children={'Wolfgang.Faber@aau.at'}
              href={'mailto: Wolfgang.Faber@aau.at'}
              underline={'none'}
              color={'white'}
              sx={{
                fontWeight: 'lighter',
                display: 'inline',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transition: theme.transitions.create('color', {
                    duration: theme.transitions.duration.shortest,
                  }),
                },
              }}
            />
          </Typography>
          <Typography sx={{ fontWeight: 'lighter' }}>
            Webpage:{' '}
            <Typography
              children={'https://www.wfaber.com/'}
              onClick={() => window.open('https://www.wfaber.com/')}
              sx={{
                fontWeight: 'lighter',
                display: 'inline',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transition: theme.transitions.create('color', {
                    duration: theme.transitions.duration.shortest,
                  }),
                },
              }}
            />
          </Typography>
          <Typography
            children={
              'Assignment: Institute for Artificial Intelligence and Cybersecurity'
            }
            sx={{ fontWeight: 'lighter' }}
          />
          <Typography sx={{ fontWeight: 'lighter' }}>
            Telephone:{' '}
            <Link
              children={'+43 463 2700 3712'}
              href={'tel:+4346327003712'}
              underline={'none'}
              color={'white'}
              sx={{
                fontWeight: 'lighter',
                display: 'inline',
                cursor: 'pointer',
                '&:hover': {
                  color: theme.palette.primary.main,
                  transition: theme.transitions.create('color', {
                    duration: theme.transitions.duration.shortest,
                  }),
                },
              }}
            />
          </Typography>
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
    3: <TapasIcon />,
    4: <AvTimerIcon />,
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
