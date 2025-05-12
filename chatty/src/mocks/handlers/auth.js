import rest from 'msw/rest';
import existingUser from "../data/user.mock"
import { userJwt } from '../data/user.mock';
const BASE_URL=`${process.env.REACT_APP_BASE_ENDPOINT}/api/v1`;

export const signUpMock = rest.post(`${BASE_URL}/auth/signup`, (req, res, ctx) => {
    const result={message: 'User created successfully', user: existingUser,token};  
    return res(ctx.status(201), ctx.json(result));    
});
export const authHnadlers=[signUpMock]
