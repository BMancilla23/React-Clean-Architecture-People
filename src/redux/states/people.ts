// Importaciones de modelos, utilidades y Redux Toolkit
import { LocalStorageTypes, Person } from "@/models"; // Importa modelos relacionados con LocalStorage y Person desde "@/models"
import { getLocalStorage, setLocalStorage } from "@/utils"; // Importa funciones de utilidad para obtener y establecer datos en el almacenamiento local desde "@/utils"
import { createSlice } from "@reduxjs/toolkit"; // Importa la función createSlice desde "@reduxjs/toolkit"

// Estado inicial para peopleSlice
const initialState: Person[] = [];

// Definición del slice de Redux para manejar la lista de personas
export const peopleSlice = createSlice({
    name: 'people', // Nombre del slice
    initialState: getLocalStorage(LocalStorageTypes.PEOPLE) ? JSON.parse(getLocalStorage(LocalStorageTypes.PEOPLE) as string) : initialState, // Estado inicial obtenido del almacenamiento local si está disponible, de lo contrario, es un array vacío
    reducers: {
        // Reductor para agregar personas a la lista
        addPeople: (state, action) => {
            // Guarda la nueva lista de personas en el estado
            const newState = action.payload;
            // Guarda la lista de personas actualizada en el almacenamiento local
            setLocalStorage(LocalStorageTypes.PEOPLE, JSON.stringify(newState));
            // Devuelve la lista de personas actualizada
            return newState;
        },
    }
});

export const {addPeople} = peopleSlice.actions;