import { TableData } from "@/components/data-table";
import { faker } from "@faker-js/faker";

export interface Patients {
  name: string
  key: string
  room: string
  age: number
  diagnosis: string
  allergies: string
  state: string
  responsibleNurse: string
}




export const patients: TableData<Patients>[] = [
  {
    name: faker.person.fullName({ sex: "male" }),
    key: faker.string.alpha(10),
    room: String(faker.number.int(100)),
    age: faker.number.int({ min: 10, max: 100 }),
    diagnosis: 'Ankle Fracture',
    allergies: 'None',
    state: "Stable",
    responsibleNurse: faker.person.fullName({ sex: "female" })
  },
  {
    name: faker.person.fullName({ sex: "male" }),
    key: faker.string.alpha(10),
    room:  String(faker.number.int(100)),
    age: faker.number.int({ min: 10, max: 100 }),
    diagnosis: 'Pneumonia',
    allergies: 'Penicillin',
    state: "Critical",
    responsibleNurse: faker.person.fullName({ sex: "female" })
  },
  {
    name: faker.person.fullName({ sex: "male" }),
    key: faker.string.alpha(10),
    room:  String(faker.number.int(100)),
    age: faker.number.int({ min: 10, max: 100 }),
    diagnosis: 'Type 2 Diabetes',
    allergies: 'Sulfonamides',
    state: "Recovering",
    responsibleNurse: faker.person.fullName({ sex: "female" })
  }
];


