import BASE_URL from "@/lib/baseUrl";

export async function createUser(params) {
  try {
    const response = await fetch(`${BASE_URL}/user`, {
      method: "POST",
      body: JSON.stringify(params),
    });
    return response;
  } catch (error) {
    throw new Error({ message: error.response.message });
  }
}
