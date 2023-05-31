import { ref } from "vue";
import Swal from 'sweetalert2'
import { sweetMessage } from "../util/sweetMessage";
import { router } from "../routes";

class authService {
    constructor() {
        this.auth = ref({});
        this.message = ref({});
    }
    async login(email, password) {
        let data = {
            email,
            password
        }
        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                body: JSON.stringify(data),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            const json = await response.json();
            if (json.token) {
                localStorage.setItem("token", json.token);
                console.log(JSON.stringify(json.user));
                localStorage.setItem("user", JSON.stringify(json.user));
                router.push("dashboard" )
            } else {
                let message = json.error == "Not found user" ? "Usuario no existe" : "Email o contraseña incorrecta";
                sweetMessage("¡Error!", "error", message);
            }

        } catch (error) {
            console.log(error);
        }
    }
    logout() {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        router.push("/");
    }
}
export { authService }