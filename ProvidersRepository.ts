import { EntityRepository, Repository } from 'typeorm';
import { Provider } from '../entities/Providers';

@EntityRepository(Provider)
class ProvidersRepository extends Repository<Provider> {

}

export { ProvidersRepository }