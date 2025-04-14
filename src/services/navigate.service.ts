const EXTERNAL_URL = process.env.NEXT_PUBLIC_EXTERNAL_URL || "https://loadforge.online";

export class ExternalService {
  static redirectToExternal(): void {
    if (typeof window !== "undefined") {
      window.open(EXTERNAL_URL, "_blank");
    }
  }
}
