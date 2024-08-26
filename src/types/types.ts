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
  level?: number;
  sex?: number;
  subjectId?: number;
  profSpeciality?: number;
  isCertified?: boolean;
  ratingFrom?: number;
  ratingTo?: number;
  ageFrom?: number;
  ageTo?: number;
  filterType?: number;
}

interface Option<T, M> {
  value: T;
  label: M;
}

export interface FilterOptionsInterface {
  sex: Option<number | string, string>[];
  age: Option<number, number>[];
  profSpeciality: Option<number | string, string>[],
  ratingOptions: Option<string, string>[]
}
