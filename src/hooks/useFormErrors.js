import { useState } from "react"

export const useFormErrors = () => {
    const [errors, setErrors] = useState()

    const handleError = (submit) => {
        setErrors(submit)
    }

    const handleMenssage = () => {

        const errorsMensagge = {}

        for (const key in errors) {

            const element = errors[key];

            if (element.rangeAge) {
                if (!(element.required.name <= element.rangeAge.max && element.required.name >= element.rangeAge.min)) {
                    errorsMensagge[key] = element.rangeAge.message
                }
            }

            if (element.pattern && !RegExp(element.pattern.value).test(element.required.name)) {
                errorsMensagge[key] = element.pattern.message
            }

            if (element.required.name === '' || element.required.name === undefined) {
                errorsMensagge[key] = element.required.message
            }
        }

        return errorsMensagge

    }

    return [handleError, handleMenssage]
}