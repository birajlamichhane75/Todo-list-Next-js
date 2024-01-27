const {user,password} = process.env

export const connectstr = "mongodb+srv://"+user+":"+password+"@cluster0.npihanx.mongodb.net/to-do-list?retryWrites=true&w=majority"