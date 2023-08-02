import {merge, pick} from 'lodash-es';
import { StoreModule, ActionReducer, MetaReducer, Action } from '@ngrx/store';
 
export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>): ActionReducer<S, A>{
      return function(state: S | undefined, action: A): S {

        const nextState = reducer(state, action);
        //get saved state
        //state is saved as json string
        try{
          const savedState = JSON.parse(localStorage.getItem('__storage__') as string) || {};
          if((action.type === "@ngrx/store/init" || action.type === "@ngrx/effects/init")) return savedState ;
          
          localStorage.setItem("__storage__", JSON.stringify(merge(savedState, nextState))); 

        }catch(e){
          console.log("error while saving state: ", e);
          localStorage.removeItem("__storage__");//reset state
        }

        return nextState;
      };
    }
    
// export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];