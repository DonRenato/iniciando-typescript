import { Request, Response } from 'express'; 
import EmailService from '../services/EmailServices';

const users = [
    {
        name: 'Renato',
        email: 'ravellar.machado@outlook.com'
    }
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create (req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail({
            to:{
            name: 'Renato Avellar',
            email: 'ravellar.machado@outlook.com'
        },
        message:{
            subject: 'Bem-vindo ao sistema',
            body: 'Seja bem-vindo'

        }
        });
        return res.send('Email sended');
    }
};