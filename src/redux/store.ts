// Importaciones de modelos y configuración de Redux
import { Person } from "@/models"; // Importa el modelo de Person desde "@/models"
import { configureStore } from "@reduxjs/toolkit"; // Importa la función configureStore desde "@reduxjs/toolkit"
import { favoritesSlice, peopleSlice } from "./states"; // Importa los slices de favorites y people desde "./states"

// Definición de la interfaz del store de la aplicación
export interface AppStore {
    people: Person[]; // Un array de personas
    favorites: Person[]; // Un array de personas marcadas como favoritas
}

// Configuración del store de Redux
export default configureStore<AppStore>({
    reducer: {
        people: peopleSlice.reducer, // Reductor para la parte de people del estado
        favorites: favoritesSlice.reducer // Reductor para la parte de favorites del estado
    }
})
