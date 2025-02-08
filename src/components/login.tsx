import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

function LoginForm() {
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   await handleLogin(formData);
  // };
  return (
    // <Card className="mx-auto w-full max-w-md">
    //   <CardHeader>
    //     <CardTitle className="text-center text-2xl font-bold">Login</CardTitle>
    //   </CardHeader>
    //   <CardContent>
    //     <form onSubmit={handleSubmit} className="space-y-4">
    //       <div className="space-y-2">
    //         <Label htmlFor="email">Email</Label>
    //         <Input
    //           id="email"
    //           name="email"
    //           type="email"
    //           placeholder="Email"
    //           //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
    //           required
    //         />
    //       </div>
    //       <div className="space-y-2">
    //         <Label htmlFor="password">Password</Label>
    //         <Input
    //           id="password"
    //           name="password"
    //           type="password"
    //           placeholder="Password"
    //           required
    //         />
    //       </div>
    //       <Button type="submit" className="w-full">
    //         Log In
    //       </Button>
    //     </form>
    //   </CardContent>
    // </Card>

    <div className="flex items-center justify-center px-6 py-12 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Iniciar Sesión o Registrarse
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form
            // onSubmit={handleLogin}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Correo electrónico"
                // onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Input
                type="password"
                placeholder="Contraseña"
                // onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="space-y-4">
              <Button type="submit" className="w-full">
                {/* {isLoading ? "Cargando..." : "Iniciar Sesión"} */}
                Iniciar Sesión
              </Button>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                // onClick={handleSignUp}
                // disabled={isLoading}
              >
                Registrarse
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
export default LoginForm;
