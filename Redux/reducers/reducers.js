const initialState = {
    cvData: {
      name: 'JOHN KERARIO GIMASE',
      slack: 'JOHN KERARIO GIMASE',
      github: 'https://github.com/JK11751',
      bio: 'Tech enthusiast || Software Developer || Always learning and exploring new frontiers in the world of tech',
    },
  };
  
  export const cvReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_CV_DATA':
        return { ...state, cvData: { ...state.cvData, ...action.payload } };
      default:
        return state;
    }
  };
  