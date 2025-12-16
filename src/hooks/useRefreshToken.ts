"use client";

import { routes } from "@/lib/constants";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const useRefreshToken = () => {
	const router = useRouter();
	const handleRefreshToken = async () => {
		router.push(routes.signin);
		// const refreshToken = Cookies.get("refreshToken");

		// if (!refreshToken) {
		// 	console.error("Refresh token is not available.");
		// 	return;
		// }

		// try {
		// 	const { data } = await axios.patch(
		// 		`${process.env.NEXT_PUBLIC_URL}/auth/refresh-tokens`,
		// 		{},
		// 		{
		// 			headers: {
		// 				Authorization: `Bearer ${refreshToken}`,
		// 			},
		// 		}
		// 	);

		// 	const accessToken = data?.data?.accessToken;
		// 	const newRefreshToken = data?.data?.refreshToken;
		// 	if (accessToken && newRefreshToken) {
		// 		Cookies.set("token", accessToken);
		// 		Cookies.set("refreshToken", newRefreshToken);
		// 		window.location.reload();
		// 	}
		// } catch (error: any) {
		// 	console.error("Error refreshing token:", error.message);
		// }
	};

	return handleRefreshToken;
};
