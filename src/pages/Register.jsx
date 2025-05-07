import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRegisterUserMutation } from "@/features/api/authApi";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'student'
    });

    const [registerUser, { isLoading }] = useRegisterUserMutation();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        e.stopPropagation(); // Stop event propagation
        
        if (!formData.name || !formData.email || !formData.password) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            const response = await registerUser(formData).unwrap();
            if (response) {
                toast.success(response.message || "Registration successful");
                setTimeout(() => {
                    navigate('/login');
                }, 1500); // Add delay before navigation
            }
        } catch (error) {
            toast.error(error.data?.message || "Registration failed");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">Create Account</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <Label className="text-base dark:text-white">Name</Label>
                    <Input
                        type="text"
                        className="mt-2 text-base"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <Label className="text-base dark:text-white">Email</Label>
                    <Input
                        type="email"
                        className="mt-2 text-base"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <Label className="text-base dark:text-white">Password</Label>
                    <Input
                        type="password"
                        className="mt-2 text-base"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={(e) => setFormData({...formData, password: e.target.value})}
                        required
                    />
                </div>
                <div>
                    <Label className="text-base dark:text-white">Register as</Label>
                    <Select 
                        value={formData.role}
                        onValueChange={(value) => {
                            console.log("Selected role:", value);
                            setFormData({...formData, role: value});
                        }}
                    >
                        <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="instructor">Instructor</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <Button type="submit" className="w-full text-base py-6" disabled={isLoading}>
                    {isLoading ? <Loader2 className="animate-spin" /> : "Register"}
                </Button>
            </form>
            <p className="mt-6 text-center text-gray-600 dark:text-gray-300">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">
                    Login
                </Link>
            </p>
        </div>
    );
};

export default Register;