let basePath = 'http://www.pomanager.it/api';

export const ROUTE_USER_DATA = '/users';

export function getRoute(route){
    switch(route){
        case ROUTE_USER_DATA:
            return basePath+ROUTE_USER_DATA;
    }
}
