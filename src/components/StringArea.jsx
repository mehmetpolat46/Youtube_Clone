import { useState } from "react";

const StringArea = ({ text, maxChar }) => {
  //  console.log('asdas',text)
  const [showFull, setShowFull] = useState(false);

  //Metnin Bölünüp Bölünmeyeceğine Karar Verme
  let shortText = text;
  if (text?.length > maxChar && !showFull) {
    shortText = text.slice(0, maxChar) + "  ...Daha Fazla";
  }
  //console.log('short',shortText)

  return (
    <p onClick={()=>setShowFull(!showFull)}>
      {shortText?.split("\n").map((descLine,i) => (
        <span key={i}>
          {descLine} <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
