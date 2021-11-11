import { getCustomRepository} from 'typeorm'
import { ProvidersRepository } from '../repositories/ProvidersRepository'

interface IProviderCreate {
    name: string;
    email: string;
}


class ProviderServices {

    async create({name, email}: IProviderCreate) {

        const providerRepository = getCustomRepository(ProvidersRepository)

        const emailAlreadyExist = await providerRepository.findOne({ email })

        if (emailAlreadyExist) {
            throw new Error('Email jรก existente.')
        }

        const provider = providerRepository.create ({
            name,
            email,
        })

        await providerRepository.save(suppliers)

        return provider
    }

    async index() {

        const providersRepository = getCustomRepository(ProvidersRepository);
        const providers = await providersRepository.find();
        return providers

    }

}

export { ProviderServices }