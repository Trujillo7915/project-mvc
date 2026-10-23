-- =============================================================
-- project-mvc - Datos iniciales de prueba (Seeds)
-- Motor: MySQL 8.4 (InnoDB, utf8mb4)
-- =============================================================

USE project_mvc;

-- -------------------------------------------------------------
-- 1. Roles
-- -------------------------------------------------------------
INSERT INTO `role` (id, name, description) VALUES
  (1, 'admin', 'System administrator with full privileges'),
  (2, 'client', 'Standard client user')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- -------------------------------------------------------------
-- 2. Departamentos (State)
-- -------------------------------------------------------------
INSERT INTO state (id, postal_code, name, description) VALUES
  (1, '05', 'Antioquia', 'Departamento de Antioquia'),
  (2, '11', 'Bogota D.C.', 'Distrito Capital de Bogota'),
  (3, '76', 'Valle del Cauca', 'Departamento de Valle del Cauca')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- -------------------------------------------------------------
-- 3. Ciudades (City)
-- -------------------------------------------------------------
INSERT INTO city (id, postal_code, name, description, state_id) VALUES
  (1, '05001', 'Medellin', 'Capital de Antioquia', 1),
  (2, '05266', 'Envigado', 'Municipio del area metropolitana', 1),
  (3, '11001', 'Bogota', 'Capital de Colombia', 2),
  (4, '76001', 'Cali', 'Capital del Valle del Cauca', 3)
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- -------------------------------------------------------------
-- 4. Tipos de Reserva (Reservation Type)
-- -------------------------------------------------------------
INSERT INTO reservation_type (id, name, description) VALUES
  (1, 'Auditorium', 'Main hall for conferences and summits'),
  (2, 'Meeting Room', 'Equipped meeting room with video-conference support'),
  (3, 'Sports Court', 'Multi-purpose synthetic court')
ON DUPLICATE KEY UPDATE name = VALUES(name);

-- -------------------------------------------------------------
-- 5. Personas (Person)
-- -------------------------------------------------------------
INSERT INTO person (id, name, email, phone) VALUES
  (1, 'Admin Principal', 'admin@projectmvc.com', '+573001234567'),
  (2, 'Juan Perez', 'juan.perez@example.com', '+573109876543')
ON DUPLICATE KEY UPDATE email = VALUES(email);

-- -------------------------------------------------------------
-- 6. Usuarios (User)
-- Contraseñas:
-- admin -> admin123
-- juanperez -> client123
-- -------------------------------------------------------------
INSERT INTO `user` (id, username, password, person_id, role_id) VALUES
  (1, 'admin', '$2a$10$uLlEbjTXl69efD9KMUVviu.Mr5fOc1i6712I.nwH6uV.5V5IX44Gi', 1, 1),
  (2, 'juanperez', '$2a$10$w3yrD2l61ut6p8lbJ8DqeOGu96azNqO8VKsFkHkyabXN3OAWPUVK.', 2, 2)
ON DUPLICATE KEY UPDATE username = VALUES(username);

-- -------------------------------------------------------------
-- 7. Reservas iniciales (Reservation)
-- -------------------------------------------------------------
INSERT INTO reservation (id, name, user_id, reservation_type_id, city_id) VALUES
  (1, 'Tech Conference 2026', 2, 1, 1)
ON DUPLICATE KEY UPDATE name = VALUES(name);
