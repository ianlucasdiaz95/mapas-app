import { PlacesResponse, Feature } from './../../interfaces/places';
import { ActionTree } from 'vuex';
import { PlacesState } from './state';
import { StateInterface } from '../index';
import { searchApi } from '@/api';


const actions: ActionTree<PlacesState, StateInterface> = {
    getInitialLocation({ commit }) {
        //todo: colocar loading

        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                return commit('setLngLat', { lng: coords.longitude, lat: coords.latitude})
            },
            ( err ) => {
                console.error(err);
                throw new Error('No geolocation :(')
            })
    },

    async searchPlacesByTerm({commit, state}, query:string): Promise<Feature[]>{        

        if ( query.length == 0 ){
            commit('setPlaces', []);
            return [];
        }

        if( !state.userLocation ){
            throw new Error('No hay ubicación del usuario.');
        }

        commit('setIsLoadingPlaces', true)

        const { data } = await searchApi.get<PlacesResponse>(`/${query}.json/`, {
            params: {
                proximity: state.userLocation?.join(',')
            }
        })

        commit('setPlaces', data.features)

        return data.features
    }
}



export default actions;