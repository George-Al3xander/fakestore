import { typeFormData } from "../types/types";

import {useEffect, useState} from "react"
import { useOrderInfoValid } from "./useOreder";


const useFormValidate = (formData: typeFormData) => {
    const {setOrderInfoValid} = useOrderInfoValid()
    const blankValid = new RegExp(/\S/);
    const phoneValidation = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    const emailValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    const [nameValid, setNameValid] = useState(false)
    const [streetValid, setStreetValid] = useState(false)
    const [cityValid, setCityValid] = useState(false)
    const [countryValid, setCountryValid] = useState(false)
    const [postcodeValid, setPostcodeValid] = useState(false)
    const [emailValid, setEmailValid] = useState(false)    
    const [phoneValid,setPhoneValid] = useState(true)
    const [apartmentValid,setApartmentValid] = useState(true)

    const  stringValid = (item: string | string[]): boolean => {
        if(Array.isArray(item)) {
            return item.every((el) => blankValid.test(el)  && el.length > 2)
        } else {
            return (blankValid.test(item) &&   item.length > 2)
        }
    }

    useEffect(() => {                  
            if(stringValid([formData.name.first, formData.name.last])) {
                setNameValid(true)
            } else {
                setNameValid(false)
            }

            if(stringValid(formData.street)) {
                setStreetValid(true)
            } else {
                setStreetValid(false)
            }

            if(stringValid(formData.city)) {
                setCityValid(true)
            } else {
                setCityValid(false)
            }

            if(formData.country) {
                setCountryValid(true)
            } else {
                setCountryValid(false)
            }

            if(stringValid(formData.postcode)) {
                setPostcodeValid(true)
            } else {
                setPostcodeValid(false)
            }

            if(emailValidation.test(formData.email)) {
                setEmailValid(true)
            } else {
                setEmailValid(false)
            }
            if(formData.phone) {
                if(phoneValidation.test(formData.phone)) {
                    setPhoneValid(true)
                } else {
                    setPhoneValid(false)

                }
            } else {
                setPhoneValid(true)
            }

            if(blankValid.test(formData.country as string)) {
                setCountryValid(true)
            } else {
                setCountryValid(false)
            }

            if(formData.apartment) {
                if(stringValid(formData.apartment)) {
                    setApartmentValid(true)
                } else {
                    setApartmentValid(false)
                }
            } else {
                setApartmentValid(true)
            }

            

            setOrderInfoValid([ nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid, phoneValid, apartmentValid].every((bl) => bl == true))
       
    }, [formData])

    return {nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid, phoneValid, apartmentValid}
}

export default useFormValidate