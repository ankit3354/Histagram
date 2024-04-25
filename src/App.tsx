import AuthLayout from "./_auth/AuthLayout";
import SigninForm from "./_auth/form/SigninForm";
import SignupForm from "./_auth/form/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Routes, Route } from "react-router-dom";
import {
  Home,
  Explore,
  UpdateProfile,
  Profile,
  EditPost,
  PostDetails,
  AllUsers,
  Saved,
  CreatePost,
  // LikePosts,
} from "./_root/pages";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* Signi Public Routing  */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* Pivate Home page Routing  */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>
      </Routes>

      <Toaster />
    </main>
  );
}

export default App;
