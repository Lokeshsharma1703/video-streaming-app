import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { authReducer } from './reducres/auth.reducer'
import { channelVideosReducer, homeVideosReducer, searchedVideosReducer, selectedVideoReducer, subscriptionsChannelReducer } from './reducres/videos.reducer';
import { channelDetailsReducer } from './reducres/channel.reducer'
import { commentListReducer } from './reducres/comments.reducer';
import { relatedVideoReducer } from './reducres/videos.reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    homeVideos: homeVideosReducer,
    selectedVideo: selectedVideoReducer,
    channelDetails: channelDetailsReducer,
    commentList: commentListReducer,
    relatedVideos: relatedVideoReducer,
    searchedVideos: searchedVideosReducer,
    subscriptionsChannel: subscriptionsChannelReducer,
    channelVideos: channelVideosReducer
})

const store = createStore(rootReducer, {}, composeWithDevTools(applyMiddleware(thunk)))

export default store