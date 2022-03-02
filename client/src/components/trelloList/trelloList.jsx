import React from "react";
import { Grid } from "@mui/material";
import TrelloCard from "../trelloCards/trelloCard"
import TrelloActionButton from "../TrelloActionButton/TrelloActionButton";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import "./trelloList.scss"

const TrelloList = ({ title, cards }) => {

  return (
    <div className="trelloList">
      <Grid container spacing={2}>
        <Grid item xs={12} flex={1}
          display='flex'
          justifyContent="space-between"
        >
          {title}
          <MoreHorizIcon />
        </Grid>
          {cards.map(card => <Grid item xs={12} key={card.id}>
          <TrelloCard text={card.text} />
        </Grid>
        )}
      </Grid>
      <TrelloActionButton />
    </div>
  )
}

export default TrelloList