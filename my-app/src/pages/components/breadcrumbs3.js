import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import DashboardIcon from '@mui/icons-material/Dashboard';

function Breadindication3 ()  {
const goBack = () => {
    window.history.back();
  };

  const handleClick = (event) => {
    event.preventDefault();
    goBack();
  };
const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/dashboard"  className="d-flex align-items-center">
      <DashboardIcon sx={{ mr: 0.5 }} fontSize="medium" />
      Dashboard
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/material-ui/getting-started/installation/"
      onClick={handleClick}
    >
      Designation
    </Link>,
    
  ];

return (
  <Stack spacing={2} className="Coffeebreadcrumbs border-top border-bottom py-2 px-2">
  <Breadcrumbs
    separator={<NavigateNextIcon fontSize="small" />}
    aria-label="breadcrumb"
  >
    {breadcrumbs}
  </Breadcrumbs>
</Stack>
);
};
export default Breadindication3;