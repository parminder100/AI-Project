import {createStore} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const favorite = "favorite";

export const setFavourite = (aiTool) =>(
    {
        type: favorite,
        aiTool
    }
)

const initialState = {
    favorite: [],
};

const favouriteReducer = (state=initialState, action) =>{
    if(action.type === favorite){
        // Check if the aiTool already exists in the favorites list
        const isAlreadyInFavorites = state.favorite.some((tool)=> tool.id === action.aiTool.id);

        if(isAlreadyInFavorites){
            // If the aiTool exists, remove it from the favorites list
            return{
                ...state,
                favorite: state.favorite.filter((tool)=>tool.id !== action.aiTool.id),
            }
        }
        else{
            // If the aiTool does not exist, add it to the favorites list
            return{
                ...state,
                favorite: [...state.favorite, action.aiTool],
            }
        }
    }
    return state;
}

const persistConfig = {
    key: "root",
    storage,
}

const persistedReducer = persistReducer(persistConfig, favouriteReducer);

const Store = createStore(persistedReducer);
const persistor = persistStore(Store);
export {Store, persistor};