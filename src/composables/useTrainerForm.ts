import { reactive, ref, watch } from 'vue'

import type { CreateTrainer, } from '@/interfaces/trainer'
import type { TrainerErrors, TrainerTouched } from '@/interfaces/trainerForm';

import { validateText, validateDni, validateEmail } from '@/utils/validations';


export function useTrainerForm() {
    // Constants
    const fields = [
    "name",
    "surname",
    "dni",
    "email"
    ] satisfies (keyof CreateTrainer)[]

    // Initial values
    const initialTrainer: CreateTrainer = {
        name: '',
        surname: '',
        dni: '',
        email: '',
    }

    const initialErrors: TrainerErrors = {
        name: '',
        surname: '',
        dni: '',
        email: ''
    }

    const initialTouched: TrainerTouched = {
        name: false,
        surname: false,
        dni: false,
        email: false
    }

    const validators: Record<keyof CreateTrainer, (value: string) => string> = {
        name: validateText,
        surname: validateText,
        dni: validateDni,
        email: validateEmail
    }

    // Reactive state variables
    const trainer = ref({ ...initialTrainer })

    const errors = reactive({ ...initialErrors })

    const touched = reactive({ ...initialTouched })

    function validateField(field: keyof CreateTrainer, value: string) {
        errors[field] = validators[field](value)
    }

    // Watch function to observe field changes
    watch(
        fields.map(field => () => trainer.value[field]),
        () => {
            fields.forEach(field => {
                if (touched[field]) {
                    validateField(field, trainer.value[field])
                }
            })
    })

    function handleBlur(field: keyof CreateTrainer) {
        touched[field] = true
        validateField(field, trainer.value[field])
    }



    function touchAllFields() {
        fields.forEach(field => {
            touched[field] = true
        })
    }

    function validateAllFields() {
        fields.forEach(field => {
            validateField(field, trainer.value[field])
        })
    }

    // Function to validate if there is an error message
    function isFormValid() {
        return !Object.values(errors).some((message) => message.length > 0)
    }

    function reset() {
        trainer.value = { ...initialTrainer }

        Object.assign(errors, initialErrors)
        Object.assign(touched, initialTouched)
    }

    function submit() {
        touchAllFields()
        validateAllFields()
        if (!isFormValid()) {
            return null
        }

        const trainerData = { ...trainer.value }

        reset()

        return trainerData
    }

    return {
        trainer,
        errors,
        handleBlur,
        submit
    }
}