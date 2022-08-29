import axios from 'axios'
import queryString from 'query-string'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

const getFirebaseToken = async () => {
    const currentUser = auth().currentUser;
    if (currentUser) {
        const jwt = await currentUser.getIdToken(true);
        // console.log('compare: ', jwt === tokenStorage);
        return jwt
    }

    const tokenStorage = await AsyncStorage.getItem('ACCESS_TOKEN');
    if (!tokenStorage) return null;

    return new Promise((resolve, reject) => {
        const waiter = setTimeout(() => {
            reject(null);
        }, 5000);
        const subcriber = auth().onAuthStateChanged(async (user) => {
            if (!user) {
                reject(null);
            }
            const token = await user.getIdToken(true);
            resolve(token);

            subcriber();
            clearTimeout(waiter);
        });
    })
}

const filterStringtify = (filter) => {
    const res = '';
    if (filter)
        res = 'orderBy="' + filter.key + '"&';
    else return null;
    if (filter.type === 'equal')
        res += `equalTo=${filter.data}`;
    else if (filter.type === 'start')
        res += `startAt=${filter.data}`;
    else if (filter.type === 'end')
        res += `endAt=${filter.data}`;
    else return null;
    res += '&';
    return String(res);
}

const REQUEST_TIMEOUT = 30000;

export const axiosClient = axios.create({
    // baseURL: 'myURL',
    baseURL: 'https://e-commerce-79103-default-rtdb.firebaseio.com/',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.defaults.withCredentials = true;

axiosClient.interceptors.request.use(async (config) => {
    const token = await getFirebaseToken();
    // console.log('request token: ', token);
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    //handle error
    console.log(error);
})

axiosClient.interceptors.response.use((response) => {
    // if (response && response.data) {
    //     return response.data;
    // }
    return response;
}, (error) => {
    //handle err
    console.log(error);
})

const APIUtils = {
    get: async (url, filter, headers) => {
        const flt = filterStringtify(filter);
        const token = await getFirebaseToken();
        const rsp = axiosClient.get(`${url}.json?${flt ? flt : ''}auth=${token}`, {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'text/plain',
                ...headers,
            },
            timeout: REQUEST_TIMEOUT
        })
            .catch(e => console.log('get error', e));
        return rsp;
    },
    put: async (url, data, headers) => {
        const token = await getFirebaseToken();
        const rsp = axiosClient.put(`${url}.json?auth=${token}`, data, {
            timeout: REQUEST_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        }).catch(e => console.log('put error', e))
        return rsp;
    },
    delete: async (url, body, headers) => {
        const token = await getFirebaseToken();
        const rsp = axiosClient.delete(`${url}.json?auth=${token}`, {
            timeout: REQUEST_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        }).catch(e => console.log('del error', e));
        return rsp;
    },
    patch: async (url, data, headers) => {
        const token = await getFirebaseToken();
        const rsp = axiosClient.patch(`${url}.json?auth=${token}`, data, {
            timeout: REQUEST_TIMEOUT,
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            }
        }).catch(e => console.log('patch error', e))
        return rsp;
    }
}

export default APIUtils;
