import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NewAccountForm() {
  // const [loading, setLoading] = useState(false);
  // const [errors, setErrors] = useState<string[]>([]);

  //   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();
  //     setLoading(true);
  //     setErrors([]);

  //     // Simulating form submission
  //     await new Promise((resolve) => setTimeout(resolve, 2000));

  //     // Simulating error for demonstration
  //     setErrors(["This is a sample error message."]);
  //     setLoading(false);
  //   };
  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.target);
  //   await CreateUserData(formData);
  // };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          New Account
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Name</Label>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Name"
                // disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Lastname</Label>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Lastname"
                // disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              //   pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              // disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone number"
              //   pattern="^[0-9]*$"
              // disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              // disabled={loading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password_confirmation">Confirm Password</Label>
            <Input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Re-type password"
              // disabled={loading}
            />
          </div>
          <Button type="submit" className="w-full">
            {/* {loading ? "Creating account..." : "Create account"}
             
             */}
            Crear cuenta
          </Button>
        </form>
        {/* {errors.length > 0 && (
          <div className="mt-4 rounded-md border border-red-200 bg-red-50 p-4">
            {errors.map((error, index) => (
              <p key={index} className="flex items-center text-sm text-red-600">
                <AlertCircle className="mr-2 h-4 w-4" />
                {error}
              </p>
            ))}
          </div>
        )} */}
      </CardContent>
    </Card>
  );
}
