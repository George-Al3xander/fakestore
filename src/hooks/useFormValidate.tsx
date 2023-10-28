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
            setNameValid(stringValid([formData.name.first, formData.name.last]))
            setStreetValid(stringValid(formData.street))
            setCityValid(stringValid(formData.city))
            setPostcodeValid(stringValid(formData.postcode))
            setEmailValid(emailValidation.test(formData.email))
            setCountryValid(blankValid.test(formData.country))
            

            if(formData.phone) {
                setPhoneValid(phoneValidation.test(formData.phone))                
            } else {
                setPhoneValid(true)
            }
            
            if(formData.apartment) {                
                setApartmentValid(stringValid(formData.apartment))                
            } else {
                setApartmentValid(true)
            }
            

              
            setOrderInfoValid([nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid, phoneValid, apartmentValid].every((bl) => bl == true))
       
    }, [formData])

    return {nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid, phoneValid, apartmentValid}
}

export default useFormValidate