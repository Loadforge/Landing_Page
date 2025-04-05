const EXTERNAL_URL = process.env.NEXT_PUBLIC_EXTERNAL_URL || "https://loadforge.github.io/SITE/";

export class ExternalService {


  static redirectToExternal(): void {
    if (typeof window !== "undefined") {
      window.location.href = EXTERNAL_URL;
    }
  }
}
