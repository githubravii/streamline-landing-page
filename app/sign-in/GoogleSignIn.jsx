import Form from "next/form";

import { googleLogin } from "../../actions/auth.action.js";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleSignIn() {
  return (
    <Form action={googleLogin} className="w-full max-w-md mx-auto px-5 py-2">
      <Button type="submit" variant="outline" className="w-full p-3">
        <div className="flex items-center justify-center gap-2 p-3">
          <Image
            src="/icons8-google-48.png"
            alt="Google"
            width={20}
            height={20}
          />
          <span>Continue with Google</span>
        </div>
      </Button>
    </Form>
  );
}
