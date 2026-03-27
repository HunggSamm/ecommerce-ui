import { useForm, FormProvider } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/form";

const loginSchema = z.object({
    email: z.email({ message: "Email không hợp lệ" }),
    password: z.string().min(6, { message: "Password tối thiểu 6 ký tự" }),
});

const Login = () => {
    const methods = useForm({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Login data:", data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={methods.handleSubmit(onSubmit)}
                className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md"
            >
                <TextField name="email" label="Email" type="email" />
                <TextField name="password" label="Password" type="password" />
                <Button type="submit" className="w-full mt-4">
                    Login
                </Button>
            </form>
        </FormProvider>
    );
};

export default Login;