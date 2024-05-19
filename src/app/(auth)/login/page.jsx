import { loginHandle } from "@/lib/action";
const LoginPage = async () => {
  return (
    <div>
      <form action={loginHandle}>
        <button>Login with Github</button>
      </form>
    </div>
  );
};

export default LoginPage;
