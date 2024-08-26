export interface Specialist {
  userId: string;
  name: string;
  sex: number;
  age: number;
  birthDate: string;
  photoUrl: string;
  avatarId: string;
  level: number;
  rating: number;
  hasVideo: boolean;
  isCertified: boolean;
  defaultSubjectName: string;
  subjectsCount: number;
  isFavorite: boolean;
  onlineStatus: number;
  lastActivityTime: string;
}

export interface Subject {
  id: number;
  name: string;
  sequence: number;
}

export interface Filters {
  level?: string;
  sex?: string;
  subjectId?: string;
  profSpeciality?: string;
  isCertified?: boolean;
  ratingFrom?: string;
  ratingTo?: string;
  ageFrom?: string;
  ageTo?: string;
  filterType?: string;
}

interface Option<T, M> {
  value: T;
  label: M;
}

export interface FilterOptionsInterface {
  sex: Option<string, string>[];
  age: Option<string, string>[];
  profSpeciality: Option<string, string>[],
  ratingOptions: Option<string, string>[]
}
