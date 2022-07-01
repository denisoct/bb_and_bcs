import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/breaking-bad", { replace: true });
  };

  return (
    <>
      <div className="min-h-screen p-3">
        <button
          className="bg-gradient-to-r from-red-600 via-cyan-600 to-yellow-600 bg-clip-text font-[Nunito] text-4xl font-extrabold text-transparent"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </>
  );
};

export default LoginScreen;
