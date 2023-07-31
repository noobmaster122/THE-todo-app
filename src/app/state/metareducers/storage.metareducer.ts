import {merge, pick} from 'lodash-es';
import { StoreModule, ActionReducer, MetaReducer, Action } from '@ngrx/store';
 
export function storageMetaReducer<S, A extends Action = Action>(reducer: ActionReducer<S, A>) {
      return function(state: S, action: A): S {

        const nextState = reducer(state, action);
        //get saved state
        //state is saved as json string
        try{
          const savedState = JSON.parse(localStorage.getItem('__storage__') as string) || {};
          localStorage.setItem('__storage__', JSON.stringify(merge(savedState, nextState))); 
        }catch(e){
          console.log("error while saving state: ", e);
        }

        return nextState;
      };
    }
    
export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];