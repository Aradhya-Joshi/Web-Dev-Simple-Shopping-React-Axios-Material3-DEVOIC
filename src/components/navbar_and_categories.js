import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import  AccountCircle  from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

import { useSelector } from 'react-redux';


export default function ButtonAppBar() {

  const categories = useSelector(state => state.categories.categories);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ }}>
        <Toolbar>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1, textAlign: 'left',color: '#11DB1E' }}>
            Yo Shopper
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="cart"
            sx={{ mr: 2 }}
            component = {Link} to = '/cart'
            
          >
            <ShoppingCartIcon />
          </IconButton>
          
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="profile"
          >
            <AccountCircle></AccountCircle>
          
          </IconButton>
        
          
            
        </Toolbar>
      </AppBar>

      <AppBar position="static" color="default">
        <Toolbar>
          <Button sx={{ mx: 1 }} color="inherit" component = {Link} to = '/'>Home</Button>

          {categories && categories.map((category, index) => (
            <Button
              key={index}
              sx={{ mx: 1 }}
              color="inherit"
              component={Link}
              to={`/category/${category}`}
            >
              {category}
            </Button>
          ))}
       
        </Toolbar>
      </AppBar>
    </Box>
  );
}



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import { Link } from 'react-router-dom';
// import { Button, useMediaQuery, useTheme } from '@mui/material';
// import { useSelector } from 'react-redux';

// export default function ButtonAppBar() {
//   const categories = useSelector(state => state.categories.categories);
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', color: '#11DB1E' }}>
//             Yo Shopper
//           </Typography>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="cart"
//             sx={{ mr: 2 }}
//             component={Link}
//             to="/cart"
//           >
//             <ShoppingCartIcon />
//           </IconButton>

//           <IconButton
//             size="large"
//             edge="end"
//             color="inherit"
//             aria-label="profile"
//           >
//             <AccountCircleIcon />
//           </IconButton>
//         </Toolbar>
//       </AppBar>

//       {isSmallScreen ? (
//         <AppBar position="static" color="default">
//           <Toolbar>
//             <Button sx={{ mx: 1 }} color="inherit" component={Link} to="/">
//               Home
//             </Button>
//           </Toolbar>
//         </AppBar>
//       ) : (
//         <AppBar position="static" color="default">
//           <Toolbar>
//             <Button sx={{ mx: 1 }} color="inherit" component={Link} to="/">
//               Home
//             </Button>

//             {categories &&
//               categories.map((category, index) => (
//                 <Button
//                   key={index}
//                   sx={{ mx: 1 }}
//                   color="inherit"
//                   component={Link}
//                   to={`/category/${category}`}
//                 >
//                   {category}
//                 </Button>
//               ))}
//           </Toolbar>
//         </AppBar>
//       )}
//     </Box>
//   );
// }
