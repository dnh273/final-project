import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ILogin } from "../../interface";
import authApi from "../../api/authApi";
import { setToken } from "../../utils/storage";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<ILogin> = (data) => {
    setIsLoading(true);
    authApi
      .login(data)
      .then((res) => {
        console.log(res.data.accessToken);
        if (res.status === 200) {
          const { accessToken } = res.data;
          setToken(accessToken);
          navigate("/");
        }
      })
      .catch((err) => {
        setErrorMessage(err.response.data.msg);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <form
        className="font-inter rounded-md bg-white max-w-144 flex flex-col px-16 pt-20 pb-12"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className=" text-3xl font-bold text-center">Login</p>

        <div className="flex flex-col pb-4 pt-4 gap-4">
          <div className="relative">
            <input
              className={`py-4 px-6 text-sm rounded-lg border border-gray-600  ${
                errors?.email && "border-red-500"
              }`}
              placeholder="get@ziontutorial.com"
              type="email"
              {...register("email", {
                required: "Please fill the email",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please fill correct email",
                },
              })}
            />
            <small className="text-red-500 pt-2 font-semibold">
              {errors?.email ? errors.email.message : ""}
            </small>
          </div>
          <div className="relative">
            <input
              className={`py-4 px-6 text-sm rounded-lg border border-gray-600  ${
                errors.password && "border-red-500"
              }`}
              placeholder="password"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Please fill the password",
                minLength: { value: 6, message: "Length must greater than 6" },
              })}
            />
            {showPassword ? (
              <i
                className={`ri-eye-off-fill absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            ) : (
              <i
                className={`ri-eye-fill absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer`}
                onClick={() => setShowPassword(!showPassword)}
              ></i>
            )}
            <small className="text-red-500 pt-2 font-semibold">
              {errors?.password ? errors.password.message : ""}
            </small>
          </div>
        </div>
        <button
          type="submit"
          className="font-inter py-4 px-6 bg-blue-600 rounded-lg cursor-pointer"
        >
          <p className="text-white font-semibold flex justify-center">
            {" "}
            {isLoading ? (
              <svg
                aria-hidden="true"
                className="w-4 h-4 text-gray-100 animate-spin fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            ) : (
              "Login"
            )}
          </p>
        </button>
        <p className="text-sm text-red-600 pt-3 text-center font-semibold">
          {errorMessage}
        </p>
      </form>
    </>
  );
};

export default LoginForm;
