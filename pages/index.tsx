import React, { useState } from "react";
import { Htag, P, Button, Rating} from '../components';
import { withLayout } from "../Layout/Layout";

function Home(): JSX.Element {
  const [rating, setRating] = useState<number> (4);

  return (
<>

<Htag tag="h1" >olololo</Htag>
<P>dsadas</P>
<Button apperance="primary" arrow="right">hola</Button>
<Button apperance="ghost" arrow="right">adios</Button>
<P size='l'>Большой</P>
<P>Средний</P>
<P size='s'>Маленький</P>
<Rating rating={rating} isEditable setRating={setRating}> </Rating>
</>
  )
}

export default withLayout(Home);