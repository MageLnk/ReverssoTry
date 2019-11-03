const getState = ({ getStore, setStore }) => {
	return {
		store: {
			login: {},
			dataUsers: {
				nickname: "Usuario local",
				password: "Contraseña local",
				mail: "correo@local.cl",
				bornDate: "2000-06-22"
			},
			dataUsersAux: {
				nickname: "Usuario local",
				password: "Contraseña local",
				mail: "correo@local.cl",
				bornDate: "2000-06-22"
			}
		},
		actions: {
			inputDatosLogin: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.login;
				oldStore[name] = evento.target.value;
				setStore({ login: oldStore });
			},
			inputDatosUsuario: evento => {
				const store = getStore();
				const name = evento.target.name;
				let oldStore = store.dataUsersAux;
				oldStore[name] = evento.target.value;
				setStore({ dataUsersAux: oldStore });
			},
			obtenerUsuarios: e => {
				fetch("https://api.reversso.cl/user", {
					method: "GET"
				})
					.then(resp => resp.json())
					.then(resp => {
						setStore({
							dataUsers: resp
						});
						//console.log("Lo que trae el fetch get de la lista todo", resp);
					});
			},
			login: (infologin, redirect) => {
				let auxiliar1 = "X-auth";
				let auxiliar2 = "Clave123";
				fetch("https://api.reversso.cl/login", {
					method: "Post",
					body: JSON.stringify(infologin),
					headers: {
						"Content-Type": "application/json",
						auxiliar1: auxiliar2
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(resp => {
						//Acá usualmente pongo el redirect, ya que la API debería andar bien
					});
					alert("El servidor no responde, pero accederá a una versión local del sistema");
					redirect.push("/info");
			},
			enviarUsuario: (infouser, redirect) => {
				let store = getStore();
				fetch("https://api.reversso.cl/login", {
					method: "Post",
					body: JSON.stringify(infouser),
					headers: {
						"Content-Type": "application/json",
					}
				})
					.then(resp => {
						return resp.json();
					})
					.then(resp => {
						//Acá usualmente pongo el redirect, ya que la API debería andar bien
					});
					alert("El servidor no responde, pero se editará el usuario local");
					let aux = store.dataUsersAux
					setStore({ dataUsers: aux});
			}
		}
	};
};

export default getState;
