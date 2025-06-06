import { random,floor} from 'lodash'
import { avatarColors } from './static.data'
import { addUser,clearUser } from "../../redux-tool-kit/reducers/user/user.reducer";

export class Utils{
    static avatarColor(){
        return avatarColors(floor(random(0.9*avatarColors.length)))
    }
    static generateAvatar(text, backgroundColor, foregroundColor = 'white') {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
    
        canvas.width = 200;
        canvas.height = 200;
    
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        // Draw text
        context.font = 'normal 80px sans-serif';
        context.fillStyle = foregroundColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
    
        return canvas.toDataURL('image/png');
      } 
      static dispatchUser(result, pageReload, dispatch, setUser) {
        pageReload(true);
        dispatch(addUser({token: result.data.token,profile: result.data.user}));
        setUser(result.data.user);
   }
     static clearStore({dispatch,deleteStorageUsername,deleteSessionPageReload,setLoggedIn}) {
       dispatch(clearUser());
       deleteStorageUsername();
       deleteSessionPageReload();
       setLoggedIn(false);
     }
     static appEnvironment() {
      const env= process.env.REACT_APP_ENVIRONMENT;
      if (env === 'production') {
        return 'PROD';
      } else if (env === 'staging') {
        return 'STAGING';
      } else if (env === 'development') {
        return 'DEV';
      } else {
        return 'UNKNOWN';
      }
     }
}