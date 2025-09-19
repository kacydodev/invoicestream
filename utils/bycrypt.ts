import bcrypt from 'bcryptjs';

const saltRounds = 10; // Adjust for desired security vs. performance trade-off

export async function hashPassword(plainPassword: string) {
	try {
		const salt = await bcrypt.genSalt(saltRounds);
		const hashedPassword = await bcrypt.hash(plainPassword, salt);
		return hashedPassword;
	} catch (error) {
		throw error;
	}
}
