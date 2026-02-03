import { getUserByEmail } from "../models/authModel";

export async function login(email, password) {
    if (!email || !password) {
        return { success: false, message: "Please enter email and password" };
    }

    try {
        const data = await getUserByEmail(email);

        if (data.length === 0) {
            return { success: false, message: "Email does not exist" };
        }

        const user = data[0];
        if (user.password !== password) {
            return { success: false, message: "Wrong password" };
        }

        return { success: true, user };
    } catch {
        return { success: false, message: "Server error" };
    }
}
