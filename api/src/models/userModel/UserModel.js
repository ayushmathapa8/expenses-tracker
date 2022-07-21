import UserSchema from './UserSchema.js'

 export const insertUser = obj =>{
    return UserSchema(obj).save()
}


export const getOneUser = (filter )=>{
    return UserSchema.findOne(filter);
};