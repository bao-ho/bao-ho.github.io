import React, { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Engineering from '@mui/icons-material/Engineering';

const itemData = [
  {
    img: '/assets/img/solar-system-js/sn-scatter-plot.png',
    imgHover: '/assets/img/solar-system-js/sn-scatter-plot.gif',
    href: '/posts/sn-scatter-plot/',
    title: "Qlik's New Scatter Plot",
    subtitle: 'Javascript, PicassoJS',
  },
  {
    img: '/assets/img/solar-system-js/node-flashy.png',
    imgHover: '/assets/img/solar-system-js/node-flashy.gif',
    href: '/posts/flashy-a-flashcard-webapp/',
    title: 'Flashcard Webapp',
    subtitle: 'Node, ExpressJS, MongoDB/Mongoose, PassportJS',
  },
  {
    img: '/assets/img/solar-system-js/js-solar-system.png',
    imgHover: '/assets/img/solar-system-js/js-solar-system.gif',
    href: '/posts/solar-system-simulator-with-javascript/',
    title: 'Solar System Simulator',
    subtitle: 'Javascript, HammerJS, Bootstrap',
  },
  {
    img: '/assets/img/solar-system-js/cpp-3d-model-viewer.png',
    imgHover: '/assets/img/solar-system-js/cpp-3d-model-viewer.gif',
    href: '/posts/posts/3d-model-viewer/',
    title: '3D Model Viewer',
    subtitle: 'C++, Visual Studio, OpenGL, Assimp',
  },
  {
    img: '/assets/img/solar-system-js/js-2048.png',
    imgHover: '/assets/img/solar-system-js/js-2048.gif',
    href: '/posts/2048-game/',
    title: '2048 Game Replica',
    subtitle: 'Javascript, HTML, CSS',
  },
  {
    img: '/assets/img/solar-system-js/cpp-solar-system.png',
    imgHover: '/assets/img/solar-system-js/cpp-solar-system.gif',
    href: '/posts/solar-system-simulator/',
    title: 'Solar System Simulator',
    subtitle: 'C++, Visual Studio, Qt, VTK',
  },
];

export default function Gallery() {
  const [openCollapse, setOpenCollapse] = useState(true);
  const handleCollapseClick = () => {
    setOpenCollapse(!openCollapse);
  };

  const handleMouseOver = (e, item) => {
    e.target.src = `${item.imgHover}?w=800&h=600&fit=crop&auto=format`;
    e.target.srcSet = `${item.imgHover}?w=800&h=600&fit=crop&auto=format&dpr=2 2x`;
  };

  const handleMouseOut = (e, item) => {
    e.target.src = `${item.img}?w=800&h=600&fit=crop&auto=format`;
    e.target.srcSet = `${item.img}?w=800&h=600&fit=crop&auto=format&dpr=2 2x`;
  };

  return (
    <Box sx={{ border: '1px solid #d5d5d5', borderRadius: '4px' }}>
      <Button
        onClick={handleCollapseClick}
        title={openCollapse ? 'Hide Session' : 'Show Session'}
        sx={{
          display: 'flex',
          width: '100%',
          height: '3rem',
          padding: 2,
          bgcolor: '#FAFAFA',
          textTransform: 'none',
        }}
      >
        <Engineering />
        <Typography
          variant="h6"
          align="center"
          sx={{
            flexGrow: 1,
            fontFamily: "'Lato', 'Microsoft Yahei', sans-serif",
          }}
        >
          Development
        </Typography>
        {openCollapse ? <ExpandLess /> : <ExpandMore />}
      </Button>
      <Collapse
        in={openCollapse}
        timeout='auto'
        unmountOnExit
        sx={{
          backgroundColor: 'white',
          border: '1px solid transparent',
          borderRadius: '0px 0px 4px 4px',
        }}
      >
        <ImageList sx={{ padding: '0.25rem' }}>
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              sx={{
                margin: '0.25rem',
                padding: '0px',
                borderRadius: '8px',
                boxShadow: 3,
              }}
            >
              <a
                href={item.href}
                style={{ color: '#333333', borderBottom: '0px' }}
              >
                <img
                  src={`${item.img}?w=800&h=600&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=800&h=600&fit=crop&auto=format&dpr=2 2x`}
                  onMouseOver={(e) => handleMouseOver(e, item)}
                  onMouseOut={(e) => handleMouseOut(e, item)}
                  style={{ borderRadius: '8px 8px 0px 0px' }}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={item.title}
                  subtitle={item.subtitle}
                  position="below"
                  sx={{
                    textAlign: 'center',
                    bgcolor: '#f2f2f2',
                    borderRadius: '0px 0px 8px 8px',
                    '& .MuiImageListItemBar-subtitle': { lineHeight: 1.5 },
                  }}
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Collapse>
    </Box>
  );
}
