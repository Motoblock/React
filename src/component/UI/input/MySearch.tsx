import React from 'react'; //{ useEffect }
import classes from './../input/MySearch.module.css';

const MySearch = (props: { type: string; placeholder: string }) => {
  //value: string
  // const [state, setState] = useState();
  // console.log(state);
  // useEffect(() => {
  //   const valueLoc = localStorage.getItem('search');
  //   if (!valueLoc) return;

  //   // if (valueLoc) setState({ valueLoc });
  // }, []);
  //onChange={e => setState(props.value)}
  return (
    <div>
      <input className={classes.search} {...props} />
    </div>
  );
};

export default MySearch;
