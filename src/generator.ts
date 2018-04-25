import * as faker from 'faker';
import { Person } from './person';

export class Generator {
    private readonly NbItems: number;

    /**
     * Generator constructor
     * nbItems : Number of items to generate
     */
    constructor(nbItems: number) {
        this.NbItems = nbItems;
    }

    /**
     * GenerateData
     */
    public GenerateData() {
        const result = Array<Person>();

        for (let index = 0; index < this.NbItems; index++) {

            const person = new Person();

            person.FirstName = faker.name.firstName();
            person.LastName = faker.name.lastName();
            person.Email = faker.internet.email(person.FirstName, person.LastName, 'test.com');

            result.push(person);
        }

        return result;
    }
}
