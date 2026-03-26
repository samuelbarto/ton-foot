import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentification requise.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="TON FOOT Admin", charset="UTF-8"',
    },
  });
}

export function middleware(request: NextRequest) {
  const adminUser = process.env.ADMIN_USER;
  const adminPass = process.env.ADMIN_PASS;

  if (!adminUser || !adminPass) {
    return unauthorizedResponse();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const encodedCredentials = authHeader.split(" ")[1];
  if (!encodedCredentials) {
    return unauthorizedResponse();
  }

  let decodedCredentials = "";
  try {
    decodedCredentials = atob(encodedCredentials);
  } catch {
    return unauthorizedResponse();
  }

  const [providedUser, providedPass] = decodedCredentials.split(":");
  if (providedUser !== adminUser || providedPass !== adminPass) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/waitlist-admin/:path*"],
};
