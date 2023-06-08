import httpService from "./http.service";

const userEndpoint = "user/";

const UserService = {
    get: async () => {
        const { data } = await httpService.get(userEndpoint);
        return data;
    },
    find: async (content) => {
        const { data } = await httpService.get(userEndpoint, content);
        return data;
    }
};

export default UserService;
