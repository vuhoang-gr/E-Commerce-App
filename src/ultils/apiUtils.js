import axios from 'axios'
import queryString from 'query-string'
import auth from '@react-native-firebase/auth'

const getFirebaseToken = async () => {
    const currentUser = auth().currentUser;
    if(currentUser) return currentUser.getIdToken();

    const rememberAccount = localStorage.getItem('firebaseui::rememberedAccounts');
    if(!rememberAccount) return null;

    return new Promise((resolve, reject) => {
        const waiter = setTimeout(() => {
            reject(null);
        }, 5000);
        const subcriber = auth().onAuthStateChanged(async (user) => {
            if (!user) {
              reject(null);
            }
            const token = await user.getIdToken();
            // console.log('[Axios] Logged in user token: ', token);
            resolve(token);

            subcriber();
            clearTimeout(waiter);
          });
    })
}

const axiosClient = axios.create({
    baseURL: 'myURL',
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
    const token = await getFirebaseToken();
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    //handle error
    console.log(error);
})

axiosClient.interceptors.response.use((response) => {
    if(response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    //handle err
    console.log(error);
})

export default axiosClient;