import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"
import { useParams } from "react-router-dom";
import { useNavigate} from "react-router-dom";



export const useForm =(initialForm,validateForm)=>{

    const { id } = useParams()

        
    let navigate = useNavigate();

    const[form,setForm]= useState(initialForm)
    const[errors,setErrors]= useState({})
    const[loading,setLoading]= useState(false)
    const[response,setResponse]= useState(null)
    

    const URLCADASTRO="http://localhost:3002/api/estudantes"
    const URLoginE="http://localhost:3002/api/loginEstudantes"
    const URLoginP= "http://localhost:3002/api/loginProfessor"
    const URLoginA="http://localhost:3002/api/loginAdministrador"

    const handleChange =(e)=>{
        const {name,value}= e.target
        setForm({
            ...form,
            [name]:value
        })
    } 
    const handleBlur =(e)=>{
        handleChange(e)
        setErrors(validateForm(form))
    } 
    
    const handleSubmit =  (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario")
            setLoading(true)
            const requestInit = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            }
    
            fetch(URLCADASTRO, requestInit)
                .then(res => res.text())
                .then((res) => {
                 
                setLoading(false)
              setResponse(true)
             

            })
            
                

        }else{
            Swal.fire(
                'error!',
                'Problemas para editar o registro',
                'error'
              )

        }
    } 

    const handleLoginEstudante = (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            
            
          
           axios.post(URLoginE,form)
           .then(({data})=>{
            localStorage.setItem("auth","yes") 
                      console.log(data)
                      navigate('/cardEstudante')
                      setLoading(false)
                      setResponse(true)
           })
        
        }
    }
//administrador
const handleLoginAdministrador = (e) =>{
    e.preventDefault()
    setErrors(validateForm(form))

    if(Object.keys(errors).length === 0){
        
        
      
       axios.post(URLoginA,form)
       .then(({data})=>{
        localStorage.setItem("auth","yes") 
                  console.log(data)
                  navigate('/card')
                  setLoading(false)
                  setResponse(true)
       })
    
    }
}

            
        
    const handleLoginProfessor =  (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            
         
            axios.post(URLoginP,form)
            .then(({data})=>{
                localStorage.setItem("auth","yes") 
                          console.log(data)
                          navigate('/dashboardProf')
                          setLoading(false)
                          setResponse(true)

                        })
    
                    }
                }
    
   return{
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
    handleLoginEstudante,
    handleLoginProfessor,
    handleLoginAdministrador
   }

}

