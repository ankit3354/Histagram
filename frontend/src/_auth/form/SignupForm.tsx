// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";

function SignupForm() {

  // const hanldeShowPassword = () => {
  //   setShowPassword(!Showpassword);
  // };

  return (
    <div>
      <div className="sm:w-420 flex-center flex-col">
        <img
          src="/assets/images/Histagram2.png"
          alt="logo"
          width={200}
          height={200}
        />
        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-6">
          Create a new account
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          To use Histagram, please enter your details
        </p>

        <form
          // onSubmit={form.handleSubmit(handleSignup)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Name</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Username</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Email</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="shad-form_label">Password</FormLabel>
                <FormControl>
                  <div className="relative">
                    <Input
                      type={Showpassword ? "text" : "password"}
                      className="shad-input"
                      {...field}
                    />
                    <span
                      onClick={hanldeShowPassword}
                      className="cursor-pointer  absolute top-5 left-[88%]"
                    >
                      {Showpassword ? <IoEye /> : <IoMdEyeOff />}
                    </span>
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
          {/* <Button type="submit" className="shad-button_primary">
            {isCreatingAccount || isSigningInUser || isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader />
                Loader...
              </div>
            ) : (
              "Sign up"
            )}
          </Button> */}

          <p className="text-small-regular text-light-2 text-center mt-4">
            Already have an account?
            <Link
              to="/sign-in"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
