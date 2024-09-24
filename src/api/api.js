import axios from "axios";
import api_config from "../api";

const { API_URL, API_KEY } = api_config;

const instance = axios.create({
    withCredentials: true,
    baseURL: API_URL,
    headers: {
        "API-KEY": API_KEY
    }
});

export const usersApi = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {});
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`, {});
    },

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    }
};

export const authAPI = {
    async me() {
        const response = await instance.get(`auth/me`);
        return response.data;
    }
}
