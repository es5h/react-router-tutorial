import {useLocation, useSearchParams} from "react-router-dom";

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({mode, detail: detail !== 'true'});
  };

  const onIncreaseMode = () =>{
    const nextMode = mode ===null? 1: parseInt(mode) + 1;
    setSearchParams({mode: nextMode, detail});
  }


  const location = useLocation();

  return (
    <div>
      <h1>About</h1>
      <p>This project is made by React Router</p>
      <p onClick={onToggleDetail}>detail : {detail} </p>
      <p onClick={onIncreaseMode}>mode: {mode}</p>
    </div>
  )
}

export default About;