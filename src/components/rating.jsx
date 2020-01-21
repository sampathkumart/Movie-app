import React from "react";
import { Header, Table, Rating, Image } from "semantic-ui-react";

const TableExamplePadded = () => (
  <div>
  <h2>Helen</h2>
   <Image
   src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c481efdc4b17312e749d0f120f3a8bb8ea046ac5765263218ecc32c471bd6f99._UR1920,1080_RI_SX356_FMwebp_.jpg"
    as='a'
    size='medium'
    href='http://www.Helen.com'
    target='_blank'
  />
  <h2>Cast</h2>
   <Header as="h3">
    <Image circular src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c481efdc4b17312e749d0f120f3a8bb8ea046ac5765263218ecc32c471bd6f99._UR1920,1080_RI_SX356_FMwebp_.jpg"/> <a href="">Anna Ben</a> <br/>
   <Image circular src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c481efdc4b17312e749d0f120f3a8bb8ea046ac5765263218ecc32c471bd6f99._UR1920,1080_RI_SX356_FMwebp_.jpg"/> <a href="">Binu Pappu</a> <br/>
   <Image circular src="https://images-eu.ssl-images-amazon.com/images/S/pv-target-images/c481efdc4b17312e749d0f120f3a8bb8ea046ac5765263218ecc32c471bd6f99._UR1920,1080_RI_SX356_FMwebp_.jpg" /> <a href="">Rony David</a>
  
   <h2>Rating</h2>
        <Rating icon='star' defaultRating={4} maxRating={5} />
    <h2>IMDb</h2>
        7.8/10
  <h2>Languages</h2>
        <a href=""> Malayalam, English</a>
  <h2>Director</h2>
         <a href=""> Mathukutty Xavier</a>
  <h2>Details</h2>
      Release Date: <a href=""> 15 Nov 2019</a> <br/>
      <br/>
      Music by: <a href="">Shaan Rahman</a>
        
  </Header>
</div>
);

export default TableExamplePadded;
