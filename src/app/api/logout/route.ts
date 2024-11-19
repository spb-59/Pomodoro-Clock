import type { NextApiHandler } from "next";
import { TOKEN_COOKIE_NAME } from "../../../common/env-config";

const handler: NextApiHandler = (req, res) => {
  if (req.method === "GET") {
    // Destroy the cookie by setting its expiry date to a past date
    res.setHeader(
      "Set-Cookie",
      `${TOKEN_COOKIE_NAME}=; Max-Age=0; Path=/; HttpOnly;`,
    );

    // Redirect to the login page
    res.redirect("/login");
  } else {
    res.status(405).send("Method not Allowed");
  }
};

export default handler;
