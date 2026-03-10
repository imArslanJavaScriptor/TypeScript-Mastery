
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}


interface Person {
  address?: {
    country: string;
    zipCode: number;
    city: string;
    state: string;
  };
  profession?: string;
  passion?: number;
}

export {Person}