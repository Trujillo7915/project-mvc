// =============================================================
// project-mvc - Domain Entities and Data Transfer Objects
// Rules: All types and attributes in English, singular and camelCase.
// =============================================================

// -------------------------------------------------------------
// Module: client
// -------------------------------------------------------------

export interface Person {
  id: number;
  name: string;
  email: string;
  phone?: string | null;
}

export type CreatePersonInput = Omit<Person, 'id'>;
export type UpdatePersonInput = Partial<CreatePersonInput>;

export interface Role {
  id: number;
  name: string;
  description?: string | null;
}

export type CreateRoleInput = Omit<Role, 'id'>;
export type UpdateRoleInput = Partial<CreateRoleInput>;

export interface User {
  id: number;
  username: string;
  password?: string;
  personId: number;
  roleId: number;
  // Populated relations
  person?: Person;
  role?: Role;
}

export interface UserResponse {
  id: number;
  username: string;
  personId: number;
  roleId: number;
  person?: Person;
  role?: Role;
}

export interface CreateUserInput {
  username: string;
  password: string;
  personId: number;
  roleId: number;
}

export type UpdateUserInput = Partial<CreateUserInput>;

// -------------------------------------------------------------
// Module: location
// -------------------------------------------------------------

export interface State {
  id: number;
  postalCode: string;
  name: string;
  description?: string | null;
}

export type CreateStateInput = Omit<State, 'id'>;
export type UpdateStateInput = Partial<CreateStateInput>;

export interface City {
  id: number;
  postalCode: string;
  name: string;
  description?: string | null;
  stateId: number;
  // Populated relation
  state?: State;
}

export type CreateCityInput = Omit<City, 'id' | 'state'>;
export type UpdateCityInput = Partial<CreateCityInput>;

// -------------------------------------------------------------
// Module: reservation
// -------------------------------------------------------------

export interface ReservationType {
  id: number;
  name: string;
  description?: string | null;
}

export type CreateReservationTypeInput = Omit<ReservationType, 'id'>;
export type UpdateReservationTypeInput = Partial<CreateReservationTypeInput>;

export interface Reservation {
  id: number;
  name: string;
  userId: number;
  reservationTypeId: number;
  cityId: number;
  // Populated relations
  user?: UserResponse;
  reservationType?: ReservationType;
  city?: City;
}

export type CreateReservationInput = Omit<
  Reservation,
  'id' | 'user' | 'reservationType' | 'city'
>;
export type UpdateReservationInput = Partial<CreateReservationInput>;

// -------------------------------------------------------------
// Shared API Response Envelope
// -------------------------------------------------------------

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T | null;
  message?: string;
  error?: string;
}
