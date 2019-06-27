import React, { useState } from 'react';

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';



const News = ({ news, location }) => {

  const [value, setvalue] = useState(false);

  const onChange = (input) => {
      setvalue(input);
  };



// console.log("this is location", location.location.pathname)

const displayNews = news && news.data.map((newsObj, key) => {
  news.data = location.location.pathname === "/" ? news.data.slice(0, 3) : news.data;

    const { title, body, image, time, meta} = newsObj;
    return ( 
      <div key={key}>
        <Card>
     <CardActionArea>
       <CardMedia
         component="img"
         alt={title}
         height="140"
         image={image}
         title={title}
       />
       <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
          {title}
         </Typography>
         <Typography variant="body2" color="textSecondary" component="p">
         {body}
         </Typography>
       </CardContent>
     </CardActionArea>
     <CardActions>
           <FacebookShareButton
               url={image}
               quote={body}
               hashtag={'#unvaulted'}
               style={{marginLeft: "10px"}}
               className="Demo__some-network__share-button">
               <FacebookIcon
                 size={25}
                 round />
             </FacebookShareButton>
             <TwitterShareButton
               url={'https://unvaulted.co.uk'}
               title={title}
               via={body}
               hashtag={'#unvaulted'}
               style={{marginLeft: "10px"}}
               className="Demo__some-network__share-button">    
               <TwitterIcon
                 size={25}
                 round />
             </TwitterShareButton>
     </CardActions>
   </Card>
        </div>
    )
})
    return (
       <div>
           {displayNews}
           {/* <button onClick={onChange(true)}>Click to show more news!</button> */}
       </div>
    );
  };
  
  export default News;