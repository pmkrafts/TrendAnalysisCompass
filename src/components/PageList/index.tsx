import * as React from 'react';
// import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { WbSunnyRounded } from '@mui/icons-material';

export default function NestedList() {
  const mainPages = ['home', 'platform', 'company', 'engagement']
  const internalPages = [
    [],
    ['tiktok', 'instagram', 'youtube', 'twitter'],
    ['megamart', 'kingbakers', 'smoothfuel'],
    ['views', 'likes', 'shares', 'comments', 'trending']
  ]

  const [open, setOpen] = React.useState('');

  const handleClick = (text: string) => {

    setOpen(open === text ? '' : text);

  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    // subheader={
    //   <ListSubheader component="div" id="nested-list-subheader">
    //     ALL Pages
    //   </ListSubheader>
    // }
    >
      {mainPages.map((text, index) => (
        <React.Fragment key={index + text + index} >
          <ListItemButton key={index + text} onClick={() => handleClick(text)}>
            <ListItemIcon>
              <WbSunnyRounded />
            </ListItemIcon>
            <ListItemText >{text}</ListItemText>
            {internalPages[index].length > 1 ? open == text ? <ExpandLess /> : <ExpandMore /> : null}
          </ListItemButton>
          {
            internalPages[index].length > 1 ?
              <Collapse key={index + 'collapse'} in={open == text} timeout="auto" unmountOnExit>
                {internalPages[index].map((subText, subIndex) => (
                  <List component="div" disablePadding key={subText + subIndex}>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <StarBorder />
                      </ListItemIcon>
                      <ListItemText primary={subText} />
                    </ListItemButton>
                  </List>
                ))}
              </Collapse> :
              null
          }
        </React.Fragment>
      ))}
    </List>
  );
}
