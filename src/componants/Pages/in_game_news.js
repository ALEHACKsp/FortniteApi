import React from 'react';

import styled from 'styled-components';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';


const CardContainer = styled.div`
  width: 30%;
  @media (max-width: 748px) {
    width: 100%;
    height: auto;
  }
`;

const NewsSection = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
padding-bottom: 2.5rem;
@media (max-width: 748px) {
  flex-direction: column;
}
`
const News = ({ news, location }) => {

  // const [value, setvalue] = useState(false);

  // const onChange = (input) => {
  //     setvalue(input);
  // };

  //display short version of latest news on homepage, else display all.
const displayNews = location.location.pathname === '/home' || location.location.pathname === '/' ? news && news.data.slice(0,3).map((newsObj, key) => {
    const { title, body, image } = newsObj;
    return ( 
      <CardContainer key={key}>
        <Card>
     <CardActionArea>
       <CardMedia
         component="img"
         alt={title}
         image={image}
         title={title}
       />
       <CardContent style={{minHeight: '7rem'}}>
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
        </CardContainer>
    )
}) : location.location.pathname === '/news' ? news && news.data.map((newsObj, key) => {
  const { title, body, image } = newsObj;
  return ( 
    <CardContainer key={key}>
      <Card>
   <CardActionArea>
     <CardMedia
       component="img"
       alt={title}
       image={image}
       title={title}
     />
     <CardContent style={{minHeight: '7rem'}}>
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
      </CardContainer>
  )
}) : news && news.data.map((newsObj, key) => {
      const { title, body, image} = newsObj;
      return ( 
        <CardContainer key={key}>
           <h3>Lastest in-game news</h3>
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
          </CardContainer>
      )
  })
    return (
       <NewsSection>
           {displayNews}
       </NewsSection>
    );
  };
  
  export default News;