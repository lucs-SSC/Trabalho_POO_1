import { Request, Response } from 'express'
import { ProviderServices } from '../services/ProviderServices'

class ProvidersController {

    async create(request: Request, response: Response) {
        const {name, email} = request.body
        const providerServices = new ProviderServices()

        try {
            const providers = await providerServices.create({name, email});
            return response
                        .json(providers);
        } catch(err) {
            return response
                        .status(400)
                        .json({message: err.message})
        }
    }

    async index(request: Request, response: Response) {
        const providerServices = new ProviderServices();

        try {
            const providers = await providerServices.index();
            return response
                        .json(providers)

        } catch(err) {
            return response
                        .status(400)
                        .json({message: err.message})
        }
    }
}

export { ProvidersController }