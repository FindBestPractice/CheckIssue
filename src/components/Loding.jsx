import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Loding = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  );
};

export default Loding;
