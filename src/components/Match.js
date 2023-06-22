import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Match = () => {
  const [match, setMatch] = useState(false);

  const { sign } = useContext(HoroscopeContext);

  const handleToggle = () => {
    setMatch(!match);
  }
  return (<div>
    <button onClick={handleToggle}>
      {!match ? 'Show' : 'Hide'} Match
    </button>
    {match && <h4>
      Match: {sign.match}
    </h4>}
  </div>)
}

export default Match