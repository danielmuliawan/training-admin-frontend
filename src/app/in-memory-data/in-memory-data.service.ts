import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const persons = [
        { id: 1,  Name: 'Sopyan', Email:'sopyan@mitrais.com' },
        { id: 2,  Name: 'Daniel', Email:'daniel@mitrais.com' },
        { id: 3,  Name: 'Wisesa', Email:'wisesa@mitrais.com' },
        { id: 4,  Name: 'Billy', Email:'billy@mitrais.com' },
        { id: 5,  Name: 'Ibnu', Email:'ibnu@mitrais.com' },
        { id: 6,  Name: 'Yuliawan', Email:'yuliawan@mitrais.com' },
        { id: 7,  Name: 'Inez', Email:'inez@mitrais.com' },
        { id: 8,  Name: 'Wimba', Email:'wimba@mitrais.com' },
        { id: 9,  Name: 'Taufik', Email:'taufik@mitrais.com' },
        { id: 10,  Name: 'Deny', Email:'deny@mitrais.com' }
    ];
    return {persons};
  }
}