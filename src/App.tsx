import { Box, Divider, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useAppStyles } from './App.styles';
import OverflowTooltip from './OverflowTooltip';

const App = () => {
  const { root, paper, containerBox, overflowBox } = useAppStyles();

  const text = `There's a passage I got memorized, seems appropriate for this situation: Ezekiel 25:17. 
    "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. 
    Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. 
    And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. 
    And you will know my name is the Lord when I lay my vengeance upon you."`;

  return (
    <div className={root}>
      <Paper elevation={3} className={paper}>
        <Typography variant='h2'>Overflow Tooltip Example</Typography>
        <Box className={containerBox} mt={3}>
          <Box>
            <OverflowTooltip title={text}>
              <Typography variant='body1'>{text}</Typography>
            </OverflowTooltip>
          </Box>
          <Divider orientation='vertical' />
          <Box className={overflowBox}>
            <OverflowTooltip title={text}>
              <Typography variant='body1' noWrap={true}>
                {text}
              </Typography>
            </OverflowTooltip>
          </Box>
        </Box>
      </Paper>
      {/*  */}
    </div>
  );
};

export default App;
