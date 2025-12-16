import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import useAxiosAuth from "@/hooks/useAxiosAuth";

const useExampleService = () => {
	const axiosAuth = useAxiosAuth();

	const examplePost = async (payload: any) => {
		try {
			const { data } = await axiosAuth.post(`backend-url`, payload);

			return data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					// Accessing the error message from the response data
					const errorMessage = axiosError?.response?.data?.message;
					// toast(errorMessage, {
					// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
					// 	action: {
					// 		label: "Undo",
					// 		onClick: () => console.log("Undo"),
					// 	},
					// });
					toast.error(errorMessage);
					return axiosError?.response?.data;
				}
			}
			// Handle other errors
			console.error("Error:", error.message);
			throw error;
		}
	};

	const exampleGet = async () => {
		try {
			const { data } = await axiosAuth.get(`backend-url
            `);
			return data?.data;
		} catch (error: any) {
			if (axios.isAxiosError(error)) {
				const axiosError = error;
				if (axiosError.response) {
					// Accessing the error message from the response data
					const errorMessage = axiosError?.response?.data?.message;
					// toast(errorMessage, {
					// 	// description: "Sunday, December 03, 2023 at 9:00 AM",
					// 	action: {
					// 		label: "Undo",
					// 		onClick: () => console.log("Undo"),
					// 	},
					// });
					toast.error(errorMessage);
					return axiosError?.response?.data;
				}
			}
			// Handle other errors
			console.error("Error:", error.message);
			throw error;
		}
	};

	return { exampleGet, examplePost };
};

export default useExampleService;
