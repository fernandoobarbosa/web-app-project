import User from '../models/user'
import hash from 'object-hash'
import jwt from 'jsonwebtoken'

export const getAll = async () => {

    const users = await User.find()
    return users
}

export const authenticate = async (login, password) => {
    const hashPassword = hash(password)

    const user = await User.findOne({ login: login, password: hashPassword }).exec();
    if (user) {
        const id = login // id do usuário
        const token = jwt.sign({ id }, 'keyTest', { // verificação do token
            expiresIn: 300 // tempo do token em segundos
        })
        return { auth: true, token: token }
    }
    throw new Error("You have entered an invalid username or password")
}

export const create = async (login, password) => {
    const hashPassword = hash(password)
    const user = await User.insertMany([{ login: login, password: hashPassword }])
    return user
}

// export const teste = async () => {

//     const user = await User.update(
//         { login: 'admin2' },
//         {
//             $push: {
//                 games: {
//                     $each: [{ name: 'Uncharted 4', genre: 'Adventure' }, { name: 'God of War', genre: 'Gods' },
//                     { name: 'Pokemon Diamond', genre: 'Puzzle' }]
//                 }
//             }
//         }
//     )

//     return user

// }



