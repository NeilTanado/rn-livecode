
const data = [{id:1,var:''},{id:2,var:''},{id:3,var:''},{id:4,var:''},{id:5,var:''},{id:6,var:''},{id:7,var:''}]

export const takeData = () => {
  return (dispatch) =>{
    dispatch(setData(data));
  }
}


 export const setData = (value) => {
   return {
     type: 'getData',
     payload: value
   }
 }

