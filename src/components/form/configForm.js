export const config = (fullName, email, cel, age) => {

    const configForm = {
        fullName: {
            required: {
                name: fullName,
                message: '* El nombre es requerido'
            },
            pattern: {
                value: "^[ñíóáéú a-zA-Z ]+$",
                message: "* El nombre no puede contener caracteres especiales",
            },
        },
        email: {
            required: {
                name: email,
                message: '* El email es requerido'
            },
            pattern: {
                value: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$",
                message: "* El correo tiene un formato invalido",
            }
        },
        cel: {
            required: {
                name: cel,
                message: '* El celular es requerido'
            },
            pattern: {
                value: "^[0-9,$]*$",
                message: "* Solo puede contener números",
            }
        },
        age: {
            required: {
                name: age,
                message: '* La edad es requerida'
            },
            pattern: {
                value: "^[0-9,$]*$",
                message: "* Solo puede contener números",
            },
            rangeAge: {
                min: 18,
                max: 100,
                message: "No esta dentro del rango de edad"
            }
        }
    }

    return configForm
}