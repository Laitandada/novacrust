import { env } from "@/env";
import axios from "axios";

export default axios.create({
	baseURL: env.NEXT_PUBLIC_URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
	},
});
export const axiosAuth = axios.create({
	baseURL: env.NEXT_PUBLIC_URL,
	headers: {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "POST",
		"Access-Control-Allow-Headers": "Content-Type, Authorization",
	},
});
