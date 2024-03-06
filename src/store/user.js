import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
        users: [{
            email: 'admin@twitter.com',
            password: '123456',
            username: 'KK123'
        }],
    }
    ),
    getters: {
        getUsers: (state) => state.users
    },
    actions: {
        registerUser(user) {
            //Login to check existing user
            this.users.append(user)
        }
    }
})