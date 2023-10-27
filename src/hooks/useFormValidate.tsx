import { typeFormData } from "../types/types";

import {useEffect, useState} from "react"


const useFormValidate = (formData: typeFormData) => {

    const blankValid = new RegExp(/\S/);
    const phoneValid = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    const emailValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    const [nameValid, setNameValid] = useState(false)
    const [streetValid, setStreetValid] = useState(false)
    const [cityValid, setCityValid] = useState(false)
    const [countryValid, setCountryValid] = useState(false)
    const [postcodeValid, setPostcodeValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const [overall, setOverall] = useState(false)


    useEffect(() => {                  
            if(formData.name && formData.name.first && formData.name.last && blankValid.test(formData.name.first) && blankValid.test(formData.name.last) && formData.name.first.length > 2 &&
            formData.name.last.length > 2) {
                setNameValid(true)
            } else {
                setNameValid(false)
            }

            if(formData.street && blankValid.test(formData.street) && formData.street.length > 2) {
                setStreetValid(true)
            } else {
                setStreetValid(false)
            }

            if(formData.city && blankValid.test(formData.city) && formData.city.length > 2) {
                setCityValid(true)
            } else {
                setCityValid(false)
            }

            if(formData.country) {
                setCountryValid(true)
            } else {
                setCountryValid(false)
            }

            if(formData.postcode && blankValid.test(formData.postcode) && formData.postcode.length > 2) {
                setPostcodeValid(true)
            } else {
                setPostcodeValid(false)
            }

            if(formData.email && emailValidation.test(formData.email)) {
                setEmailValid(true)
            } else {
                setEmailValid(false)
            }
            setOverall([nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid].every((bl) => bl == true))
       
    }, [formData])

    return {overall, nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid}
}

export default useFormValidate