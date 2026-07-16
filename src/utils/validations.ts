// Validation function for the text, email and DNI with Regex tests

export function validateText(text: string): string {
    const regex = /^[A-Za-záéíóúñ]{2,}([\s][A-Za-záéíóúñ]{2,})*$/
    if (text.trim() === "") {
        return "Este campo no puede estar vacío"
    }    
    if (regex.test(text)) {
        return ""}

        return "Texto incorrecto"
    } 

export function validateEmail(email: string): string {
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/

    if (email.trim() === "") {
        return "Este campo no puede estar vacío"
    } 
    if (regex.test(email)) {
        return ""}

        return "Email incorrecto"
    }

export function validateDni(dni: string): string {
    const regex = /^[0-9]{8}[A-Z]$/

    if (dni.trim() === "") {
        return "Este campo no puede estar vacío"
    }
    if (regex.test(dni)) {
        return ""}

        return "DNI incorrecto"
    }