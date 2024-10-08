const authState = {
      isRegistered : false,
      isLoggedIn : false,
      email: '',
      password : '',
      isError: false,
}
let allUsers = JSON.parse(localStorage.getItem('users')) || []
let currentUser = JSON.parse(localStorage.getItem('current_user')) || authState
export const authReducer = (state = currentUser,action)=>{
switch(action.type){
      case'LOGIN': {
            let user = allUsers.filter((ele)=>ele.email === action.payload.email)
            if(user[0]?.email === action.payload.email){
                  if(!action.payload.password){
                       let updateUser = {...authState,isRegistered:true,email:action.payload.email}
                        return updateUser
                  }
                else if(user[0].password === action.payload.password){
                      let  updateUser ={isRegistered :true,password:true,email:user[0].email,isLoggedIn:true,isError:false}
                        localStorage.setItem('current_user',JSON.stringify(updateUser))
                        return updateUser
                  }
                  else{
                       let  updateUser = {...authState,isRegistered:true,email:action.payload.email,isError:"Wrong Password"}
                        return updateUser
                  }
            }
            else if(!user[0]){
                  if(action.payload.password){
                       let  updatedUser= {...authState,email:action.payload.email,isRegistered:true,isLoggedIn:true}
                        allUsers.push({email:action.payload.email,password:action.payload.password})
                        localStorage.setItem("users",JSON.stringify(allUsers))
                        localStorage.setItem("current_user",JSON.stringify({...updatedUser}))
                        return updatedUser
                  }
                  else if(!action.payload.password){
                      let  updatedUser = {...authState,email:action.payload.email}
                        return updatedUser
                  }
                  else{
                    let   updatedUser = {...authState,isError:"Unknow"}
                        return updatedUser
                  }
            }
            else{
                  let updatedUser = {...authState,isError:"Unknow at end"}
                  return updatedUser
            }

       
      }
      case 'LOGOUT' :{ 
            localStorage.setItem("current_user",JSON.stringify({}))
            return state = {...authState}}
      default : return state
}

}
let cartData = JSON.parse(localStorage.getItem("cart")) || []
export const cartReducer = (state= cartData,action)=>{
switch(action.type){
      case "ADD" : {
            let isExist = state.findIndex(item =>item.title == action.payload.product.title) 
            if(isExist!==-1){
                  let updatedCart =  state.map(item=> item.title === action.payload.product.title ? {...item,quantity: item.qunatity+=action.payload.quantity} : item)
                  localStorage.setItem("cart",JSON.stringify(updatedCart))
                  return [...updatedCart]
            }
            else{
                  let updatedCart =  [...state,{...action.payload.product,quantity:action.payload.quantity}]
                  localStorage.setItem("cart",JSON.stringify(updatedCart))
                  return [...updatedCart]
            }   
      }
      default : return state
}
}