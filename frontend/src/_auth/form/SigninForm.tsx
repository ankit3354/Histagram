
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import {
  
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

function SigninForm() {


  return (
    <div >
      <div className="sm:w-420 flex-center flex-col">
        <img
          src="/assets/images/Histagram2.png"
          alt="logo"
          width={240}
          height={240}
        />

        <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">
          Log in to your account
        </h2>

        <p className="text-light-3 small-medium md:base-regular mt-2">
          Welcome back to Histagram, please enter your details.
        </p>

        <form
          // onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          {/* <FormField
            control={value}
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
         {/* <Button type="submit" className="shad-button_primary"> */}
            {/* {isLoading || isUserLoading ? (
              <div className="flex-center gap-2">
                <Loader />
                Loader...
              </div>
            ) : (
              "Log in"
            )}
          </Button> */}

          <p className="text-small-regular text-light-2 text-center mt-2">
            Don&apos;t have an account?
            <Link
              to="/sign-up"
              className="text-primary-500 text-small-semibold ml-1"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SigninForm;
