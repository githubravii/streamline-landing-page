import Form from "next/form";

import { googleLogin } from "../../actions/auth.action.js";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleSignIn() {
  return (
    <Form action={googleLogin}>
      <Button type="submit" variant="outline" className="w-full">
        <div className="flex items-center justify-center gap-2">
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
