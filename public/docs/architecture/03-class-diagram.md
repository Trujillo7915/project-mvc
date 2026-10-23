# Diagrama de clases

## 1. Clases del dominio (model)

![Clases del dominio](diagrams/03-class-domain.svg)

`password` es privado: el modelo nunca lo devuelve en una consulta.

## 2. Capas MVC por entidad

Todas las entidades siguen el mismo patrón. Ejemplo con **Person**:

![Capas MVC de Person](diagrams/04-class-mvc-person.svg)

## 3. Controladores y modelos de la aplicación

![Controladores y modelos](diagrams/05-class-controller-model.svg)

## Archivos que corresponden a cada clase

Las clases y componentes van en PascalCase; los archivos, en kebab-case ([best-practice.md](../governance/best-practice.md#2-cuándo-usar-cada-notación)).

| Clase / componente | Archivo |
|---|---|
| PersonList, PersonForm | `src/view/client/person/person-list.tsx`, `person-form.tsx` |
| RoleList, RoleForm | `src/view/client/role/role-list.tsx`, `role-form.tsx` |
| UserList, UserForm | `src/view/client/user/user-list.tsx`, `user-form.tsx` |
| ReservationTypeList, ReservationTypeForm | `src/view/reservation/reservation-type/reservation-type-list.tsx`, `reservation-type-form.tsx` |
| ReservationList, ReservationForm | `src/view/reservation/reservation/reservation-list.tsx`, `reservation-form.tsx` |
| StateList, StateForm | `src/view/location/state/state-list.tsx`, `state-form.tsx` |
| CityList, CityForm | `src/view/location/city/city-list.tsx`, `city-form.tsx` |
| PersonController | `src/controller/client/person-controller.ts` |
| RoleController | `src/controller/client/role-controller.ts` |
| UserController | `src/controller/client/user-controller.ts` |
| ReservationTypeController | `src/controller/reservation/reservation-type-controller.ts` |
| ReservationController | `src/controller/reservation/reservation-controller.ts` |
| StateController | `src/controller/location/state-controller.ts` |
| CityController | `src/controller/location/city-controller.ts` |
| PersonModel | `src/model/client/person-model.ts` |
| RoleModel | `src/model/client/role-model.ts` |
| UserModel | `src/model/client/user-model.ts` |
| ReservationTypeModel | `src/model/reservation/reservation-type-model.ts` |
| ReservationModel | `src/model/reservation/reservation-model.ts` |
| StateModel | `src/model/location/state-model.ts` |
| CityModel | `src/model/location/city-model.ts` |
