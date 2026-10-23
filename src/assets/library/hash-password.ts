import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

/**
 * Generates a secure cryptographic hash from a plain text password.
 * Never store plain text passwords in the database.
 */
export async function hashPassword(plainText: string): Promise<string> {
  const salt = await bcrypt.genSalt(SALT_ROUNDS);
  return bcrypt.hash(plainText, salt);
}

/**
 * Compares a plain text password with a stored hash.
 * Returns true if the password matches, false otherwise.
 */
export async function comparePassword(
  plainText: string,
  hash: string
): Promise<boolean> {
  return bcrypt.compare(plainText, hash);
}
