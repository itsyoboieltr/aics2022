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
} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import EventNoteIcon from '@mui/icons-material/EventNote';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import logo from './assets/logo.svg';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: string) =>
  augmentColor({ color: { main: mainColor } });

export default function App() {
  const theme = createTheme({
    palette: {
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
        <Grid item xs={12} md={8}>
          <img src={logo} width={200} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'About'}
            variant={'h3'}
            sx={{ textTransform: 'lowercase', fontVariant: 'small-caps' }}
          />
          <Typography
            children={
              '"AI meets CS: Check out what our students are working on" is a student-organized showcase on Artificial Intelligence and Cybersecurity at University of Klagenfurt. The aim of this event is to leverage the synergies between various AI & CS fields, and to present our work to the public.'
            }
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'Schedule'}
            variant={'h3'}
            sx={{ textTransform: 'lowercase', fontVariant: 'small-caps' }}
          />
          <Typography children={'when and where?'} />
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
            children={'The team'}
            variant={'h3'}
            sx={{ textTransform: 'lowercase', fontVariant: 'small-caps' }}
          />
          <Typography
            children={'pictures + tooltip + name + presentation name'}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography
            children={'FAQs'}
            variant={'h3'}
            sx={{ textTransform: 'lowercase', fontVariant: 'small-caps' }}
          />
          <Typography children={'accordions with questions and answers'} />
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
