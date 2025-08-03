import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BACKEND_URL } from "@/config/env";
import { useAuth, useUser } from "@clerk/clerk-react";

export default function AddMentorPage() {
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const { user } = useUser();

  const [formData, setFormData] = useState({
    clerk_mentor_id: "",
    first_name: "",
    last_name: "",
    address: "",
    email: "",
    title: "",
    session_fee: 0,
    profession: "",
    subject: "",
    phone_number: "",
    qualification: "",
    mentor_image: "",
    class_room_id: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  // Set clerk_mentor_id when user is available
  useEffect(() => {
    if (user) {
      setFormData(prev => ({
        ...prev,
        clerk_mentor_id: user.id
      }));
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "session_fee" ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const token = await getToken({ template: "skillmentor-auth-frontend" });
      if (!token) {
        throw new Error("Authentication token not available");
      }

      const response = await fetch(`${BACKEND_URL}/academic/mentor`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          ...formData,
          class_room_id: parseInt(formData.class_room_id)
        })
      });

      if (!response.ok) {
        if (response.status === 403) {
          throw new Error("Access denied. Admin privileges required.");
        }
        throw new Error("Failed to create mentor");
      }

      navigate("/");
    } catch (error) {
      console.error("Error creating mentor:", error);
      alert(error instanceof Error ? error.message : "Failed to create mentor. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-10 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Add New Mentor (Admin Only)</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First Name</Label>
                <Input id="first_name" name="first_name" type="text" value={formData.first_name} onChange={handleInputChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last Name</Label>
                <Input id="last_name" name="last_name" type="text" value={formData.last_name} onChange={handleInputChange} required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" name="title" type="text" value={formData.title} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone_number">Phone Number</Label>
              <Input id="phone_number" name="phone_number" type="tel" value={formData.phone_number} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" type="text" value={formData.address} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="profession">Profession</Label>
              <Input id="profession" name="profession" type="text" value={formData.profession} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="qualification">Qualification</Label>
              <Input id="qualification" name="qualification" type="text" value={formData.qualification} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="session_fee">Session Fee (in cents)</Label>
              <Input id="session_fee" name="session_fee" type="number" value={formData.session_fee} onChange={handleInputChange} min="0" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="mentor_image">Mentor Image URL</Label>
              <Input id="mentor_image" name="mentor_image" type="url" value={formData.mentor_image} onChange={handleInputChange} required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="class_room_id">Enter Classroom ID</Label>
              <Input
                id="class_room_id"
                name="class_room_id"
                type="number"
                value={formData.class_room_id}
                onChange={handleInputChange}
                placeholder="e.g., 101"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">Subject / Description</Label>
              <textarea
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Enter description and expertise"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                required
              />
            </div>

            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate("/")} className="flex-1">Cancel</Button>
              <Button type="submit" disabled={isLoading} className="flex-1">{isLoading ? "Creating..." : "Create Mentor"}</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
