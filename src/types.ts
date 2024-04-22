interface Experience {
    year: number;
    description: string;
}

interface CVDetails {
    experience: Experience[];
    education: string[];
}

interface CVPersonal {
    photo: string;
    name: string;
    surname: string;
    position: string;
}
  
interface CVData {
    personal: CVPersonal;
    details: CVDetails;    
}

export type { CVData, CVPersonal, CVDetails }
