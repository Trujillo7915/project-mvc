# Casos de uso

## Actores

| Actor | Descripción |
|---|---|
| Cliente | Persona que se registra y gestiona sus propias reservas |
| Administrador | Gestiona los catálogos (tipos de reserva, departamentos, ciudades), las personas, los usuarios y todas las reservas |

## Cliente

![Casos de uso del cliente](diagrams/06-use-case-client.svg)

## Administrador

![Casos de uso del administrador](diagrams/07-use-case-administrator.svg)

## Descripción de los casos de uso

| Caso de uso | Actor | Descripción | Relación |
|---|---|---|---|
| Registrarse | Cliente | Crea su Person y su User | «include» Registrar persona |
| Iniciar sesión | Ambos | Ingresa con username y password | |
| Crear reserva | Cliente | Crea una Reservation a su nombre eligiendo un ReservationType y una City | «include» Validar usuario, tipo y ciudad |
| Consultar mis reservas | Cliente | Lista solo sus Reservation | |
| Cancelar reserva | Cliente | Elimina una de sus reservas desde la consulta | «extend» Consultar mis reservas |
| Gestionar personas | Administrador | CRUD de Person | |
| Gestionar roles | Administrador | CRUD de Role | |
| Gestionar usuarios | Administrador | CRUD de User | «include» Validar persona y rol |
| Gestionar tipos de reserva | Administrador | CRUD de ReservationType | |
| Gestionar reservas | Administrador | CRUD de todas las Reservation | «include» Validar usuario, tipo y ciudad |
| Gestionar departamentos | Administrador | CRUD de State | |
| Gestionar ciudades | Administrador | CRUD de City | «include» Validar departamento |

## Supuestos por validar

- **Roles:** resuelto mediante la entidad normalizada `role` y la llave foránea `user.role_id` (permite distinguir `admin` de `client` cumpliendo 3FN).
- **Iniciar sesión:** el inicio de sesión no está construido; se propone porque user tiene password.
