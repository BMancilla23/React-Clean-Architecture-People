// Función para guardar un valor en el almacenamiento local
export const setLocalStorage = (key: string, value: any) => {
    // Convierte el valor a cadena JSON y lo guarda en el almacenamiento local asociado a la clave especificada
    localStorage.setItem(key, JSON.stringify(value));
}

// Función para obtener un valor del almacenamiento local
export const getLocalStorage = (key: string) => {
    // Obtiene la cadena JSON asociada a la clave especificada desde el almacenamiento local
    const value = localStorage.getItem(key);
    // Si se encontró una cadena JSON, la parsea y devuelve; de lo contrario, devuelve null
    return value ? JSON.parse(value) : null;
}
