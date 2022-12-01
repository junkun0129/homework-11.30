

export const johnReducer = (state = [], action)=>{
    switch(action.type){
        case "PERSON_ADD":
            return(
                [
                    ...state,
                    {
                        id:Math.random(),
                        name:"John",
                        age:Math.floor(Math.random()*40)
                    }
                ]
                

            )
            
        case "PERSON_DELETE":
            const removedArray = state.filter(person=>person.id !== action.id)
            return(
                removedArray
            )
        
        
    }
}