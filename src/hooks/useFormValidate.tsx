import { typeFormData } from "../types/types";
import {useEffect, useState} from "react"
import { useOrderInfoValid } from "./useOreder";



const useFormValidate = (formData: typeFormData) => {    
    const {setOrderInfoValid} = useOrderInfoValid()
    const blankValid = new RegExp(/\S/);
    const phoneValidation = new RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);
    const emailValidation = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    
    const  stringValid = (item: string | string[]): boolean => {
        if(Array.isArray(item)) {
            return item.every((el) => blankValid.test(el)  && el.length > 2)
        } else {
            return (blankValid.test(item) &&   item.length > 2)
        }
    }

    
    const [nameValid, setNameValid] = useState(stringValid([formData.name.first, formData.name.last]))
    const [streetValid, setStreetValid] = useState(stringValid(formData.street))
    const [cityValid, setCityValid] = useState(stringValid(formData.city))
    const [countryValid, setCountryValid] = useState(stringValid(formData.postcode))
    const [postcodeValid, setPostcodeValid] = useState(emailValidation.test(formData.email))
    const [emailValid, setEmailValid] = useState(blankValid.test(formData.country))    
    const [phoneValid,setPhoneValid] = useState(formData.phone != undefined && blankValid.test(formData.phone) ? phoneValidation.test(formData.phone) : true)
    const [apartmentValid,setApartmentValid] = useState(formData.apartment != undefined && blankValid.test(formData.apartment) ? stringValid(formData.apartment) : true)
    
    useEffect(() => {         
        const checkName = stringValid([formData.name.first, formData.name.last]);
        const checkStreet = stringValid(formData.street)
        const checkCity = stringValid(formData.city)
        const checkPostcode = stringValid(formData.postcode)
        const checkEmail = emailValidation.test(formData.email)
        const checkCountry = blankValid.test(formData.country)
        const checkPhone = formData.phone != undefined && blankValid.test(formData.phone) ? phoneValidation.test(formData.phone) : true
        const checkApartment = formData.apartment != undefined && blankValid.test(formData.apartment) ? stringValid(formData.apartment) : true
        
        setNameValid(checkName)
        setStreetValid(checkStreet)
        setCityValid(checkCity)
        setPostcodeValid(checkPostcode)
        setEmailValid(checkEmail)
        setCountryValid(checkCountry)
        setPhoneValid(checkPhone)                
        setApartmentValid(checkApartment)                
                            
        setOrderInfoValid([checkName, checkStreet, checkCity, checkPostcode,checkEmail,checkCountry, checkPhone,checkApartment].every((bl) => bl == true));       
    }, [formData])



    return {nameValid, streetValid, cityValid, postcodeValid, emailValid, countryValid, phoneValid, apartmentValid}
}

export default useFormValidate