import { ref } from "vue";


class pqrsService {
    constructor() {
        this.pqrs = ref([])
    }
    getPqrs() {
        return this.pqrs;
    }
    async fetchAll() {
        const token = localStorage.getItem("token");
        try {
            const response = await fetch("http://localhost:3000/pqrs", {
                method: "GET",
                headers: { "Content-type": "application/json; charset=UTF-8","Authorization":`Bearer ${token}` }
            });
            const json = await response.json();
            this.pqrs.value = json;
        } catch (error) {
            console.log(error);
        }
    }
    async fetchGetId() {
        const user = JSON.parse(localStorage.getItem("user"));
        try {
            const response = await fetch(`http://localhost:3000/pqrs/user/${user._id}`, {
                method: "GET",
                headers: { "Content-type": "application/json; charset=UTF-8"}
            });
            const json = await response.json();
            this.pqrs.value = json;
        } catch (error) {
            console.log(error);
        }
    }
}
export { pqrsService }