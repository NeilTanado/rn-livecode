
const data = [[0,0,0,0,0,0,0,0,0]]

export const takeData = () => {
  return (dispatch) =>{
    dispatch(setData(data));
  }
}

export const initializeGame = () => {
  data = [[0,0,0,0,0,0,0,0,0]]
}

 export const setData = (value) => {
   return {
     type: 'getData',
     payload: value
   }
 }

