import { useEffect } from "react";
import { useRefreshToken } from "./useRefreshToken";
import { axiosAuth } from "@/lib/axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const useAxiosAuth = () => {
	const token = Cookies.get("token");
	const refreshToken = useRefreshToken();
	const router = useRouter();

	useEffect(() => {
		const requestIntercept = axiosAuth.interceptors.request.use(
			(config: any) => {
				if (!config.headers["Authorization"]) {
					config.headers["Authorization"] = `Bearer ${token}`;
				}
				return config;
			},
			(error: any) => Promise.reject(error)
		);

		const responseIntercept = axiosAuth.interceptors.response.use(
			(response) => response,
			async (error) => {
				const prevRequest = error?.config;
				if (error?.response?.status === 401 && !prevRequest?.sent) {
					prevRequest.sent = true;
					await refreshToken();
					prevRequest.headers["Authorization"] = `Bearer ${token}`;
					return axiosAuth(prevRequest);
				}
				return Promise.reject(error);
			}
		);

		return () => {
			axiosAuth.interceptors.request.eject(requestIntercept);
			axiosAuth.interceptors.response.eject(responseIntercept);
		};
	}, [token, refreshToken]);

	return axiosAuth;
};

export default useAxiosAuth;
