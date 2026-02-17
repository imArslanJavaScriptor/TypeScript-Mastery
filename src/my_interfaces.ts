interface User {
  firstName: string;
  lastName: string;
  age?: number;
}

// Hum Interface ko re-open kr skte ha koi issue nhi ayega.
interface NewUser {
  userName: string;
  userAge: number;
}

interface NewUser {
  userDesignation?: string;
  userLoacation: string;
}

interface AboutUser {
    userName: string,
    userAge: number,
    userAddress?: {
        country: string,
        zipcode: number,
        houseNumber: string,
        city: string,
        state: string
    }
}

export {User, AboutUser, NewUser}