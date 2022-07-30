import { useState } from "react"
import Swal from "sweetalert2"
import axios from "axios"
import { useParams } from "react-router-dom";

export const useForm =(initialForm,validateForm)=>{

    const { id } = useParams()
  
    const[form,setForm]= useState(initialForm)
    const[errors,setErrors]= useState({})
    const[loading,setLoading]= useState(false)
    const[response,setResponse]= useState(null)
    

    const URLCADASTRO="http://localhost:3002/cadastroEstudante"
    const URLoginE="http://localhost:3002/loginEstudante"
    const URLoginP= `http://localhost:3002/loginProfessors/${id}`

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
    
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            alert("Enviando Formulario")
            setLoading(true)
            await axios.post(URLCADASTRO)
            .then((response) => {
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

    const handleLoginEstudante = async (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            
            setLoading(true)
            await axios.get(URLoginE)
            .then((res)=>{
              setLoading(false)
              setResponse(true)
            })

        }else{
            Swal.fire(
                'error!',
                'Problemas para accesar  a sua conta',
                'error'
              )

        }
    } 

    const handleLoginProfessor = async (e) =>{
        e.preventDefault()
        setErrors(validateForm(form))

        if(Object.keys(errors).length === 0){
            
            setLoading(true)
            await axios.get(`${URLoginP}/${form.id}`)
            .then((res)=>{
              setLoading(false)
              setResponse(true)
            })

        }else{
            Swal.fire(
                'error!',
                'Problemas para accesar  a sua conta',
                'error'
              )

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
    handleLoginProfessor
   }

}

