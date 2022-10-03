import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid, Switch } from '@mui/material';
import '../../Assets/premissionsGroupStyle.css'

const PremissionsGroup = props => {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header" >
        <Typography>Premissions Group {props.whichOne}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          <Grid container spacing={2}>
            {Array(5).fill(1).map((el, i) => <>
                  <Grid item sm={10}>
                    <b className='accordionText'>Premissions {props.whichOne}{i + 1}</b>
                  </Grid>
                  <Grid item sm={1}>
                    <b className='accordionText'><Switch></Switch></b>
                  </Grid>
              </>
             )}
          </Grid>
        </Typography>
      </AccordionDetails>
    </Accordion>
  )
}

export default PremissionsGroup